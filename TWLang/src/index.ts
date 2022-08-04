import { match, P } from "ts-pattern";
import { Env, std_env } from "./environment";
import { eval_obj } from "./evaluator";
import { List, TWNumber, TWObject, TWObjectType } from "./objects";
import { parse } from "./parser";
import { Result, ResultFactory } from "./result";
import { tokenize } from "./tokenizer";

function main() {
    
    window.twlang_std = std_env
    append_stored_env_vars(std_env)

    let repl_div = $('<div id="twlang_repl"></div>')
        .prependTo($("body"))
        .css({
            'z-index': '60000',
            "border": "1px solid #7d510f",
            "display": "block",
            "position": "fixed",
            "background": "#ebd6ab",
            "overflow": "hidden"
        })
        .addClass(["vis moveable"])
        .draggable({handle: "h4"})
        .append($(`<h4>TWLang REPL</h4>`).addClass(["head"]))
    let repl_content = $('<div id="twlang_repl_content"></div>')
        .css({
            'padding': '8px'
        })
    .appendTo(repl_div)
    $('<div id="twlang_repl_out"></div>').css({
        'width': '390px',
        'height': '360px',
        'overflow-y': 'scroll',
        })
        .appendTo(repl_content)
    
    $('<div></div>').append(
        $('<textarea id="twlang_input"></textarea>')
            .css({ 'width': '360px', 'resize': 'vertical' })
            .on('keydown', (e) => {
                if (e.ctrlKey && e.keyCode === 13)
                {
                    let text = ($("#twlang_input").val() as string | undefined) ?? ''
                    print_string("twlang > " + text, "green")
                    print_result(reval(text))
                }
            })
    ).append(
        $('<button>eval</button>').on('click', () => {
            let text = ($("#twlang_input").val() as string | undefined) ?? ''
            print_string("twlang > " + text, "green")
            print_result(reval(text))
        })
    )
    .appendTo(repl_content)
        
}

interface WorldSpeed {
    world_speed: number,
    unit_speed: number
}

function create_stored_env_vars() {
    if (!window.game_data)
        return
    
    var data_url = `https://${window.game_data.world}.divokekmeny.cz/page/settings`
    return fetch(data_url).then(x => x.text())
        .then(x => parse_world_data(x))
        .catch(x => { return { world_speed: 1, unit_speed: 1 } })
        .then(x => {
            if (!window.game_data)
                return
            let obj = [["unit-speed", TWNumber(x.unit_speed)], ["world-speed", TWNumber(x.world_speed)]]
            localStorage.setItem(`${window.game_data.world}_twlang_stored_env`, JSON.stringify(obj))
        })
}

function parse_world_data(x: string) : WorldSpeed
{
    var parser = new DOMParser()

    var doc = parser.parseFromString(x, "text/html")
    var worldSpeed = parseFloat((doc.getElementsByClassName("data-table")[0] as HTMLTableElement).rows[0].cells[1].textContent ?? "1")
    var unitSpeed = parseFloat((doc.getElementsByClassName("data-table")[0] as HTMLTableElement).rows[1].cells[1].textContent ?? "1")

    return {world_speed: worldSpeed, unit_speed: unitSpeed}
}

async function append_stored_env_vars(env: Env) {
    if (!window.game_data)
        return
    
    let k = localStorage.getItem(`${window.game_data.world}_twlang_stored_env`)
    if (!k) {
        await create_stored_env_vars()
        k = localStorage.getItem(`${window.game_data.world}_twlang_stored_env`)
    }

    let items: [string, TWObject][] = JSON.parse(k ?? "")
    items.forEach(x => {
        env.set(x[0], x[1])
    })      
}

function print_result(result: Result<TWObject, string>) {
    if (!result.is_successful) {
        print_string(result.error ?? 'Error...', "red")
        return
    }
    let str = obj_to_str(result.unwrap())
    print_string(str)
}

function print_string(s: string, textColor: string = "black") {
    let out = $('#twlang_repl_out')
    $('<div></div>').text(s)
        .css({
            'display': 'block',
            'border': 'solid 1px #7d510f',
            'padding': '1px',
            'margin-top': '1px',
            'color': textColor
        })
        .appendTo(out)
    out.scrollTop(out.get(0)?.scrollHeight ?? 0)
}

function obj_to_str(obj: TWObject): string {
    return match(obj[0])
        .with(TWObjectType.Lambda, TWObjectType.Void, TWObjectType.Symbol, () => "#nil" )
        .with(TWObjectType.List, () => {
            let list = obj as List
            let str = list[1].map(x => obj_to_str(x)).join(" ")
            return `(${str})`
        })
        .otherwise(() => "" + obj[1])
}

function reval(str: string) : Result<TWObject, string>
{
    let tokens = tokenize(str)
    if (!tokens.is_successful)
        return tokens.append_error(`Evaluation error`)
    
    let exp_tree = parse(tokens.unwrap().map(x => x))
    if (!exp_tree.is_successful)
        return exp_tree
    return eval_obj(exp_tree.unwrap(), std_env)
}

main()
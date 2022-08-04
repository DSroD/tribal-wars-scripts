import { bb_code } from "./bb_code";
import { TribalWars } from "./types/tribal_wars";

const VARS = {
    first_arrival_time: null as string | null,
    game_speed: 1
}

const unit_base_speed = {
    "spear": 18,
    "sword": 22,
    "axe": 18,
    "archer": 18,
    "spy": 9,
    "light": 10,
    "marcher": 10,
    "heavy": 11,
    "ram": 30,
    "catapult": 30,
    "knight": 10,
    "snob": 35,
}

type MaybeUnit = TribalWars.Unit | null


function is_info_command_screen()
{
    return window.game_data?.screen === "info_command" ?? false;
}

function has_command_info()
{
    var content_value = document.getElementById('content_value')
    
    return !!content_value
}

function find_slowest_unit(distance: number)
{
    var parts = VARS.first_arrival_time.split(":")
    var hours = parts[0]
    var minutes = parts[1]
    var seconds = parts[2]

    var arrival_minutes = parseFloat(minutes) + parseFloat(hours) * 60 + parseFloat(seconds) / 60
    var unit_array: [MaybeUnit, number][] = window.game_data.units
        .map(x => [x, distance * unit_base_speed[x] / VARS.game_speed] as [MaybeUnit, number])
    unit_array.push([null, Infinity] as [null, number])
        var slowest_unit = unit_array.reduceRight((a, b) => a[1] > b[1] && b[1] > arrival_minutes ? b : a)

    return slowest_unit[0]
}

function create_command_info(content_value: HTMLDivElement, text: HTMLTextAreaElement, slowest_unit: MaybeUnit = null)
{
    if (content_value.children.length < 6)
        return

    var attack_info = content_value.children[1] as HTMLTableElement;
    var attacking_player = attack_info.rows[1].cells[2].innerText;
    var attacking_village = attack_info.rows[2].cells[1].innerText.slice(-12, -5)
    var attack_target_village = attack_info.rows[4].cells[1].innerText.slice(-12, -5)
    var arrival = attack_info.rows[5].cells[1].innerText

    var coords1 = attacking_village.split('|').map(x => parseInt(x))
    var coords2 = attack_target_village.split('|').map(x => parseInt(x))
    
    var distance = Math.sqrt(Math.pow(coords1[0] - coords2[0], 2) + Math.pow(coords1[1] - coords2[1], 2))

    var guess_type = !slowest_unit ? '(Vypočteno z času dopadu)' : '(Ruční odhad)'

    if (!slowest_unit)
    {
        slowest_unit = find_slowest_unit(distance)
    }


    text.value =[`Útočník: ${bb_code(['player', attacking_player])} z ${bb_code(['coord', attacking_village])}`,
        `Cíl útoku: ${bb_code(['coord', attack_target_village])} `,
        `Vzdálenost: ${distance.toPrecision(2)}`,
        `Dopad: ${arrival}`,
        `Odhad nejpomalejší jednotky: ${!!slowest_unit ? bb_code(['unit', slowest_unit]) : '??'}`,
        `${guess_type}`]
        .join("\r\n")
}

function get_world_unit_speed_factor()
{
    var data_url = `https://${window.game_data.world}.divokekmeny.cz/page/settings`
    return fetch(data_url).then(x => x.text()).then(x => parse_world_data(x)).catch(x => 1)
}

function parse_world_data(x: string)
{
    var parser = new DOMParser()

    var doc = parser.parseFromString(x, "text/html")
    var worldSpeed = parseFloat((doc.getElementsByClassName("data-table")[0] as HTMLTableElement).rows[0].cells[1].textContent)
    var unitSpeed = parseFloat((doc.getElementsByClassName("data-table")[0] as HTMLTableElement).rows[1].cells[1].textContent)

    return worldSpeed * unitSpeed
}

function add_textarea(content_value: HTMLDivElement)
{

    var text_div = document.createElement('div')
    text_div.style.display = "flex"
    text_div.style.flexDirection = "column"
    text_div.style.alignItems = "start"
    var text = document.createElement('textarea')

    var button_div = document.createElement("div")
    button_div.style.display = "flex"
    button_div.style.flexDirection = "row"
    for (let unit of window.game_data.units)
    {
        var img = document.createElement("img")
        img.setAttribute("data", unit);
        img.src = `https://dscs.innogamescdn.com/asset/41eac3fa/graphic/unit/unit_${unit}.png`
        img.onclick = (e) => create_command_info(content_value, text, (e.target as HTMLImageElement).getAttribute("data") as TribalWars.Unit)
        img.width = 20
        img.height = 20
        img.style.margin = "2px"
        button_div.append(img)
    }

    var cancel_img = document.createElement("img")
    cancel_img.src = "https://dscs.innogamescdn.com/asset/41eac3fa/graphic/delete.png"
    cancel_img.onclick = () => create_command_info(content_value, text)

    cancel_img.width = 20
    cancel_img.height = 20
    cancel_img.style.margin = "2px"
    button_div.append(cancel_img)

    text.id = 'helpRequest'
    text.style.width = "530px"
    text.style.height = "180px"
    content_value.appendChild(button_div)
    text_div.appendChild(text)

    var button = document.createElement('button')
    button.innerText = 'Zkopírovat'
    button.onclick = () => {
        text.select()
        document.execCommand('copy')
    }
    text_div.appendChild(button)

    content_value.appendChild(text_div)
    
    return text
}

function main()
{
    if (!is_info_command_screen() || !has_command_info())
        return

    var content_value = document.getElementById('content_value') as HTMLDivElement;
    
    if (!VARS.first_arrival_time)
            VARS.first_arrival_time = (content_value.children[1] as HTMLTableElement).rows[6].cells[1].innerText

    get_world_unit_speed_factor()
    .then(x => {VARS.game_speed = x})
    .then(() => add_textarea(content_value))
    .then(text => {create_command_info(content_value, text)})
}

main()

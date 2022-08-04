import { match } from "ts-pattern";
import { Bool, False, List, Symbol, True, TWObject, TWObjectType } from "./objects";
import { Result, ResultFactory } from "./result";
import { get_token_type_name, Token, TokenType } from "./tokenizer";

enum ParseAction {
    Continue,
    Return
}

export function parse(tokens: Token[], is_root = true): Result<TWObject, string> {

    let list = [TWObjectType.List, []] as [TWObjectType.List, TWObject[]]

    let lparen = tokens.pop()
    if (lparen?.t !== TokenType.LParen)
        return ResultFactory.StringError(`Expected '(', found ${lparen?.v || 'nothing'}`)

    while (tokens.length > 0) {
        let token = tokens.pop()
        if (token === undefined) {
            return ResultFactory.StringError(`Insufficient tokens.`)
        }
        let action = match<TokenType, Result<ParseAction, string>>(token.t)
            .with(TokenType.LParen, () => {
                tokens.push({t: TokenType.LParen, v: null})
                let obj = parse(tokens, false)
                if (!obj.is_successful) // TODO: Append error
                    return ResultFactory.StringError(obj.error ?? 'Unknown error during list parse...')
                list[1].push(obj.unwrap())
                return ResultFactory.Result(ParseAction.Continue)
            })
            .with(TokenType.RParen, () => {
                return ResultFactory.Result(ParseAction.Return)
            })
            .with(TokenType.Number, () => {
                list[1].push([TWObjectType.Number, (token as { t: TokenType.Number, v: number }).v])
                return ResultFactory.Result(ParseAction.Continue)
            })
            .with(TokenType.String, () => {
                let tk = token as { t: TokenType.String, v: string }
                list[1].push([TWObjectType.String, tk.v])
                return ResultFactory.Result(ParseAction.Continue)
            })
            .with(TokenType.Symbol, () => {
                list[1].push(parse_symbol((token as {t: TokenType.Symbol, v: string }).v, tokens))
                return ResultFactory.Result(ParseAction.Continue)
            })
            .otherwise(() => ResultFactory.StringError(`Unknown token found. This due to an error in the parser.`))
        
        if (!action.is_successful)
            return action.append_error('Error parsing input:')
        
        if (action.unwrap() === ParseAction.Return && is_root && tokens.length > 0)
            return ResultFactory.StringError(`Unexpected tokens: ${tokens.map(x => get_token_type_name(x)).join("")}`)
        
        if (action.unwrap() === ParseAction.Return)
            return ResultFactory.Result(list)
    }
    
    return ResultFactory.StringError("Unexpected end of input. Are you missing a ')'?")
}

function parse_symbol(symbol: string, tokens: Token[]): TWObject {
    return match(symbol)
        .with("#true", () => True)
        .with("#false", () => False)
        .otherwise(() => [TWObjectType.Symbol, symbol] as Symbol)
}
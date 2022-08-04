import { match, P } from "ts-pattern"
import { Result, ResultFactory } from "./result"

export enum TokenType {
    LParen,
    RParen,
    Number,
    String,
    Symbol
}

type T_LParen = { t: TokenType.LParen, v: null }
type T_RParen = { t: TokenType.RParen, v: null }
type T_Number = { t: TokenType.Number, v: number }
type T_String = { t: TokenType.String, v: string }
type T_Symbol = { t: TokenType.Symbol, v: string }

export type Token = T_LParen | T_RParen | T_Number | T_String | T_Symbol

export function is_token<T extends Token>(t: Token, tt: TokenType): t is T {
    return t.t === tt
}

export function get_token_type_name(t: Token): string {
    return match(t)
        .when((t): t is T_LParen => t.t === TokenType.LParen, () => "(")
        .when((t): t is T_RParen => t.t === TokenType.RParen, () => ")")
        .when((t): t is T_Number => t.t === TokenType.Number, (t) => "" + t.v)
        .when((t): t is T_String => t.t === TokenType.String, (t) => t.v)
        .when((t): t is T_Symbol => t.t === TokenType.Symbol, (t) => t.v)
        .exhaustive()
}

interface TokenizeState {
    parsed_tokens: Token[]
    character_buffer: string[]
    is_parsing_string: boolean
    expected_characters: string[]
    errors: string[]
}

const separators = [" ", "(", ")"]

export function tokenize(chars: string): Result<Token[], string> {
    let state = { parsed_tokens: [], character_buffer: [], is_parsing_string: false, expected_characters: ['('], errors: [] } as TokenizeState
    let sanitized = chars.replaceAll("\r", " ").replaceAll("\n", " ")
    Array.from(sanitized).forEach((char, index, word) => {

        let is_expected_character = true
        for (let x = state.expected_characters.pop(); state.expected_characters.length > 0; x = state.expected_characters.pop()) {
            is_expected_character = x === char
            if (is_expected_character) break
        }

        if (!is_expected_character) {
            state.errors.push(`Unexpected character ${char}: ${index + 1}.`)    
            return
        }

        /// Space and not in string parse mode
        let is_token_separator = (!state.is_parsing_string && separators.some(x => char === x))
        
        if (is_token_separator) {

            if (state.character_buffer.length > 0) {
                state.parsed_tokens.push(map_token(state.character_buffer.join("")))
                state.character_buffer = []
            }                

            if (char !== " ") {
                state.parsed_tokens.push(map_token(char))
            }
                
            return
        }
        /// String mode - non escaped string
        let is_string_quote = char === '"' && word[index - 1] !== '\\'
        if (is_string_quote && state.character_buffer.length > 0 && !state.is_parsing_string) {
            state.errors.push(`Unexpected string quote: ${index + 1}.`)
        }
        
        /// String end
        if (is_string_quote && state.is_parsing_string) {
            state.expected_characters.push(" ")
            state.parsed_tokens.push(map_token(state.character_buffer.join(""), true))
            state.character_buffer = []
            state.is_parsing_string = false
            return
        }

        /// String begin
        if (is_string_quote) {
            state.is_parsing_string = true
            return
        }

        /// Remove escaping character
        if (char === '\\' && word[index - 1] !== '\\')
            return

        state.character_buffer.push(char)

    })

    if (state.errors.length > 0) return ResultFactory.StringError(state.errors.join("\n"))
    return ResultFactory.Result<Token[]>(state.parsed_tokens.reverse())
    
}

function map_token(token_string: string, is_string: boolean = false): Token {
    return match<string, Token>(token_string)
        .with('(', () => { return { t: TokenType.LParen, v: null } })
        .with(')', () => { return { t: TokenType.RParen, v: null } })
        .otherwise((t) => {
            if (is_string) return {t: TokenType.String, v: t}
            let num = parseFloat(t)
            if (!isNaN(num)) return { t: TokenType.Number, v: num }
            return { t: TokenType.Symbol, v: t } 
        })
}
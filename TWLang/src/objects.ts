import { number } from "fp-ts"

export enum TWObjectType {
    Void,
    Number,
    Bool,
    String,
    Lambda,
    List,
    Symbol
}

export type Void = [TWObjectType.Void]
export const Void: Void = [TWObjectType.Void]

export type Number = [TWObjectType.Number, number]
export const TWNumber = (n: number) => [TWObjectType.Number, n] as Number
export const Zero: Number = [TWObjectType.Number, 0]
export const One: Number = [TWObjectType.Number, 1]

export type Bool = [TWObjectType.Bool, boolean]
export const True: Bool = [TWObjectType.Bool, true]
export const False: Bool = [TWObjectType.Bool, false]

export type String = [TWObjectType.String, string]
export const TWString = (s: string) => [TWObjectType.String, s] as String

export type Lambda = [TWObjectType.Lambda, [string[], List]]

export type Symbol = [TWObjectType.Symbol, string]
export function Symbol(symbol: string): Symbol {
    return [TWObjectType.Symbol, symbol]
}

export type List = [TWObjectType.List, TWObject[]]

export type TWObject = Void | Number | Bool | String | Lambda | Symbol | List
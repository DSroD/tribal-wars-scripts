import { TribalWars } from "./types/tribal_wars";

export type BB_Code = ["coord", string] | ["unit", TribalWars.Unit] | ["player", string] | ["ally", string] | ["building", string]

export function bb_code(code: BB_Code)
{
    return `[${code[0]}]${code[1]}[/${code[0]}]`;
}
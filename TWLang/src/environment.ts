import { TWNumber, TWObject, TWObjectType, TWString } from "./objects";

export type Env = Map<string, TWObject>

export const std_env: Env = new Map<string, TWObject>([
    ["wood", TWNumber(window.game_data?.village.wood ?? 0)],
    ["iron", TWNumber(window.game_data?.village.iron ?? 0)],
    ["stone", TWNumber(window.game_data?.village.stone ?? 0)],
    ["storage", TWNumber(window.game_data?.village.storage_max ?? 0)],
    ["wood-pm", TWNumber((window.game_data?.village.wood_prod ?? 0) * 60 )],
    ["iron-pm", TWNumber((window.game_data?.village.iron_prod ?? 0) * 60)],
    ["stone-pm", TWNumber((window.game_data?.village.stone_prod ?? 0) * 60)],
    ["popul", TWNumber(window.game_data?.village.pop ?? 0)],
    ["popul-max", TWNumber(window.game_data?.village.pop_max ?? 0)],
    ["village-name", TWString(window.game_data?.village.name ?? "")],
    ["coords", [TWObjectType.List, [TWNumber(window.game_data?.village.x ?? -1), TWNumber(window.game_data?.village.y ?? -1)]]],
    ["speed-spear", TWNumber(18)],
    ["speed-sword", TWNumber(22)],
    ["speed-axe", TWNumber(18)],
    ["speed-archer", TWNumber(18)],
    ["speed-spy", TWNumber(9)],
    ["speed-light", TWNumber(10)],
    ["speed-marcher", TWNumber(10)],
    ["speed-heavy", TWNumber(11)],
    ["speed-ram", TWNumber(30)],
    ["speed-catapult", TWNumber(30)],
    ["speed-knight", TWNumber(10)],
    ["speed-snob", TWNumber(35)]
])
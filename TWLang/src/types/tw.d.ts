export declare module TribalWars {
    export interface TribalWars {

    }

    interface GameData {
        RTL: boolean,
        csrf: string,
        device: string,
        features: GameFeatures,
        group_id: number,
        link_base: string,
        link_base_pure: string,
        locale: string,
        majorVersion: string,
        market: string,
        mode: string,
        nav : { parent: number },
        player: Player,
        pregame: boolean,
        quest: { use_questlines: boolean},
        screen: Screen
        time_generated: number,
        units: Unit[],
        version: string,
        village: Village,
        world: string,
    }

    interface GameFeatures {
        AccountManager: {active: boolean, possible: boolean},
        FarmAssistent: {active: boolean, possible: boolean},
        Premium: {active: boolean, possible: boolean},
    }

    interface Player {
        ally: string,
        ally_level: string | number | null // ??
        ally_member_count: string | number | null // ??
        confirmation_skipping_hash: string,
        date_started: string,
        email_valid: string,
        id: string,
        incomings: string,
        is_guest: string,
        knight_location: string,
        knight_unit: string,
        name: string,
        new_ally_application: number,
        new_ally_invite: string,
        new_buddy_request: string,
        new_daily_bonus: string,
        new_forum_post: number
        new_igm: string
        new_items: string,
        new_post_notification: number,
        new_quest: string,
        new_report: string,
        points: string
        points_formatted: string,
        pp: string,
        quest_progress: string,
        rank: number,
        rank_formatted: string,
        sitter: string,
        sitter_type: string,
        sleep_end: string,
        sleep_start: string,
        supports: number,
        villages: string,
    }

    interface Village {
        bonus: {wood: number, stone: number, iron: number},
        bonus_id: number | null,
        buildings: {
            barracks: number,
            garage: number,
            hide: number,
            iron: number,
            main: number,
            market: number,
            place: number,
            smith: number,
            snob: number,
            stable: number,
            statue: number,
            stone: number,
            storage: number,
            wall: number,
            wood: number
        },
        coord: string,
        display_name: string,
        id: number,
        iron: number,
        iron_float: number,
        iron_prod: number,
        is_farm_upgradable: boolean,
        last_res_tick: number,
        modifications: number,
        name: string,
        player_id: number,
        points: number,
        pop: number,
        pop_max: number,
        stone: number,
        stone_float: number,
        stone_prod: number,
        storage_max: number,
        trader_away: number,
        wood: number,
        wood_float: number,
        wood_prod: number
        x: number,
        y: number,
    }

    type Screen = "report" | "map" | "overview" | "mail" | "ally" | "info_player" | "info_command" | "info_village" | "premium" | "am_farm" | "accountmanager" | "ranking" | "settings" | "flags" | "inventory" | "place"
        | "main" | "stable" | "barracks" | "storage" | "market" | "smith" | "garage" | "place" | "farm" | "iron" | "wood" | "stone" | "snob" | "hide" | "wall"

    export type Unit = "spear" | "sword" | "axe" | "archer" | "spy" | "light" | "marcher" | "heavy" | "ram" | "catapult" | "knight" | "snob"
}

declare global {
    interface Window {
        game_data : TribalWars.GameData | null | undefined
    }
}
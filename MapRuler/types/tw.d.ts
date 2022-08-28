declare global {
    interface Window {
        game_data : {screen: string, link_base_pure: string, } | null | undefined
        TWMap : { 
            urls: {villagePopup: string},
            context: {
                hide: () => void,
                _otherOrder: string[],
                _ownOrder: string[],
                _circlePos: number[][],
                _curFocus: number,
            },
            popup: {
                _cache: {}, 
            },
            villages: {id: number}[],
        }
    }
}

export {};
function main() {
    if (!window.game_data)
        return
    if (window.game_data.screen !== "map") {
        if (!window.game_data.link_base_pure)
            return
        window.location.assign(window.game_data.link_base_pure + 'map')
        return
    }
    init()
}

function init() {
    $("#map-ctx-buttons")
	.append('<a id="mp_distance" class="mp" style="opacity: 0; left:226.5px; top:200px; background-position: -384px 0px;" href="/game.php?screen=map" data-title="Měřit vzdálenost od této vesnice"></a>')
	.on('click', (e) => {
        e.preventDefault()
        window.TWMap.popup._cache = {}
        window.TWMap.urls.villagePopup = window.TWMap.urls.villagePopup.replace(/source=([0-9])+/, `source=${window.TWMap.villages[window.TWMap.context._curFocus].id}`)
        window.TWMap.context.hide()
	})
	.attr('title', "Měřit vzdálenost od této vesnice")
    window.TWMap.context._otherOrder.push("mp_distance")
    window.TWMap.context._ownOrder.push("mp_distance")
    window.TWMap.context._circlePos.push([-12, -80])
}

main()
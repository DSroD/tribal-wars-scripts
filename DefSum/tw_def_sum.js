function main()
{
    if (game_data.screen != "info_village")
        return
    a = $("table .vis")[2]
    new_row = a.insertRow()
    celkem = new_row.insertCell()
    celkem.innerText = "Celkem"
    x = Array.from(a.rows).slice(1, a.rows.length-2).map(x => Array.from(x.cells).slice(1, 13).map(v => parseInt(v.innerText))).reduce((p, c) => c.map((v, i) => v + p[i])).forEach(x => {
    let l = new_row.insertCell()
    l.innerText = x
    l.style.textAlign = "center"
    })
}
main()
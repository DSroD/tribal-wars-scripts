function sortByCol(ind, asc, sortFunc) {
    let rows = $("#village_list")[0].rows
    Array.from(rows)
        .slice(1)
        .map((x, i) =>
            [
                x.cells[ind]
                    .textContent
                    .replaceAll("\n", "")
                    .replaceAll(" ", "")
                    .replaceAll(".", ""),
                x])
        .sort((x, y) => asc ? sortFunc(x[0], y[0]) : sortFunc(y[0], x[0]))
        .forEach((x, i, arr) => {
            x[1].parentNode.insertBefore(x[1], arr.slice(-1)[0][1])
        })
}

function appendButtons() {
    if (!window.game_data) return
    let cw = location.search.split('&').filter(x => x === "screen=market" || x === 'mode=call')
    if (cw.length != 2) {
        UI.InfoMessage("Script can not be used in this window", 2e3, 'error')
        return
    }
    const basic_sort = (x, y) => x > y
    const parse_num_sort = (x, y) => parseFloat(x) > parseFloat(y)
    const time_sort = (x, y) => {
        let t1s = x.split(":")
        let t2s = y.split(":")

        let t1 = parseInt(t1s[0]) * 3600 + parseInt(t1s[1]) * 60 + parseInt(t1s[2])
        let t2 = parseInt(t2s[0]) * 3600 + parseInt(t2s[1]) * 60 + parseInt(t2s[2])

        return t1 > t2
    }
    const trader_sort = (x, y) => {
        let t1s = x.split("/")
        let t2s = y.split("/")
        
        return parseInt(t1s[0]) > parseInt(t2s[0])
    }
    let sort_funcs = {
        0: basic_sort,
        1: time_sort,
        2: parse_num_sort,
        3: parse_num_sort,
        4: parse_num_sort,
        5: parse_num_sort,
        6: trader_sort
    }
    let skip_cols = [7]
    Array.from($("#village_list")[0].rows[0].cells)
        .forEach((x, i, arr) => {
            if (skip_cols.includes(i)) return
            let css = {
                'border': '1px solid',
                'padding': '1px',
                'margin': '1px'
            }

            let sort_div = $('<div></div>').appendTo(x)

            $("<span>A</span>")
                .css(css)
                .on('click', (e) => sortByCol(i, true, sort_funcs[i]))
                .appendTo(sort_div)
            
            $("<span>D</span>")
                .css(css)
                .on('click', (e) => sortByCol(i, false, sort_funcs[i]))
                .appendTo(sort_div)
        })
}

appendButtons()
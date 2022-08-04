function main() {
    // Village windows
    let isVillageWindow = location.href.includes("screen=overview") && !location.href.includes("screen=overview_")

    village_reminder_window(isVillageWindow)

    // Scavenge window
    if (location.href.includes("mode=scavenge")) {
        scavenge_reminder()
    }
}

function village_reminder_window(isWidget) {
    if (document.getElementById("tw_reminders"))
        return;

    $(isWidget ? "#rightcolumn" : "body").prepend(
        $("<div></div>").attr("id", "tw_reminders")
            .addClass(isWidget ? ["vis", "moveable", "widget"] : [])
            .css(isWidget ? {} : {"z-index": "50000", "border": "1px solid #7d510f", "display": "block", "position": "fixed", "background": "#ebd6ab", "padding": "8px" })
            .append($(`<h4>${isWidget ? `<img class="widget-button" onclick="return VillageOverview.toggleWidget( 'tw_reminders', this );" src="graphic/minus.png">` : ''}Reminders</h4>`).addClass(["head", "with-button", "ui-sortable-handle"])
            )
    )

    if (!isWidget)
        $("#tw_reminders").draggable()
    
    let widgetContent = $('<div id="tw_reminder_content"></div>').addClass("widget_content")
        .css({ "padding": "6px" })
        .appendTo("#tw_reminders")

    $('<div id="tw_reminders_list"></div>').prependTo(widgetContent)
    create_reminder_list()

    // Set refresh
    setInterval(() => {
        refresh_reminder_list()
    }, 20000)
    
    let new_reminder = $("<div><h5>New reminder</h5></div>").css({ "margin-top": "6px"})
        .appendTo(widgetContent)
        .append($(`<div><input type="text" id="tw-reminder-name" width="100" placeholder="Name"></input></div>`).css("margin-bottom", "2px"));

    [["tw-reminder-hours", ":", 99], ["tw-reminder-minutes", ":", 59], ["tw-reminder-seconds", "", 59]].forEach(x => {
        $(`<input type="number" min="0" max="${x[2]}" id="${x[0]}" value="0"></input><span>${x[1]}</span>`)
            .css({"width": "22px", "-webkit-appearance": "none", "-moz-appearance": "textfield"})
            .appendTo(new_reminder)
    })

    let btn = $("<button>+</button>")
        .click(e => {
            let time = [$("#tw-reminder-hours").val(), $("#tw-reminder-minutes").val(), $("#tw-reminder-seconds").val()].map(x => parseInt(x))
            if (time.findIndex(x => isNaN(x)) !== -1)
                return;
            let parsed = parse_time(time)
            add_reminder(parsed, location.href, $("#tw-reminder-name").val())
            refresh_reminder_list()
        })
        .addClass("btn btn-default free_send_button")
        .css({"margin-left": "4px"})
        .appendTo(new_reminder)        
}

function create_reminder_list() {

    let reminders_div = $("#tw_reminders_list")
    reminders_div.css({"overflow-y": "scroll", "max-height": "280px"})
    let reminders = localStorage.getItem("tw_reminders")
    if (!reminders || reminders === '[]') {
        reminders_div.prepend($("<div>No reminders</div>"));
        return;
    }
    
    let reminders_obj = JSON.parse(reminders).sort((x, y) => x.time - y.time);
    reminders_obj.forEach(x => {
        let div = $("<div></div>")
            .css({ "margin-top": "4px", "border": "solid 1px #7d510f", "padding": "1px" })
            .addClass("tw_reminder_row")
            .appendTo(reminders_div)
        $(`<div>${!!x.name ? x.name : "---"}<div>`).appendTo(div)
        let a = $("<a></a>").attr("href", x.url).appendTo(div)
        let timer_id;
        const func = () => {
            let time_rem = x.time - Date.now()
            let hours_int = time_rem / (1000 * 60 * 60) | 0
            let hours = hours_int < 10 ? ("00" + hours_int).slice(-2) : "" + hours_int
            let minutes = ("00" + ((time_rem / (1000 * 60)) % 60 | 0)).slice(-2)
            let seconds = ("00" + ((time_rem / 1000) % (60) | 0)).slice(-2)

            a.text(`${time_rem > 0 ? (hours + ':' + minutes + ':' + seconds) : '00:00:00'}`)
            if (time_rem < 0 && timer_id) {
                TribalWars.playSound("attack")
                clearInterval(timer_id)
                return;
            }
        }
        func()
        if (x.time - Date.now() > 0)
            timer_id = setInterval(func, 1000)

        div.attr("data-timer-id", timer_id)

        div.append(
            $("<button>x</button>").click(e => {
                let reminders = localStorage.getItem("tw_reminders");
                let reminders_obj = JSON.parse(reminders);
                if (!reminders_obj) reminders_obj = [];
                new_reminder_obj = reminders_obj.filter(y => y.time != x.time || y.url != x.url);
                localStorage.setItem("tw_reminders", JSON.stringify(new_reminder_obj));
                refresh_reminder_list()
            })
                .addClass("btn btn-default")
                .css({ "margin-left": "2px"})
        )
    })
}

function refresh_reminder_list() {
    let widgetContent = $("#tw_reminder_content")
    $("#tw_reminders_list").find("div.tw_reminder_row").each((i, x) => {
        let timer_id = parseInt(x.getAttribute("data-timer-id"))
        clearInterval(timer_id)
    })
    $("#tw_reminders_list").remove()
    $('<div id="tw_reminders_list"></div>').prependTo(widgetContent)
    create_reminder_list()
}

function scavenge_reminder() {
    $("span.icon.header.time:visible").parent().append("</br>")
    $("span.icon.header.time:visible").parent()
        .append($("<button>Reminder</button>")
        .click(e => {
            let time = e.target.parentNode.children[1].innerText.split(":").map(x => parseInt(x));
            let reminder = parse_time(time)
            e.target.disabled = true
            add_reminder(reminder, location.href, "Scavenge")
            refresh_reminder_list()
        })
        .css("margin-left", "4px").addClass("btn btn-default"))
}

function add_reminder(time, url, name) {
    let reminders = localStorage.getItem("tw_reminders");
    let reminders_obj = JSON.parse(reminders);
    if (!reminders_obj) reminders_obj = [];
    else if (reminders_obj.filter(x => x.time === time && x.url === url && x.name === name).length > 0) return;
    let new_reminders = [...reminders_obj, {time: time, url: url, name: name}];
    localStorage.setItem("tw_reminders", JSON.stringify(new_reminders));
}

function parse_time(time_arr) {
    return Math.round(new Date(Date.now() + time_arr[0] * 1000 * 60 * 60 + time_arr[1] * 1000 * 60 + time_arr[2] * 1000).getTime() / 1000) * 1000
}

main();
void (0);

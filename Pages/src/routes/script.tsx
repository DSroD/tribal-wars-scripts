import { useContext } from "preact/hooks";
import { AppContext, AppLang } from "../app";
import Markdown from "markdown-to-jsx";
import { options } from "../markdown.config";
import { Link } from "preact-router";

// Reminders script
import reminders_desc_en from './texts/reminders/desc_en.md?raw';
import reminders_desc_cs from './texts/reminders/desc_cs.md?raw';
import reminders_text_en from './texts/reminders/text_en.md?raw';
import reminders_text_cs from './texts/reminders/text_cs.md?raw';

// HelpGen script
import helpgen_desc_en from './texts/helpgen/desc_en.md?raw';
import helpgen_desc_cs from './texts/helpgen/desc_cs.md?raw';
import helpgen_text_en from './texts/helpgen/text_en.md?raw';
import helpgen_text_cs from './texts/helpgen/text_cs.md?raw';

// MapRuler script
import mapruler_desc_en from './texts/map-ruler/desc_en.md?raw';
import mapruler_desc_cs from './texts/map-ruler/desc_cs.md?raw';
import mapruler_text_en from './texts/map-ruler/text_en.md?raw';
import mapruler_text_cs from './texts/map-ruler/text_cs.md?raw';

//TWLang script
import twlang_desc_en from './texts/twlang/desc_en.md?raw';
import twlang_desc_cs from './texts/twlang/desc_cs.md?raw';
import twlang_text_cs from './texts/twlang/text_cs.md?raw';

//MarketRequestSort script
import marketrequestsort_text_en from './texts/tables-sort/text_en.md?raw';
import marketrequestsort_text_cs from './texts/tables-sort/text_cs.md?raw';

interface ScriptPageProps {
    path: string
    script_name?: string
}

interface ScriptItem {
    name: string,
    desc: Record<AppLang, string>;
    text: Record<AppLang, string>;
}

const scriptItems: Map<string, ScriptItem> = new Map([
    ["reminders", {
        name: "Reminders",
        desc: { cs: reminders_desc_cs, en: reminders_desc_en },
        text: { cs: reminders_text_cs, en: reminders_text_en },
    }],
    ["helpgen", {
        name: "HelpGen",
        desc: {cs: helpgen_desc_cs, en: helpgen_desc_en},
        text: {cs: helpgen_text_cs, en: helpgen_text_en},
    }],
    ["twlang", {
        name: "TWLang",
        desc: { cs: twlang_desc_cs, en: twlang_desc_en },
        text: {cs: twlang_text_cs, en: 'TBD...'},
    }],
    ["tables-sort", {
        name: "Tables Sort",
        desc: {cs: "Přidání tlačítek pro seřazení různých tabulek.", en: "Sorting buttons for various tables."},
        text: {cs: marketrequestsort_text_cs, en: marketrequestsort_text_en},
    }],
    ["map-ruler", {
        name: "Map Ruler",
        desc: {cs: mapruler_desc_cs, en: mapruler_desc_en},
        text: {cs: mapruler_text_cs, en: mapruler_text_en},
    }],
])

const headerText: Record<AppLang, string> = 
{
    cs: 'Skripty',
    en: 'Scripts'
}

function ScriptView(path: string, props: ScriptItem, lang: AppLang)
{
    return <div>
        <h3 class="text-xl font-bold mb-2 pt-2"><Link class="text-red-500 hover:text-red-700" href={`/scripts/${path}/`}>{props.name}</Link></h3>
        <Markdown options={options}>{props.desc[lang]}</Markdown>
    </div>
}

export function Script({ path, script_name }: ScriptPageProps)
{
    const { lang } = useContext(AppContext);
    
    return !!script_name && scriptItems.has(script_name) ? <>
        <Markdown options={options}>{ scriptItems.get(script_name)?.text[lang] }</Markdown>
    </>
        : <>
            <h2 class="font-bold text-2xl mb-2">{headerText[lang]}</h2>
            <div class="flex flex-col divide-y-2 divide-red-700 space-y-1">
                {Array.from(scriptItems.entries()).map((x) => ScriptView(x[0], x[1], lang))}
            </div>
        </>
}
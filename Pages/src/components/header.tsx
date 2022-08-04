import { useContext, useRef, useState } from "preact/hooks"
import { AppContext, AppLang, BASE_URL } from "../app"
import { useOnClickOutside } from "../utils"
import csFlag from '../flags/cs.svg'
import enFlag from '../flags/en.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

interface HeaderBtnProps {
    children: string
    to: string | (() => void)
    mobile?: boolean
}

function HeaderBtn({ children, to, mobile }: HeaderBtnProps) {
    const className = `px-2 md:px-4${mobile ? ' py-2 text-lg' : ''}`

    if (typeof to === 'function') {
        return <a class={className} onClick={to}>{children}</a>
    }

    return <a class={className} href={`${BASE_URL}${to}`}>{children}</a>
}

interface MenuEntry {
    link: HeaderBtnProps['to'],
    text: Record<AppLang, string>,
}

const menuEntries: MenuEntry[] = [
    { link: '', text: { cs: 'Domů', en: 'Home' } },
    { link: 'scripts/', text: {cs: 'Skripty', en: 'Scripts'}}
];

const titleText: Record<AppLang, string> = {
    cs: 'Divoké Kmeny Skripty',
    en: 'Tribal Wars Scripts',
}

const languageText: Record<AppLang, string> = {
    cs: 'Česky',
    en: 'English',
}

const languageFlag: Record<AppLang, string> = {
    cs: csFlag,
    en: enFlag,
}


const langRotation: AppLang[] = [ 'cs', 'en' ]
const getNextLang = (current: AppLang) => langRotation[(langRotation.indexOf(current) + 1) % langRotation.length]


export default function Header() {
    const [ mobileMenu, setMobileMenu ] = useState(false)
    const [ langDropdown, setLangDropdown ] = useState(false)
    const { lang, setLang } = useContext(AppContext)

    const dropdownRef = useRef(null)

    useOnClickOutside(dropdownRef, (e) => {
        if (langDropdown) {
            setLangDropdown(false);
        }
    });

    const nextLang = getNextLang(lang);

    return <>
        <header class={"h-14 px-6 flex flex-row items-center justify-between bg-red-700 text-white select-none border-b-8 " + (mobileMenu ? "border-red-700 sm:border-amber-700" : "border-amber-500")}>
            <a class="font-bold text-xl" href={BASE_URL}>{titleText[lang]}</a>
            {/* Tlačítka */}
            <div class="hidden sm:block" role="navigation">
                {menuEntries.map(e => (<HeaderBtn to={e.link}>{e.text[lang]}</HeaderBtn>))}
                <button class="ml-2 md:ml-4" aria-label="language" onClick={(e) => setLangDropdown(!langDropdown)}>
                    <img class="w-8 inline border border-gray-400" alt={lang} src={languageFlag[lang]} />
                    <svg class="-mr-1 ml-2 h-5 w-5 inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                </button>
                <div ref={dropdownRef} class="origin-top-right absolute right-4 mt-6 p-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" hidden={!langDropdown} role="menu" aria-orientation="vertical" tabIndex={-1}>
                    <div class="py-1" role="none">
                        {langRotation.map(l => (
                            <img
                                class="w-12 mb-2 last:mb-0 cursor-pointer"
                                alt={languageText[l]}
                                src={languageFlag[l]}
                                onClick={() => setLang(l)}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <button
                aria-label="menu"
                class="px-4 py-2 -my-2 -mr-4 sm:hidden"
                onClick={() => setMobileMenu(!mobileMenu)}
            >
                <FontAwesomeIcon icon={faBars} />
            </button>
        </header>
        {mobileMenu && (
            <div class="flex flex-col bg-blue-400 px-2 text-white divide-blue-300 divide-y-2 sm:hidden" role="navigation">
                {menuEntries.map(e => (<HeaderBtn to={e.link} mobile>{e.text[lang]}</HeaderBtn>))}
                <div class="px-2 flex flex-row align-center justify-around py-2">
                {langRotation.map(l => (
                    <img
                        class="w-14 p-1 last:mb-0 cursor-pointer"
                        alt={languageText[l]}
                        src={languageFlag[l]}
                        onClick={() => setLang(l)}
                    />
                ))}
                </div>
            </div>
        )}
    </>;
}


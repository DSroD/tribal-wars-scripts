import { useCallback, useState } from 'preact/hooks'
import Router from 'preact-router'
import { Home } from './routes/home'
import { NotFound } from './routes/not_found'
import { createContext } from 'preact'
import Header from './components/header'
import { Script } from './routes/script'

export const BASE_URL = import.meta.env.VITE_BASE_URL ?? import.meta.env.BASE_URL ?? '';
export type AppLang = 'cs' | 'en';

type AppState = {
  lang: AppLang,
  setLang: (lang: AppLang) => void,
}

export const AppContext = createContext({ lang: 'cs' } as AppState)

const defaultLang = (localStorage.getItem('lang') ?? 'cs') as AppLang

export function App() {

  const [ lang, _setLang ] = useState(defaultLang)

  const setLang = useCallback(
    (val: AppLang) => {
      _setLang(val)
      localStorage.setItem('lang', val)
    },
    [ _setLang ]
  );

  return (
    <AppContext.Provider value={{ lang, setLang }}>
      <Header />
      <article class="container sm:mt-4 lg:max-w-3xl mx-auto p-4">
        <Router>
          <Home path={BASE_URL} />
          <Script path={`${BASE_URL}scripts/:script_name?`} />
          <NotFound default />
        </Router>
      </article>
    </AppContext.Provider>
  )
}

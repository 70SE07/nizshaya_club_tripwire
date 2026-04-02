'use client'

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

export type Lang = "ru" | "uk"

interface LanguageContextValue {
  lang: Lang
  toggleLang: () => void
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "ru",
  toggleLang: () => {},
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("ru")

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Lang | null
    if (saved === "ru" || saved === "uk") setLang(saved)
  }, [])

  const toggleLang = () => {
    setLang((prev) => {
      const next = prev === "ru" ? "uk" : "ru"
      localStorage.setItem("lang", next)
      return next
    })
  }

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}

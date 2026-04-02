'use client'

import { useLanguage } from "@/i18n/context"

export function LanguageToggle() {
  const { lang, toggleLang } = useLanguage()

  return (
    <button
      onClick={toggleLang}
      className="fixed top-4 right-4 z-50 flex items-center gap-1 rounded-full border border-neutral-700 bg-neutral-900/80 backdrop-blur-sm px-3 py-1.5 text-sm font-medium text-white transition-colors hover:border-rose-500/50 hover:bg-neutral-800/80 cursor-pointer"
      aria-label="Switch language"
    >
      <span className={lang === "ru" ? "text-rose-400" : "text-neutral-400"}>RU</span>
      <span className="text-neutral-600">/</span>
      <span className={lang === "uk" ? "text-rose-400" : "text-neutral-400"}>UA</span>
    </button>
  )
}

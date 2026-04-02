'use client'

import { useLanguage } from "@/i18n/context"
import { getUI } from "@/i18n/ui"

export default function OfertaPage() {
  const { lang } = useLanguage()
  const ui = getUI(lang)

  return (
    <main className="bg-black min-h-screen px-8 md:px-16 py-16">
      <div className="max-w-3xl">
        <a href="/" className="text-rose-400 text-sm hover:underline mb-8 inline-block">{ui.oferta.back}</a>
        <h1 className="text-3xl font-bold text-white mb-8">{ui.oferta.title}</h1>
        <div className="text-body space-y-6 leading-relaxed">
          {ui.oferta.sections.map((section, i) => (
            <section key={i}>
              <h2 className="text-white font-semibold text-lg mb-2">{section.title}</h2>
              {section.paragraphs.map((p, j) => (
                <p key={j} className={j > 0 ? "mt-2" : ""}>{p}</p>
              ))}
            </section>
          ))}
        </div>
      </div>
    </main>
  )
}

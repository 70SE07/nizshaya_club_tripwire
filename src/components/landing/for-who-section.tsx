'use client'

import { useRef, useState, useLayoutEffect } from "react"
import { gsap } from "@/lib/gsap"
import { FOR_WHO_REVEAL } from "@/constants/animations"
import { useLanguage } from "@/i18n/context"
import { ScrollAnimationWrapper } from "@/components/landing/scroll-animation-wrapper"
import { PainList } from "@/components/landing/for-who/pain-list"
import { ForWhoFooter } from "@/components/landing/for-who/for-who-footer"

const ui = {
  ru: { label: "Узнаёшь себя?", title1: "Ты уже знаешь про AI.", title2: "Просто не применяешь.", subtitle: "Отметь пункты, которые про тебя" },
  uk: { label: "Впізнаєш себе?", title1: "Ти вже знаєш про AI.", title2: "Просто не застосовуєш.", subtitle: "Відміть пункти, які про тебе" },
}

export function ForWhoSection() {
  const { lang } = useLanguage()
  const t = ui[lang]
  const [checked, setChecked] = useState<Set<number>>(new Set())
  const footerRef = useRef<HTMLDivElement>(null)
  const footerWrapRef = useRef<HTMLDivElement>(null)
  const isFirstRender = useRef(true)

  const checkedCount = checked.size
  const showCta = checkedCount >= 2
  const footerKey = showCta ? "cta" : checkedCount === 1 ? "one" : "none"

  const toggle = (i: number) => {
    if (footerWrapRef.current) {
      footerWrapRef.current.style.height = `${footerWrapRef.current.offsetHeight}px`
    }

    setChecked(prev => {
      const next = new Set(prev)
      if (next.has(i)) next.delete(i)
      else next.add(i)
      return next
    })

    gsap.fromTo(`.pain-item-${i}`,
      { boxShadow: "inset 0 0 20px 0 rgba(244,63,94,0.12)" },
      { boxShadow: "inset 0 0 20px 0 rgba(244,63,94,0)", duration: 0.6, ease: "power2.out" },
    )
  }

  useLayoutEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    const wrap = footerWrapRef.current
    const inner = footerRef.current
    if (!wrap || !inner) return

    gsap.set(inner, { opacity: 0, y: 10 })
    const targetHeight = inner.scrollHeight

    gsap.to(wrap, {
      height: targetHeight,
      duration: 0.4,
      ease: "power2.out",
      onComplete: () => { wrap.style.height = "auto" },
    })

    gsap.to(inner, {
      opacity: 1,
      y: 0,
      duration: 0.4,
      ease: "power2.out",
      delay: 0.1,
    })
  }, [footerKey])

  return (
    <ScrollAnimationWrapper
      reveal={FOR_WHO_REVEAL}
      label={t.label}
      title={<>{t.title1}<br />{t.title2}</>}
      subtitle={<p className="text-sm text-muted">{t.subtitle}</p>}
      headerClassName="for-who-header"
    >
      <PainList checked={checked} toggle={toggle} />

      <ForWhoFooter
        showCta={showCta}
        checkedCount={checkedCount}
        footerWrapRef={footerWrapRef}
        footerRef={footerRef}
      />
    </ScrollAnimationWrapper>
  )
}

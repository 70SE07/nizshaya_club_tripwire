'use client'

import { useRef, useState, useLayoutEffect } from "react"
import { gsap, useScrollReveal, MOTION } from "@/lib/gsap"
import { SectionContainer } from "@/components/landing/section-container"
import { SectionHeader } from "@/components/landing/section-header"
import { PainList } from "@/components/landing/for-who/pain-list"
import { ForWhoFooter } from "@/components/landing/for-who/for-who-footer"

export function ForWhoSection() {
  const ref = useScrollReveal([
    { selector: ".for-who-header > *", trigger: "section", ...MOTION.header },
    { selector: ".pain-item", trigger: ".pain-list", direction: "left", duration: 0.5, stagger: 0.07, offset: 16 },
    { selector: ".for-who-footer", duration: 0.5, offset: 16, start: "top 85%" },
  ])
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
    <SectionContainer ref={ref}>

      <SectionHeader
        label="Узнаёшь себя?"
        title={<>Ты уже знаешь про AI.<br />Просто не применяешь.</>}
        subtitle={<p className="text-sm text-muted">Отметь пункты, которые про тебя</p>}
        className="for-who-header"
      />

      <PainList checked={checked} toggle={toggle} />

      <ForWhoFooter
        showCta={showCta}
        checkedCount={checkedCount}
        footerWrapRef={footerWrapRef}
        footerRef={footerRef}
      />

    </SectionContainer>
  )
}

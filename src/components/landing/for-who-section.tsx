'use client'

import { useRef, useState, useLayoutEffect } from "react"
import { Check, ArrowRight } from "lucide-react"
import { gsap, useGSAP } from "@/lib/gsap"
import { pains } from "@/constants/content"
import { SectionContainer } from "@/components/landing/section-container"
import { SectionHeader } from "@/components/landing/section-header"
import { CtaButton } from "@/components/landing/cta-button"

export function ForWhoSection() {
  const ref = useRef<HTMLElement>(null)
  const [checked, setChecked] = useState<Set<number>>(new Set())
  const footerRef = useRef<HTMLDivElement>(null)
  const footerWrapRef = useRef<HTMLDivElement>(null)
  const isFirstRender = useRef(true)

  const checkedCount = checked.size
  const showCta = checkedCount >= 2
  const footerKey = showCta ? "cta" : checkedCount === 1 ? "one" : "none"

  const toggle = (i: number) => {
    // Фиксируем текущую высоту ДО ре-рендера React
    if (footerWrapRef.current) {
      footerWrapRef.current.style.height = `${footerWrapRef.current.offsetHeight}px`
    }

    setChecked(prev => {
      const next = new Set(prev)
      if (next.has(i)) next.delete(i)
      else next.add(i)
      return next
    })

    // Мягкая подсветка при клике
    gsap.fromTo(`.pain-item-${i}`,
      { boxShadow: "inset 0 0 20px 0 rgba(244,63,94,0.12)" },
      { boxShadow: "inset 0 0 20px 0 rgba(244,63,94,0)", duration: 0.6, ease: "power2.out" },
    )
  }

  // Плавная анимация высоты + fade — useLayoutEffect срабатывает ДО отрисовки браузером
  useLayoutEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    const wrap = footerWrapRef.current
    const inner = footerRef.current
    if (!wrap || !inner) return

    // Скрываем новый контент до отрисовки (браузер ещё не покрасил)
    gsap.set(inner, { opacity: 0, y: 10 })

    // Измеряем целевую высоту нового контента
    const targetHeight = inner.scrollHeight

    // Плавно анимируем высоту контейнера
    gsap.to(wrap, {
      height: targetHeight,
      duration: 0.4,
      ease: "power2.out",
      onComplete: () => { wrap.style.height = "auto" },
    })

    // Плавно появляется новый контент
    gsap.to(inner, {
      opacity: 1,
      y: 0,
      duration: 0.4,
      ease: "power2.out",
      delay: 0.1,
    })
  }, [footerKey])

  useGSAP(() => {
    gsap.from(".for-who-header > *", {
      opacity: 0, y: 28, duration: 0.6, stagger: 0.1, ease: "power2.out",
      scrollTrigger: { trigger: ref.current, start: "top 80%", once: true },
    })
    gsap.from(".pain-item", {
      opacity: 0, x: -16, duration: 0.5, stagger: 0.07, ease: "power2.out",
      scrollTrigger: { trigger: ".pain-list", start: "top 80%", once: true },
    })
    gsap.from(".for-who-footer", {
      opacity: 0, y: 16, duration: 0.5, ease: "power2.out",
      scrollTrigger: { trigger: ".for-who-footer", start: "top 85%", once: true },
    })
  }, { scope: ref })

  return (
    <SectionContainer ref={ref}>

      {/* Header */}
      <SectionHeader
        label="Узнаёшь себя?"
        title={<>Ты уже знаешь про AI.<br />Просто не применяешь.</>}
        subtitle={<p className="text-sm text-muted">Отметь пункты, которые про тебя</p>}
        className="for-who-header"
      />

      {/* Pain list */}
      <div className="pain-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-sp-md">
        <div className="col-span-1 sm:col-span-2 lg:col-span-4">
          {pains.map((pain, i) => {
            const isChecked = checked.has(i)
            return (
              <div
                key={i}
                className={`pain-item pain-item-${i} flex items-start gap-4 border-b border-neutral-800/50 last:border-0 cursor-pointer select-none rounded-xl transition-colors duration-200 p-sp-sm ${
                  isChecked ? "bg-rose-500/5" : "hover:bg-neutral-800/20"
                }`}
                onClick={() => toggle(i)}
              >
                <span
                  className={`shrink-0 rounded border flex items-center justify-center transition-all duration-200 mt-1 size-5 ${
                    isChecked
                      ? "bg-rose-500 border-rose-500"
                      : "border-neutral-600 bg-transparent"
                  }`}
                >
                  {isChecked && <Check className="w-3 h-3 text-white" strokeWidth={3} />}
                </span>
                <p className={`text-lg leading-[1.65] transition-colors duration-200 ${isChecked ? "text-white" : "text-body"}`}>
                  {pain}
                </p>
              </div>
            )
          })}
        </div>
      </div>

      {/* Footer — динамический */}
      <div className="for-who-footer grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div ref={footerWrapRef} className="col-span-1 sm:col-span-2 lg:col-span-3 overflow-hidden">
          <div ref={footerRef}>
            {showCta ? (
              <div>
                <p className="text-lg leading-[1.65] text-rose-400 font-medium mb-sp-sm">
                  Ты попал по адресу. Именно для этого и существует клуб.
                </p>
                <CtaButton variant="primary" className="rounded-2xl mb-sp-xs">
                  Вступить в клуб за $79 / мес <ArrowRight className="w-5 h-5" />
                </CtaButton>
                <p className="text-sm text-muted mt-sp-xs">
                  Доступ открывается мгновенно · Гарантия возврата после первого стрима
                </p>
              </div>
            ) : (
              <div>
                <p className={`text-lg leading-[1.65] font-medium mb-sp-sm ${checkedCount === 1 ? "text-rose-400" : "text-muted"}`}>
                  {checkedCount === 1
                    ? "Один пункт — уже сигнал. Ещё один — и ты точно наш."
                    : "Если хотя бы два пункта — это про тебя, ты попал по адресу."}
                </p>
                <div className="card-base">
                  <p className="text-sm text-muted">
                    <span className="text-body font-medium">Клуб не для тебя</span>, если хочешь изучить AI «для общего развития» без конкретного применения — здесь только практика и инструменты под реальные задачи.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

    </SectionContainer>
  )
}

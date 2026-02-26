'use client'

import { ArrowRight, Users } from "lucide-react"
import Link from "next/link"
import { useScrollReveal } from "@/lib/gsap"
import { FINAL_CTA_REVEAL } from "@/constants/animations"
import { LINKS } from "@/constants/links"
import { SectionContainer } from "@/components/landing/section-container"
import { CtaButton } from "@/components/landing/cta-button"

export function FinalCtaSection() {
  const ref = useScrollReveal(FINAL_CTA_REVEAL)

  return (
    <SectionContainer ref={ref} bg="bg-linear-to-b from-neutral-950 to-black">

      {/* Header */}
      <div className="cta-header grid-section mb-sp-md">
        <div className="col-span-1 sm:col-span-2 lg:col-span-3">
          <h2 className="text-2xl md:text-3xl lg:text-4xl leading-tight font-bold tracking-snug text-white mb-sp-sm">
            Пока ты читаешь —{" "}
            <span className="bg-linear-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent">
              кто-то уже зарабатывает.
            </span>
          </h2>
          <p className="text-lg leading-[1.65] text-body mb-sp-xs">
            Ты уже знаешь, что что-то надо менять. Иначе ты бы не дочитал до этого места.
          </p>
          <p className="text-lg leading-[1.65] text-body">
            AI тебе нужен — это ясно. Осталось перестать смотреть, как это делают другие, и начать самому.
          </p>
        </div>
      </div>

      {/* Urgency */}
      <div className="cta-urgency grid-section mb-sp-md">
        <div className="col-span-1 sm:col-span-2 lg:col-span-3 card-base">
          <div className="flex items-center gap-3 mb-sp-sm">
            <Users className="w-5 h-5 text-rose-400 shrink-0" />
            <p className="text-base font-semibold text-white">Первый набор — до 100 участников</p>
          </div>
          <p className="text-sm text-body mb-sp-xs">
            Февральский стримовый цикл уже запланирован. Зайдёшь сейчас — попадёшь с самого начала и заберёшь все бонусы от Joker Speaker. Опоздаешь — начнёшь с середины цикла.
          </p>
          <p className="text-sm text-body">
            При ограниченном составе Влад может лично разбирать кейсы каждого. При 500+ участниках формат изменится. Войти сейчас = максимальное внимание по минимальной цене.
          </p>
        </div>
      </div>

      {/* Buttons */}
      <div className="cta-buttons grid-section mb-sp-md">
        <div className="col-full flex flex-col sm:flex-row items-center gap-sp-sm">
          <CtaButton variant="primary" className="rounded-2xl shadow-2xl shadow-rose-500/30 hover:shadow-rose-500/50">
            Вступить за $79/мес <ArrowRight className="w-5 h-5" />
          </CtaButton>
          <span className="text-dimmed text-sm">или</span>
          <CtaButton variant="secondary">
            3 месяца за $150 · экономия 37%
          </CtaButton>
        </div>
        <div className="col-full">
          <p className="text-dimmed text-sm text-center sm:text-left">
            Доступ открывается мгновенно · Отмена в один клик
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-neutral-900 text-dimmed text-sm pt-sp-md">
        <p className="mb-sp-xs">© Низшая Лига | Все права защищены</p>
        <div className="flex gap-4">
          <Link href={LINKS.oferta} className="hover:text-body transition-colors">Публичная оферта</Link>
          <Link href={LINKS.policy} className="hover:text-body transition-colors">Политика конфиденциальности</Link>
        </div>
      </div>

    </SectionContainer>
  )
}

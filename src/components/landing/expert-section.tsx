'use client'

import { useRef } from "react"
import Image from "next/image"
import { AudioPlayer, AudioPlayerCompact } from "@/components/ui/audio-player"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger, useGSAP)

export function ExpertSection() {
  const ref = useRef<HTMLElement>(null)

  useGSAP(() => {
    gsap.from(".expert-header > *", {
      opacity: 0, y: 28, duration: 0.6, stagger: 0.1, ease: "power2.out",
      scrollTrigger: { trigger: ref.current, start: "top 80%", once: true },
    })
    gsap.from(".expert-card", {
      opacity: 0, y: 32, duration: 0.7, ease: "power2.out",
      scrollTrigger: { trigger: ".expert-card", start: "top 85%", once: true },
    })
    gsap.from(".expert-footnote", {
      opacity: 0, y: 16, duration: 0.5, ease: "power2.out",
      scrollTrigger: { trigger: ".expert-footnote", start: "top 90%", once: true },
    })
  }, { scope: ref })

  return (
    <section ref={ref} className="bg-black py-sp-lg">
      <div className="max-w-300 mx-auto px-container-px">

        {/* Header */}
        <div className="expert-header grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-sp-md">
          <div className="col-span-1 sm:col-span-2 lg:col-span-3">
            <p className="text-xs font-medium tracking-[0.09em] uppercase text-rose-400 mb-sp-xs">
              Эксперт
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl leading-tight font-bold tracking-snug text-white">
              Почему это называется «Низшая Лига»
            </h2>
          </div>
        </div>

        {/* Magazine-style card */}
        <div className="expert-card bg-linear-to-b from-rose-500/10 to-neutral-900/50 border border-rose-500/20 rounded-2xl overflow-hidden mb-sp-md">
          <div className="grid grid-cols-1 lg:grid-cols-3">

            {/* Photo side */}
            <div className="relative lg:col-span-1">
              <div className="aspect-square lg:aspect-auto lg:h-full">
                <Image
                  src="/vlad-photo.jpg"
                  alt="Влад Ясько"
                  width={480}
                  height={480}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Name badge overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-sp-sm">
                <div className="flex items-end justify-between gap-3">
                  <div className="shrink-0">
                    <p className="text-white font-bold text-lg">Влад Ясько</p>
                    <p className="text-rose-400 text-sm">Основатель клуба</p>
                  </div>
                  <div className="lg:hidden flex-1 min-w-0">
                    <AudioPlayerCompact src="/vlad_club_demo.mp3" />
                  </div>
                </div>
              </div>
            </div>

            {/* Content side */}
            <div className="lg:col-span-2 p-sp-md flex flex-col justify-between">
              <div>
                <p className="text-lg leading-[1.65] text-neutral-300 mb-sp-md">
                  «Низшая Лига — это тренд на инклюзивность и антиуспешный успех. Мы продаём не членство в эфемерном клубе, а конкретный план действий. Никакой теории — делимся своим стеком нейронок, отдаём готовые воркфлоу, выдаём кастомных агентов и рабочие связки. Суть одна: каждый уходит с готовым AI-инструментом и начинает зарабатывать.»
                </p>
                <p className="text-sm text-neutral-400 mb-sp-md">
                  Влад не преподаёт AI. Он применяет его в своих проектах каждый день — и показывает тебе то, что реально работает прямо сейчас, а не то, что работало полгода назад. Никаких слайдов. Только экран, живая задача и готовый инструмент на выходе.
                </p>
              </div>
              <div className="hidden lg:block">
                <AudioPlayer src="/vlad_club_demo.mp3" />
              </div>
            </div>

          </div>
        </div>

        {/* Footnote */}
        <div className="expert-footnote grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="col-span-1 sm:col-span-2 lg:col-span-3">
            <p className="text-neutral-500 text-sm italic">
              Если ты ждёшь очередного «эксперта с Lamborghini на обложке» — это не сюда. Здесь практики, которые называют себя низшей лигой с самоиронией — и делают результат без понтов.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

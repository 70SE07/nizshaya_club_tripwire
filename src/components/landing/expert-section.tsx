'use client'

import { useRef } from "react"
import Image from "next/image"
import { AudioPlayer } from "@/components/ui/audio-player"
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
    gsap.from(".expert-content", {
      opacity: 0, y: 24, duration: 0.6, stagger: 0.12, ease: "power2.out",
      scrollTrigger: { trigger: ".expert-content", start: "top 85%", once: true },
    })
    gsap.from(".expert-footer > *", {
      opacity: 0, y: 16, duration: 0.5, stagger: 0.1, ease: "power2.out",
      scrollTrigger: { trigger: ".expert-footer", start: "top 85%", once: true },
    })
  }, { scope: ref })

  return (
    <section ref={ref} className="bg-black py-sp-lg">
      <div className="max-w-300 mx-auto px-container-px">

        {/* Header — standard layout */}
        <div className="expert-header grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-sp-md">
          <div className="col-span-1 sm:col-span-2 lg:col-span-3">
            <p className="text-xs font-medium tracking-[0.09em] uppercase text-rose-400 mb-sp-xs">
              Эксперт
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl leading-tight font-bold tracking-snug text-white mb-sp-sm">
              Почему это называется «Низшая Лига»
            </h2>
            <p className="text-lg leading-[1.65] text-neutral-400">
              Без пафоса. Без статусных игр. Без «я заработал $10М и теперь учу тебя».
            </p>
          </div>
        </div>

        {/* Content — photo + quote card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-sp-md">

          {/* Photo — 1 col */}
          <div className="expert-content flex justify-center sm:justify-start">
            <div className="rounded-2xl overflow-hidden border border-rose-500/20 shrink-0 size-60">
              <Image
                src="/vlad-photo.jpg"
                alt="Влад Ясько"
                width={240}
                height={240}
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Quote card — 3 cols */}
          <div className="expert-content col-span-1 sm:col-span-2 lg:col-span-3 bg-linear-to-b from-rose-500/10 to-transparent border border-rose-500/20 rounded-2xl p-sp-md">
            <p className="text-lg leading-[1.65] text-neutral-300 italic mb-sp-sm">
              «Низшая Лига — это тренд на инклюзивность и антиуспешный успех. Мы продаём не членство в эфемерном клубе, а конкретный план действий. Никакой теории — делимся своим стеком нейронок, отдаём готовые воркфлоу, выдаём кастомных агентов и рабочие связки. Суть одна: каждый уходит с готовым AI-инструментом и начинает зарабатывать.»
            </p>
            <p className="text-sm text-neutral-500 mb-sp-md">
              — Влад Ясько, основатель клуба
            </p>
            <AudioPlayer src="/vlad_club_demo.mp3" />
          </div>

        </div>

        {/* Footer — расшифровка + антипафос */}
        <div className="expert-footer grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="col-span-1 sm:col-span-2 lg:col-span-3">
            <p className="text-lg leading-[1.65] text-neutral-400 mb-sp-sm">
              Влад не преподаёт AI. Он применяет его в своих проектах каждый день — и показывает тебе то, что реально работает прямо сейчас, а не то, что работало полгода назад. Никаких слайдов. Только экран, живая задача и готовый инструмент на выходе.
            </p>
            <p className="text-neutral-500 text-sm italic">
              Если ты ждёшь очередного «эксперта с Lamborghini на обложке» — это не сюда. Здесь практики, которые называют себя низшей лигой с самоиронией — и делают результат без понтов.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

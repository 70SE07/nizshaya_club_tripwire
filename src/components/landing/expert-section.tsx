'use client'

import { useRef } from "react"
import Image from "next/image"
import { AudioPlayer, AudioPlayerCompact } from "@/components/ui/audio-player"
import { gsap, useGSAP } from "@/lib/gsap"
import { expertQuote, expertBio } from "@/constants/content"
import { SectionContainer } from "@/components/landing/section-container"
import { SectionHeader } from "@/components/landing/section-header"

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
  }, { scope: ref })

  return (
    <SectionContainer ref={ref} bg="bg-black">

      <SectionHeader
        label="Эксперт"
        title="Почему это называется «Низшая Лига»"
        className="expert-header"
      />

      {/* Mobile */}
      <div className="lg:hidden mb-sp-md">
        <div className="relative">
          <div className="aspect-square">
            <Image
              src="/vlad-photo.jpg"
              alt="Влад Ясько"
              width={480}
              height={480}
              className="w-full h-full object-cover object-top rounded-2xl"
            />
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-sp-sm rounded-b-2xl">
            <div className="flex items-end justify-between gap-3">
              <div className="shrink-0">
                <p className="text-white font-bold text-lg">Влад Ясько</p>
                <p className="text-rose-400 text-sm">Основатель клуба</p>
              </div>
              <div className="flex-1 min-w-0">
                <AudioPlayerCompact src="/vlad_club_demo.mp3" />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-sp-sm">
          <p className="text-lg leading-[1.65] text-body-em mb-sp-sm">{expertQuote}</p>
          <p className="text-sm text-body">{expertBio}</p>
        </div>
      </div>

      {/* Desktop — cinematic card */}
      <div className="expert-card hidden lg:block rounded-2xl overflow-hidden mb-sp-md border border-rose-500/20">
        {/* Top: photo left + quote right */}
        <div className="grid grid-cols-5">
          <div className="col-span-2 relative">
            <Image
              src="/vlad-photo.jpg"
              alt="Влад Ясько"
              width={480}
              height={480}
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="col-span-3 bg-linear-to-b from-rose-500/10 to-neutral-900/50 p-sp-md flex items-center">
            <p className="text-xl leading-[1.65] text-body-em">
              {expertQuote}
            </p>
          </div>
        </div>
        {/* Bottom bar: name + bio + player */}
        <div className="bg-neutral-900/80 border-t border-neutral-800 p-sp-sm flex items-center gap-sp-md">
          <div className="shrink-0">
            <p className="text-white font-bold text-lg">Влад Ясько</p>
            <p className="text-rose-400 text-sm">Основатель клуба</p>
          </div>
          <div className="h-8 w-px bg-neutral-700" />
          <p className="text-sm text-body flex-1">
            {expertBio}
          </p>
          <div className="shrink-0 w-72">
            <AudioPlayer src="/vlad_club_demo.mp3" />
          </div>
        </div>
      </div>

    </SectionContainer>
  )
}

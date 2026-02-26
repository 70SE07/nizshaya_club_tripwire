'use client'

import { useRef } from "react"
import Image from "next/image"
import { gsap, useGSAP } from "@/lib/gsap"
import { members } from "@/constants/content"
import { SectionContainer } from "@/components/landing/section-container"
import { SectionHeader } from "@/components/landing/section-header"

export function MembersSectionCircles() {
  const ref = useRef<HTMLElement>(null)

  useGSAP(() => {
    gsap.from(".members-header > *", {
      opacity: 0, y: 28, duration: 0.6, stagger: 0.1, ease: "power2.out",
      scrollTrigger: { trigger: ref.current, start: "top 80%", once: true },
    })
    gsap.from(".member-strip", {
      opacity: 0, x: -20, duration: 0.4, stagger: 0.06, ease: "power2.out",
      scrollTrigger: { trigger: ".members-strips", start: "top 80%", once: true },
    })
    gsap.from(".members-counter", {
      opacity: 0, duration: 0.6, ease: "power2.out",
      scrollTrigger: { trigger: ".members-counter", start: "top 90%", once: true },
    })
  }, { scope: ref })

  return (
    <SectionContainer ref={ref}>

      <SectionHeader
        label="Участники"
        title="Кто уже внутри"
        subtitle="Не теоретики. Люди, которые работают с AI и получают результат."
        className="members-header"
      />

      {/* Members — horizontal strips, 2 columns on desktop */}
      <div className="members-strips grid grid-cols-1 lg:grid-cols-2 gap-3 mb-sp-md">
        {members.map((m) => (
          <div
            key={m.name}
            className="member-strip group flex items-center gap-4 bg-neutral-900/50 border border-neutral-800 rounded-xl p-3 hover:border-rose-500/30 transition-colors"
          >
            <div className="shrink-0 size-14 rounded-full overflow-hidden ring-1 ring-rose-500/20 group-hover:ring-rose-500/50 transition-all">
              <Image src={m.photo} alt={m.name} width={56} height={56} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <p className="text-white font-bold text-sm truncate">{m.name}</p>
                <span className="shrink-0 font-medium text-rose-400 bg-rose-500/10 border border-rose-500/20 rounded-full whitespace-nowrap text-[10px] py-0.5 px-2">
                  {m.metric}
                </span>
              </div>
              <p className="text-muted text-xs mb-1">{m.role}</p>
              <p className="text-body text-xs leading-relaxed line-clamp-2">{m.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Counter */}
      <div className="members-counter flex items-center justify-center gap-2">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-500" />
        </span>
        <span className="text-muted text-sm">
          50+ участников в клубе{" "}<span className="text-body">Низшая Лига</span>
        </span>
      </div>

    </SectionContainer>
  )
}

import Image from "next/image"
import { MEMBERS_REVEAL } from "@/constants/animations"
import { members } from "@/constants/content"
import { ScrollAnimationWrapper } from "@/components/landing/scroll-animation-wrapper"

export function MembersSectionCircles() {
  return (
    <ScrollAnimationWrapper
      reveal={MEMBERS_REVEAL}
      label="Участники"
      title="Кто уже внутри"
      subtitle="Не теоретики. Люди, которые работают с AI и получают результат."
      headerClassName="members-header"
    >
      {/* Members — horizontal strips, 2 columns on desktop */}
      <div className="members-strips grid grid-cols-1 lg:grid-cols-2 gap-3 mb-sp-md">
        {members.map((m) => (
          <div
            key={m.name}
            className="member-strip group flex items-center gap-4 bg-neutral-900/50 border border-neutral-800 rounded-xl p-3 hover:border-rose-500/30 transition-colors"
          >
            <div className="shrink-0 size-14 rounded-full overflow-hidden ring-1 ring-rose-500/20 group-hover:ring-rose-500/50 transition-all">
              <Image src={m.photo} alt={m.name} width={56} height={56} sizes="56px" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <p className="text-white font-bold text-sm truncate">{m.name}</p>
                <span className="shrink-0 font-medium badge-accent rounded-full whitespace-nowrap text-[10px] py-0.5 px-2">
                  {m.metric}
                </span>
              </div>
              <p className="text-muted text-xs mb-1">{m.role}</p>
              <p className="text-body text-xs leading-relaxed line-clamp-2">{m.desc}</p>
            </div>
          </div>
        ))}
      </div>

    </ScrollAnimationWrapper>
  )
}

'use client'

import { useScrollReveal, type RevealEntry } from "@/lib/gsap"
import { SectionContainer } from "@/components/landing/section-container"
import { SectionHeader } from "@/components/landing/section-header"

interface ScrollAnimationWrapperProps {
  reveal: RevealEntry[]
  bg?: string
  id?: string
  label?: string
  title?: React.ReactNode
  subtitle?: React.ReactNode
  headerClassName?: string
  className?: string
  children: React.ReactNode
}

export function ScrollAnimationWrapper({
  reveal,
  bg,
  id,
  label,
  title,
  subtitle,
  headerClassName,
  className,
  children,
}: ScrollAnimationWrapperProps) {
  const ref = useScrollReveal(reveal)

  return (
    <SectionContainer ref={ref} bg={bg} id={id} className={className}>
      {label && title && (
        <SectionHeader
          label={label}
          title={title}
          subtitle={subtitle}
          className={headerClassName}
        />
      )}
      {children}
    </SectionContainer>
  )
}

import { LINKS } from "@/constants/links"

interface CtaButtonProps {
  variant?: "primary" | "secondary" | "ghost"
  children: React.ReactNode
  href?: string
  className?: string
}

const variants = {
  primary:
    "py-sp-sm px-sp-md bg-linear-to-r from-rose-500 to-pink-600 text-white font-bold rounded-xl text-lg hover:from-rose-600 hover:to-pink-700 transition-all shadow-lg shadow-rose-500/25 hover:shadow-rose-500/40 hover:scale-105 transform",
  secondary:
    "py-sp-sm px-sp-md bg-neutral-900/50 border border-rose-500/30 text-white font-bold rounded-2xl hover:border-rose-500/60 hover:bg-neutral-900 transition-all text-lg",
  ghost:
    "text-rose-400 hover:text-rose-300 transition-colors text-sm font-medium",
} as const

export function CtaButton({ variant = "primary", children, href, className = "" }: CtaButtonProps) {
  return (
    <a
      href={href ?? LINKS.telegram}
      className={`inline-flex items-center justify-center gap-3 ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  )
}

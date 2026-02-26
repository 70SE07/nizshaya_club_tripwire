interface SectionHeaderProps {
  label: string
  title: React.ReactNode
  subtitle?: React.ReactNode
  className?: string
  cols?: number
}

export function SectionHeader({ label, title, subtitle, className = "", cols = 3 }: SectionHeaderProps) {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-sp-md ${className}`}>
      <div className={`col-span-1 sm:col-span-2 lg:col-span-${cols}`}>
        <p className="text-xs font-medium tracking-[0.09em] uppercase text-rose-400 mb-sp-xs">
          {label}
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl leading-tight font-bold tracking-snug text-white">
          {title}
        </h2>
        {subtitle && (
          typeof subtitle === "string"
            ? <p className="text-lg leading-[1.65] text-body max-w-2xl mt-sp-sm">{subtitle}</p>
            : <div className="mt-sp-sm">{subtitle}</div>
        )}
      </div>
    </div>
  )
}

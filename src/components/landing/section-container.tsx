import { forwardRef } from "react"

interface SectionContainerProps {
  bg?: string
  id?: string
  children: React.ReactNode
  className?: string
}

export const SectionContainer = forwardRef<HTMLElement, SectionContainerProps>(
  function SectionContainer({ bg = "bg-neutral-950", id, children, className = "" }, ref) {
    return (
      <section ref={ref} id={id} className={`${bg} py-sp-lg ${className}`}>
        <div className="max-w-300 mx-auto px-container-px">
          {children}
        </div>
      </section>
    )
  }
)

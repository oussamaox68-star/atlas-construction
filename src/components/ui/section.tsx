import * as React from "react"
import { cn } from "@/lib/utils"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  className?: string
  id?: string
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, children, id, ...props }, ref) => {
    return (
      <section
        ref={ref}
        id={id}
        className={cn("py-20 lg:py-24 px-4 md:px-8 lg:px-16", className)}
        {...props}
      >
        <div className="max-w-7xl mx-auto">{children}</div>
      </section>
    )
  }
)
Section.displayName = "Section"

export { Section }

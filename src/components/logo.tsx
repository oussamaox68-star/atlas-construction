import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { COMPANY } from "@/lib/company"

interface LogoProps {
  showText?: boolean
  className?: string
  textClassName?: string
  size?: "sm" | "md" | "lg"
}

const sizes = {
  sm: { icon: 36, text: "text-lg" },
  md: { icon: 44, text: "text-xl" },
  lg: { icon: 52, text: "text-2xl" },
}

export function Logo({
  showText = true,
  className,
  textClassName,
  size = "md",
}: LogoProps) {
  const { icon, text } = sizes[size]

  return (
    <Link href="/" className={cn("flex items-center gap-3 group", className)}>
      <Image
        src="/logo.svg"
        alt={`${COMPANY.name} logo`}
        width={icon}
        height={icon}
        className="transition-transform duration-300 group-hover:scale-105"
        priority
      />
      {showText && (
        <span
          className={cn(
            "font-bold tracking-tight leading-tight flex flex-col",
            text,
            textClassName
          )}
        >
          <span className="block bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
            Atlas
          </span>
          <span className="block text-slate-800 dark:text-slate-100 text-[0.72em] font-semibold -mt-0.5">
            Construction Group
          </span>
        </span>
      )}
    </Link>
  )
}

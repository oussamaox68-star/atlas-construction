"use client"

import * as React from "react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Building2, Users, Award, Clock } from "lucide-react"
import { Card } from "@/components/ui/card"

const stats = [
  { icon: Building2, value: 500, label: "Projects Completed", suffix: "+" },
  { icon: Users, value: 150, label: "Happy Clients", suffix: "+" },
  { icon: Award, value: 25, label: "Years Experience", suffix: "+" },
  { icon: Clock, value: 98, label: "On-Time Delivery", suffix: "%" },
]

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!isInView) return

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReduced) {
      requestAnimationFrame(() => setCount(value))
      return
    }

    const duration = 1500
    const startTime = performance.now()

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * value))
      if (progress < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [isInView, value])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

export function Statistics() {
  return (
    <section className="py-24 lg:py-28 bg-gradient-to-br from-amber-600 via-orange-600 to-red-600 dark:from-amber-700 dark:via-orange-700 dark:to-red-700 relative overflow-hidden">
      <div className="absolute inset-0 opacity-40 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Card className="bg-white/15 backdrop-blur-2xl border-white/30 hover:bg-white/20 transition-colors duration-300 shadow-elevated">
                <div className="p-6 md:p-8 text-center">
                  <div className="flex justify-center mb-5">
                    <div className="h-14 w-14 md:h-16 md:w-16 rounded-2xl bg-white/25 backdrop-blur-sm flex items-center justify-center shadow-soft">
                      <stat.icon className="h-7 w-7 md:h-8 md:w-8 text-white" />
                    </div>
                  </div>
                  <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 tracking-tight">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-white/95 font-semibold text-sm md:text-base tracking-wide">
                    {stat.label}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

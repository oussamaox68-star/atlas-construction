"use client"

import { motion } from "framer-motion"
import {
  Home,
  Building,
  Hammer,
  Palette,
  Ruler,
  ClipboardList,
  ArrowRight,
} from "lucide-react"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/ui/section"

const services = [
  {
    icon: Home,
    title: "Residential Construction",
    description:
      "Build your dream home with our expert residential construction services. From custom homes to renovations, we bring your vision to life with precision and care.",
    color: "from-blue-600 via-cyan-500 to-teal-500",
  },
  {
    icon: Building,
    title: "Commercial Construction",
    description:
      "Transform your business with our commercial construction expertise. Office buildings, retail spaces, and industrial facilities built to the highest standards.",
    color: "from-purple-600 via-pink-500 to-rose-500",
  },
  {
    icon: Hammer,
    title: "Renovation",
    description:
      "Breathe new life into your existing property with our comprehensive renovation services. Modern updates, structural improvements, and complete makeovers.",
    color: "from-emerald-600 via-green-500 to-lime-500",
  },
  {
    icon: Palette,
    title: "Interior Design",
    description:
      "Create stunning interiors that reflect your style and personality. Our design team combines aesthetics with functionality for spaces that inspire.",
    color: "from-orange-600 via-red-500 to-pink-500",
  },
  {
    icon: Ruler,
    title: "Architecture",
    description:
      "Innovative architectural solutions for projects of any scale. Our architects blend creativity with practicality to design spaces that stand the test of time.",
    color: "from-indigo-600 via-violet-500 to-purple-500",
  },
  {
    icon: ClipboardList,
    title: "Project Management",
    description:
      "Seamless project management from conception to completion. We handle every detail, ensuring your project stays on time, on budget, and exceeds expectations.",
    color: "from-amber-600 via-yellow-500 to-orange-500",
  },
]

export function Services() {
  return (
    <Section className="bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ ease: [0.25, 0.1, 0.25, 1] }}
        className="text-center mb-16 lg:mb-20"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 dark:from-white dark:via-slate-200 dark:to-slate-400 bg-clip-text text-transparent">
          Our Services
        </h2>
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
          Comprehensive construction solutions tailored to your needs. From concept to completion, we deliver excellence.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Card className="h-full bg-white dark:bg-slate-800 border-0 shadow-card hover:shadow-elevated transition-shadow duration-300 group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <CardHeader className="relative z-10">
                <div
                  className={`h-18 w-18 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300 shadow-soft h-20 w-20`}
                >
                  <service.icon className="h-10 w-10 text-white drop-shadow-sm" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-slate-900 dark:text-white">
                  {service.title}
                </h3>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <Button variant="ghost" href="/services" className="group/btn px-0 font-semibold">
                  Learn More
                  <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

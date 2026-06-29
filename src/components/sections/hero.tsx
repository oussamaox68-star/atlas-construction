"use client"

import * as React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Building2, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { IMAGES } from "@/lib/images"
import { COMPANY } from "@/lib/company"

const trustItems = [
  "Licensed & Insured",
  "25+ Years Experience",
  "500+ Projects Completed",
]

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <Image
        src={IMAGES.hero}
        alt="Construction professionals reviewing blueprints on site"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/75 to-slate-950/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-slate-950/30" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="space-y-8 lg:space-y-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md text-amber-300 text-sm font-semibold tracking-wide uppercase border border-white/20"
            >
              <Building2 className="h-4 w-4" />
              <span>{COMPANY.tagline}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] text-white"
            >
              Building Your
              <span className="block bg-gradient-to-r from-amber-400 via-orange-400 to-amber-300 bg-clip-text text-transparent">
                Vision Into Reality
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-lg md:text-xl text-slate-300 max-w-xl leading-relaxed"
            >
              {COMPANY.name} delivers exceptional residential and commercial construction across {COMPANY.address.region}. Precision craftsmanship, on-time delivery, and lasting partnerships.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" href="/contact" className="group">
                Start Your Project
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                href="/projects"
                className="border-white/80 text-white hover:bg-white hover:text-slate-900"
              >
                View Our Work
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex flex-wrap gap-6 pt-4"
            >
              {trustItems.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm font-medium text-slate-200"
                >
                  <CheckCircle2 className="h-5 w-5 text-amber-400 shrink-0" />
                  {item}
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-elevated ring-1 ring-white/10">
              <div className="aspect-[4/3] relative">
                <Image
                  src={IMAGES.heroFeatured}
                  alt="High-rise construction project in Houston"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="text-white">
                    <div className="text-sm font-medium tracking-wider uppercase mb-2 text-amber-300">
                      Featured Project
                    </div>
                    <div className="text-2xl font-bold">Skyline Tower Complex</div>
                    <div className="text-sm text-slate-300 mt-1">Houston, TX</div>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-elevated border border-slate-100 dark:border-slate-700"
            >
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 flex items-center justify-center shadow-glow-amber">
                  <CheckCircle2 className="h-7 w-7 text-white" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-slate-900 dark:text-white">500+</div>
                  <div className="text-sm font-medium text-slate-600 dark:text-slate-400">
                    Projects Completed
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              className="absolute -top-4 -right-4 bg-white dark:bg-slate-800 rounded-2xl p-5 shadow-elevated border border-slate-100 dark:border-slate-700"
            >
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center shadow-lg">
                  <CheckCircle2 className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-xl font-bold text-slate-900 dark:text-white">98%</div>
                  <div className="text-xs font-medium text-slate-600 dark:text-slate-400">
                    Client Satisfaction
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

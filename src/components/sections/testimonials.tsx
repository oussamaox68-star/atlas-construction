"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Section } from "@/components/ui/section"
import { TESTIMONIALS } from "@/lib/testimonials"

export function Testimonials() {
  return (
    <Section className="bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ ease: [0.25, 0.1, 0.25, 1] }}
        className="text-center mb-16 lg:mb-20"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 dark:from-white dark:via-slate-200 dark:to-slate-400 bg-clip-text text-transparent">
          What Our Clients Say
        </h2>
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
          Do not just take our word for it. Here is what our satisfied clients say about Atlas Construction Group.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {TESTIMONIALS.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Card className="h-full bg-white dark:bg-slate-800 border-0 shadow-card hover:shadow-elevated transition-shadow duration-300 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/10 dark:to-orange-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute -top-3 -right-3 h-14 w-14 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 flex items-center justify-center shadow-glow-amber">
                <Quote className="h-7 w-7 text-white" />
              </div>
              <CardContent className="p-7 lg:p-8 pt-10 relative z-10">
                <div className="flex gap-1 mb-5" aria-label={`${testimonial.rating} out of 5 stars`}>
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-amber-400 text-amber-400"
                      aria-hidden
                    />
                  ))}
                </div>
                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed italic">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 flex items-center justify-center text-white font-bold text-lg shadow-soft">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white text-base">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

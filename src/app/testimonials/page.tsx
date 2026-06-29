"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Testimonials as TestimonialsSection } from "@/components/sections/testimonials"
import { Card, CardContent } from "@/components/ui/card"
import { Section } from "@/components/ui/section"
import { Star, Video, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { COMPANY } from "@/lib/company"
import { VIDEO_TESTIMONIALS } from "@/lib/testimonials"

export default function TestimonialsPage() {
  return (
    <>
      <section className="relative min-h-[55vh] flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-amber-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 pt-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-16 lg:py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
              Client Testimonials
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Do not just take our word for it. Here is what our satisfied clients say about {COMPANY.name}.
            </p>
          </motion.div>
        </div>
      </section>

      <TestimonialsSection />

      <Section className="bg-slate-50 dark:bg-slate-900">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
            Video Testimonials
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Watch our clients share their experiences working with {COMPANY.name}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {VIDEO_TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <Card className="overflow-hidden hover:shadow-elevated transition-shadow duration-300 group">
                <div className="h-48 relative overflow-hidden">
                  <Image
                    src={testimonial.thumbnail}
                    alt={`Video testimonial from ${testimonial.name}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                    <div className="h-16 w-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Video className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/60 px-2 py-1 rounded text-white text-sm">
                    {testimonial.duration}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{testimonial.name}</h3>
                  <p className="text-slate-600 dark:text-slate-400">{testimonial.role}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
            Share Your Experience
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            We would love to hear about your experience working with {COMPANY.name}
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Card className="p-7 lg:p-8 shadow-card">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="testimonial-name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Your Name
                </label>
                <input
                  id="testimonial-name"
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="testimonial-role" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Your Role / Company
                </label>
                <input
                  id="testimonial-role"
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  placeholder="CEO, Company Name"
                />
              </div>
              <div>
                <label htmlFor="testimonial-content" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Your Testimonial
                </label>
                <textarea
                  id="testimonial-content"
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all resize-none"
                  placeholder={`Share your experience working with ${COMPANY.name}...`}
                />
              </div>
              <div>
                <span className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Rating</span>
                <div className="flex gap-2" role="group" aria-label="Rating">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <button
                      key={rating}
                      type="button"
                      className="h-10 w-10 rounded-lg border border-slate-300 dark:border-slate-700 hover:bg-amber-500 hover:border-amber-500 transition-all flex items-center justify-center"
                      aria-label={`${rating} stars`}
                    >
                      <Star className="h-5 w-5 text-slate-400" />
                    </button>
                  ))}
                </div>
              </div>
              <Button type="submit" size="lg" className="w-full">
                <MessageSquare className="h-5 w-5" />
                Submit Testimonial
              </Button>
            </form>
          </Card>
        </div>
      </Section>
    </>
  )
}

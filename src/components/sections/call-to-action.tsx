"use client"

import { motion } from "framer-motion"
import { ArrowRight, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { COMPANY } from "@/lib/company"

export function CallToAction() {
  return (
    <section className="py-24 lg:py-28 bg-gradient-to-br from-amber-600 via-orange-600 to-red-600 dark:from-amber-700 dark:via-orange-700 dark:to-red-700 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%221%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 tracking-tight">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg md:text-xl text-white/95 mb-8 leading-relaxed">
              Let us build something extraordinary together. Contact Atlas Construction Group today for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                href="/contact"
                className="bg-white text-amber-600 hover:bg-slate-100 shadow-elevated font-semibold"
              >
                Get Free Quote
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                href={COMPANY.phoneHref}
                className="border-white text-white hover:bg-white/10 shadow-soft font-semibold"
              >
                <Phone className="h-5 w-5" />
                Call Us Now
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="bg-white/15 backdrop-blur-2xl rounded-3xl p-8 lg:p-10 border border-white/30 shadow-elevated"
          >
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6 tracking-tight">Quick Contact</h3>
            <div className="space-y-6">
              <a href={COMPANY.phoneHref} className="flex items-center gap-5 text-white/95 group">
                <div className="h-14 w-14 rounded-2xl bg-white/25 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300 shadow-soft">
                  <Phone className="h-7 w-7" />
                </div>
                <div>
                  <div className="text-sm font-medium opacity-75 mb-1">Phone</div>
                  <div className="font-semibold text-lg">{COMPANY.phone}</div>
                </div>
              </a>
              <a href={COMPANY.emailHref} className="flex items-center gap-5 text-white/95 group">
                <div className="h-14 w-14 rounded-2xl bg-white/25 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300 shadow-soft">
                  <Mail className="h-7 w-7" />
                </div>
                <div>
                  <div className="text-sm font-medium opacity-75 mb-1">Email</div>
                  <div className="font-semibold text-lg">{COMPANY.email}</div>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

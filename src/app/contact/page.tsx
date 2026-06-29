"use client"

import * as React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/ui/section"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Share2,
  Camera,
  Briefcase,
  Send,
} from "lucide-react"
import { COMPANY } from "@/lib/company"
import { IMAGES } from "@/lib/images"

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

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
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Get in touch with {COMPANY.name} to discuss your project. We are here to help bring your vision to life.
            </p>
          </motion.div>
        </div>
      </section>

      <Section>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl lg:text-3xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
              Send Us a Message
            </h2>
            <Card className="p-7 lg:p-8 shadow-card">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      First Name
                    </label>
                    <input
                      id="first-name"
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Last Name
                    </label>
                    <input
                      id="last-name"
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                    placeholder={COMPANY.phone}
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select a service</option>
                    <option value="residential">Residential Construction</option>
                    <option value="commercial">Commercial Construction</option>
                    <option value="renovation">Renovation</option>
                    <option value="interior">Interior Design</option>
                    <option value="architecture">Architecture</option>
                    <option value="project">Project Management</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  <Send className="h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
                Get In Touch
              </h2>
              <Card className="p-6 lg:p-7 space-y-6 shadow-card">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 flex items-center justify-center flex-shrink-0 shadow-soft">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Address</h3>
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(COMPANY.address.full)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-600 dark:text-slate-400 hover:text-amber-500 transition-colors"
                    >
                      {COMPANY.address.street}<br />
                      {COMPANY.address.city}, {COMPANY.address.state} {COMPANY.address.zip}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 flex items-center justify-center flex-shrink-0 shadow-soft">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Phone</h3>
                    <a href={COMPANY.phoneHref} className="text-slate-600 dark:text-slate-400 hover:text-amber-500 transition-colors">
                      {COMPANY.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 flex items-center justify-center flex-shrink-0 shadow-soft">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Email</h3>
                    <a href={COMPANY.emailHref} className="text-slate-600 dark:text-slate-400 hover:text-amber-500 transition-colors">
                      {COMPANY.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 flex items-center justify-center flex-shrink-0 shadow-soft">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Business Hours</h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      Mon - Fri: 8:00 AM - 6:00 PM<br />
                      Sat: 9:00 AM - 2:00 PM<br />
                      Sun: Closed
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <div>
              <h2 className="text-2xl lg:text-3xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
                Follow Us
              </h2>
              <Card className="p-6 shadow-card">
                <div className="flex gap-3">
                  {[
                    { icon: MessageCircle, label: "Facebook" },
                    { icon: Share2, label: "Twitter" },
                    { icon: Camera, label: "Instagram" },
                    { icon: Briefcase, label: "LinkedIn" },
                  ].map(({ icon: Icon, label }) => (
                    <a
                      key={label}
                      href="#"
                      className="h-12 w-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:bg-amber-500 hover:text-white transition-all shadow-soft"
                      aria-label={label}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </Card>
            </div>

            <div>
              <h2 className="text-2xl lg:text-3xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
                Our Location
              </h2>
              <Card className="overflow-hidden shadow-card">
                <div className="h-64 relative">
                  <Image
                    src={IMAGES.contactMap}
                    alt="Houston, Texas skyline near Atlas Construction Group office"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="font-semibold">{COMPANY.address.region}</p>
                    <p className="text-sm text-slate-200">{COMPANY.address.full}</p>
                  </div>
                </div>
              </Card>
            </div>
          </motion.div>
        </div>
      </Section>
    </>
  )
}

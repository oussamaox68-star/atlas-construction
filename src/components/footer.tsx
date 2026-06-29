"use client"

import * as React from "react"
import { motion } from "framer-motion"
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Share2,
  Camera,
  Briefcase,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Logo } from "@/components/logo"
import { COMPANY, NAV_LINKS, FOOTER_SERVICES } from "@/lib/company"

const socialLinks = [
  { icon: MessageCircle, href: "#", label: "Facebook" },
  { icon: Share2, href: "#", label: "Twitter" },
  { icon: Camera, href: "#", label: "Instagram" },
  { icon: Briefcase, href: "#", label: "LinkedIn" },
]

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23f59e0b%22%20fill-opacity%3D%221%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-20 lg:py-24 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Logo showText size="md" className="mb-8 [&_span]:text-white [&_span:last-child]:text-slate-300" />
            <p className="text-slate-400 mb-8 leading-relaxed">
              Building excellence since {COMPANY.founded}. {COMPANY.name} transforms visions into reality with quality construction across {COMPANY.address.region}.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="h-11 w-11 rounded-xl bg-slate-800 flex items-center justify-center hover:bg-gradient-to-r hover:from-amber-500 hover:to-orange-600 transition-all duration-300 shadow-soft hover:shadow-glow-amber"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h3 className="text-lg font-bold mb-6 tracking-tight">Quick Links</h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-amber-500 transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-300" />
                    <span className="font-medium">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h3 className="text-lg font-bold mb-6 tracking-tight">Services</h3>
            <ul className="space-y-3">
              {FOOTER_SERVICES.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-slate-400 hover:text-amber-500 transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-300" />
                    <span className="font-medium">{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h3 className="text-lg font-bold mb-6 tracking-tight">Newsletter</h3>
            <p className="text-slate-400 mb-5 leading-relaxed text-sm">
              Subscribe for project updates and construction insights.
            </p>
            <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 focus:border-amber-500 focus:outline-none transition-all duration-300 focus:ring-2 focus:ring-amber-500/50 text-sm"
              />
              <Button
                type="submit"
                size="lg"
                className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 shadow-glow-amber shrink-0"
                aria-label="Subscribe to newsletter"
              >
                <ArrowRight className="h-5 w-5" />
              </Button>
            </form>
          </motion.div>
        </div>

        <div className="border-t border-slate-800 mt-14 lg:mt-16 pt-10 lg:pt-12">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="flex flex-col gap-4">
              <a href={`https://maps.google.com/?q=${encodeURIComponent(COMPANY.address.full)}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-400 hover:text-amber-400 transition-colors">
                <div className="h-11 w-11 rounded-xl bg-slate-800 flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-amber-500" />
                </div>
                <span className="font-medium">{COMPANY.address.full}</span>
              </a>
              <a href={COMPANY.phoneHref} className="flex items-center gap-4 text-slate-400 hover:text-amber-400 transition-colors">
                <div className="h-11 w-11 rounded-xl bg-slate-800 flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5 text-amber-500" />
                </div>
                <span className="font-medium">{COMPANY.phone}</span>
              </a>
              <a href={COMPANY.emailHref} className="flex items-center gap-4 text-slate-400 hover:text-amber-400 transition-colors">
                <div className="h-11 w-11 rounded-xl bg-slate-800 flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5 text-amber-500" />
                </div>
                <span className="font-medium">{COMPANY.email}</span>
              </a>
            </div>
            <div className="text-slate-400 text-sm md:text-right">
              <p className="font-medium mb-4">
                &copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
              </p>
              <div className="flex gap-6 md:justify-end">
                <Link href="/contact" className="hover:text-amber-500 transition-colors font-medium">
                  Contact Us
                </Link>
                <Link href="/contact" className="hover:text-amber-500 transition-colors font-medium">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

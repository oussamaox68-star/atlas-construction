import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Atlas Construction Group for your construction project. Contact us via phone, email, or visit our Houston, Texas office.",
  keywords: ["contact atlas construction", "construction company contact", "get quote Houston"],
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

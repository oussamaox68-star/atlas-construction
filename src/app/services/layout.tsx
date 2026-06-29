import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore Atlas Construction Group's comprehensive construction services including residential, commercial, renovation, interior design, architecture, and project management.",
  keywords: ["construction services", "residential construction", "commercial construction", "Houston"],
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

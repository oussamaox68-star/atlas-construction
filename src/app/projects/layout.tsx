import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Projects",
  description:
    "View Atlas Construction Group's portfolio of exceptional construction projects including residential homes, commercial buildings, and renovations across Texas.",
  keywords: ["construction projects", "construction portfolio", "Houston building projects"],
}

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

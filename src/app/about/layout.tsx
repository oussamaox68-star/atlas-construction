import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Atlas Construction Group's history, values, and commitment to excellence in construction since 1999.",
  keywords: ["about atlas construction", "construction company history", "Houston builder"],
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

export const COMPANY = {
  name: "Atlas Construction Group",
  shortName: "Atlas Construction Group",
  initials: "ACG",
  tagline: "Premium Construction Services",
  phone: "+1 (713) 555-0182",
  phoneHref: "tel:+17135550182",
  email: "info@atlasconstructiongroup.com",
  emailHref: "mailto:info@atlasconstructiongroup.com",
  address: {
    street: "5151 San Felipe Street, Suite 220",
    city: "Houston",
    state: "TX",
    zip: "77056",
    full: "5151 San Felipe Street, Suite 220, Houston, TX 77056",
    region: "Houston, Texas",
  },
  founded: 1999,
  themeStorageKey: "atlas-construction-theme",
} as const

export const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Contact", href: "/contact" },
] as const

export const FOOTER_SERVICES = [
  { name: "Residential Construction", href: "/services" },
  { name: "Commercial Construction", href: "/services" },
  { name: "Renovation", href: "/services" },
  { name: "Interior Design", href: "/services" },
  { name: "Architecture", href: "/services" },
  { name: "Project Management", href: "/services" },
] as const

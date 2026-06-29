/** Royalty-free construction images from Unsplash */
const unsplash = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=85`

export const IMAGES = {
  hero: unsplash("photo-1503387762-592deb58ef4e", 1920),
  heroFeatured: unsplash("photo-1541888946425-d81bb19240f5", 1200),
  about: unsplash("photo-1504307651254-35680f356dfd", 1200),
  contactMap: unsplash("photo-1531218150210-855fa572135b", 1200),
  projects: {
    skylineTower: unsplash("photo-1486406146926-c627a92ad1ab", 800),
    harborView: unsplash("photo-1600585154340-be6161a56a0c", 800),
    techCampus: unsplash("photo-1497366216548-37526070297c", 800),
    mountainRetreat: unsplash("photo-1518786659565-475310c73046", 800),
    urbanLoft: unsplash("photo-1493809842364-78817add7ffb", 800),
    coastalResort: unsplash("photo-1566074010468-7f6d5b8a1a8e", 800),
    modernFamily: unsplash("photo-1600596542815-ffad4c1539a9", 800),
    corporateHq: unsplash("photo-1486325212027-8081e485255e", 800),
    historicRestoration: unsplash("photo-1449844908441-8829872d2607", 800),
  },
  testimonials: {
    robert: unsplash("photo-1560250097-0b93528c311a", 600),
    maria: unsplash("photo-1573496359142-b8d87734a5a2", 600),
    david: unsplash("photo-1472099645785-5658abf4ff4e", 600),
  },
} as const

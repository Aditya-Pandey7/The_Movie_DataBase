export const footerSections: FooterSection[] = [
  {
    title: "The Basics",
    items: [
      { label: "About TMDB", href: "/about" },
      { label: "Contact Us", href: "/contact" },
      { label: "API Documentation", href: "/api-docs" },
      { label: "API for Business", href: "/api-business" },
      { label: "System Status", href: "/status" },
    ],
  },
  {
    title: "Get Involved",
    items: [
      { label: "Contribution Bible", href: "/contribution-bible" },
      { label: "Add New Movie", href: "/movie/new" },
      { label: "Add New TV Show", href: "/tv/new" },
    ],
  },
  {
    title: "Community",
    items: [
      { label: "Guidelines", href: "/guidelines" },
      { label: "Discussions", href: "/discussions" },
      { label: "Leaderboard", href: "/leaderboard" },
      { label: "Support Forums", href: "/forums" },
    ],
  },
  {
    title: "Legal",
    items: [
      { label: "Terms of Use", href: "/terms" },
      { label: "API Terms of Use", href: "/api-terms" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "DMCA Policy", href: "/dmca" },
    ],
  },
];

export interface FooterItem {
  label: string;
  href: string;
}
export interface FooterSection {
  title: string;
  items: FooterItem[];
}

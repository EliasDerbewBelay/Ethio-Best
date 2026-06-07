export const BRAND_NAME = "Ella Man Real Estate";
export const BRAND_SHORT_NAME = "ELLA MAN";
/** Production Vercel URL — matches project name in vercel.json */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://ella-man-real-estate.vercel.app";
export const BRAND_TAGLINE = "Real Estate";
export const BRAND_EMAIL = "info@ellamanrealestate.com";
export const BRAND_PHONE = "+251975612114";
export const BRAND_PHONE_DISPLAY = "(+251) 975 6121 14";
export const BRAND_ADDRESS = "Bole Medhanialem, Addis Ababa, Ethiopia";

export const BRAND_CONTACT_METHODS = [
  {
    id: "phone",
    label: "Call Us",
    value: BRAND_PHONE_DISPLAY,
    href: `tel:${BRAND_PHONE}`,
    description: "Speak with an agent directly",
  },
  {
    id: "email",
    label: "Email Us",
    value: BRAND_EMAIL,
    href: `mailto:${BRAND_EMAIL}`,
    description: "Send us your property inquiry",
  },
  {
    id: "visit",
    label: "Visit Office",
    value: BRAND_ADDRESS,
    href: "/contact",
    description: "Schedule an in-person consultation",
  },
] as const;

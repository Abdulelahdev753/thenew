import { Mail, Instagram } from "lucide-react";

type Lang = "en" | "ar";

interface FooterContent {
  brand: { name: string; description: string };
  sections: { heading: string; links: { label: string; href: string }[] };
  legal: { heading: string; links: { label: string; href: string }[] };
  contact: { heading: string; email: string; social: { label: string; href: string; icon: "instagram" | "tiktok" }[] };
  copyright: string;
  backToTop: string;
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );
}

const content: Record<Lang, FooterContent> = {
  en: {
    brand: {
      name: "GuiderPlan",
      description:
        "Trusted PDF travel guides — curated routes, maps, and must-do spots.",
    },
    sections: {
      heading: "Sections",
      links: [
        { label: "Products", href: "#products" },
        { label: "Use Cases", href: "#use-cases" },
        { label: "About Us", href: "#about-us" },
      ],
    },
    legal: {
      heading: "Legal",
      links: [
        { label: "Terms of Service", href: "#" },
        { label: "Privacy Policy", href: "#" },
        { label: "Refund Policy", href: "#" },
      ],
    },
    contact: {
      heading: "Contact",
      email: "hello@guiderplan.com",
      social: [
        { label: "Instagram", href: "#", icon: "instagram" },
        { label: "TikTok", href: "#", icon: "tiktok" },
      ],
    },
    copyright: `© ${new Date().getFullYear()} GuiderPlan. All rights reserved.`,
    backToTop: "Back to top",
  },
  ar: {
    brand: {
      name: "GuiderPlan",
      description:
        "أدلة سفر PDF موثوقة — مسارات مختارة، خرائط، وأماكن لا تفوّت.",
    },
    sections: {
      heading: "الأقسام",
      links: [
        { label: "المنتجات", href: "#products" },
        { label: "حالات الاستخدام", href: "#use-cases" },
        { label: "من نحن", href: "#about-us" },
      ],
    },
    legal: {
      heading: "قانوني",
      links: [
        { label: "شروط الخدمة", href: "#" },
        { label: "سياسة الخصوصية", href: "#" },
        { label: "سياسة الاسترجاع", href: "#" },
      ],
    },
    contact: {
      heading: "تواصل معنا",
      email: "hello@guiderplan.com",
      social: [
        { label: "Instagram", href: "#", icon: "instagram" },
        { label: "TikTok", href: "#", icon: "tiktok" },
      ],
    },
    copyright: `© ${new Date().getFullYear()} GuiderPlan. جميع الحقوق محفوظة.`,
    backToTop: "العودة للأعلى",
  },
};

export default function Footer({ lang }: { lang: Lang }) {
  const c = content[lang];

  return (
    <footer className="border-t border-white/10 bg-black">
      {/* Gradient top edge */}
      <div className="h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />

      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        {/* 4-column grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="text-lg font-bold text-white">{c.brand.name}</p>
            <p className="mt-3 text-sm leading-relaxed text-zinc-500">
              {c.brand.description}
            </p>
          </div>

          {/* Sections */}
          <div>
            <p className="text-sm font-semibold text-white">
              {c.sections.heading}
            </p>
            <ul className="mt-4 space-y-3">
              {c.sections.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-zinc-500 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="text-sm font-semibold text-white">
              {c.legal.heading}
            </p>
            <ul className="mt-4 space-y-3">
              {c.legal.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-zinc-500 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-sm font-semibold text-white">
              {c.contact.heading}
            </p>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`mailto:${c.contact.email}`}
                  className="inline-flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4" />
                  {c.contact.email}
                </a>
              </li>
              {c.contact.social.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    className="inline-flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-white"
                  >
                    {s.icon === "instagram" ? (
                      <Instagram className="h-4 w-4" />
                    ) : (
                      <TikTokIcon className="h-4 w-4" />
                    )}
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 border-t border-white/10 pt-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-zinc-600">{c.copyright}</p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-xs text-zinc-500 transition-colors hover:text-white"
          >
            {c.backToTop} &uarr;
          </button>
        </div>
      </div>
    </footer>
  );
}

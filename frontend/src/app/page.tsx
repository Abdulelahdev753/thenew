"use client";

import { useState } from "react";
import Navbar, { type NavContent } from "@/components/landing/Navbar";
import Hero, { type HeroContent } from "@/components/landing/Hero";
import SocialProofMarquee from "@/components/sections/social-proof-marquee";
import ProductsSection, {
  type ProductContent,
} from "@/components/sections/products-section";
import UseCasesSection from "@/components/sections/use-cases";
import AboutUsSection from "@/components/sections/about-us";
import Footer from "@/components/sections/footer";

type Lang = "en" | "ar";

interface Content {
  nav: NavContent;
  hero: HeroContent;
  products: ProductContent;
}

const content: Record<Lang, Content> = {
  en: {
    nav: {
      links: [
        { label: "Products", href: "#products" },
        { label: "Use Cases", href: "#use-cases" },
        { label: "About Us", href: "#about-us" },
      ],
      login: "Login",
    },
    hero: {
      announcement: "Trusted travel PDF guides",
      announcementCta: "Read more →",
      headline: "Travel Smarter\nwith Trusted PDF Guides",
      subtext:
        "High-quality, curated PDF guides built for travelers. Clear routes, maps, must-do spots, and time-saving plans.",
      primaryCta: "Browse Guides",
      secondaryCta: "How it works",
      howItWorks: {
        title: "How GuiderPlan Works",
        steps: [
          {
            label: "Browse",
            description:
              "Explore our collection of expertly crafted city guides.",
          },
          {
            label: "Purchase",
            description:
              "Pick the guide you need and complete a quick, secure checkout.",
          },
          {
            label: "Download & Travel",
            description:
              "Instantly download your PDF and start your adventure.",
          },
        ],
        closeLabel: "Got it",
      },
    },
    products: {
      sectionTitle: "Our Travel Guides",
      sectionSubtitle:
        "Expertly crafted PDF guides to help you explore Europe's most iconic cities.",
      ctaLabel: "Get Guide",
      currency: "USD",
      products: [
        {
          city: "London",
          description:
            "The ultimate guide to London's landmarks, hidden gems, and local favorites.",
          price: "$14.99",
          emoji: "\uD83C\uDDEC\uD83C\uDDE7",
          gradient: "bg-gradient-to-br from-blue-900/60 to-red-900/40",
          badge: "Best Seller",
          badgeVariant: "default",
        },
        {
          city: "Edinburgh",
          description:
            "Discover Scotland's capital — from Arthur's Seat to the Royal Mile.",
          price: "$12.99",
          emoji: "\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74\uDB40\uDC7F",
          gradient: "bg-gradient-to-br from-blue-900/60 to-indigo-900/40",
        },
        {
          city: "Barcelona",
          description:
            "Gaudi, tapas, beaches, and vibrant neighborhoods — all in one guide.",
          price: "$14.99",
          emoji: "\uD83C\uDDEA\uD83C\uDDF8",
          gradient: "bg-gradient-to-br from-red-900/50 to-yellow-900/40",
          badge: "New",
          badgeVariant: "secondary",
        },
        {
          city: "Amsterdam",
          description:
            "Canals, museums, cycling routes, and the best local spots.",
          price: "$12.99",
          emoji: "\uD83C\uDDF3\uD83C\uDDF1",
          gradient: "bg-gradient-to-br from-orange-900/50 to-blue-900/40",
        },
        {
          city: "Prague",
          description:
            "Bohemian charm, stunning architecture, and affordable adventures.",
          price: "$11.99",
          emoji: "\uD83C\uDDE8\uD83C\uDDFF",
          gradient: "bg-gradient-to-br from-blue-900/50 to-red-900/40",
          badge: "New",
          badgeVariant: "secondary",
        },
      ],
    },
  },
  ar: {
    nav: {
      links: [
        { label: "المنتجات", href: "#products" },
        { label: "حالات الاستخدام", href: "#use-cases" },
        { label: "من نحن", href: "#about-us" },
      ],
      login: "دخول",
    },
    hero: {
      announcement: "أدلة سفر موثوقة",
      announcementCta: "اقرأ المزيد ←",
      headline: "سافر بذكاء\nمع أدلة PDF موثوقة",
      subtext:
        "أدلة سفر عالية الجودة مصممة للمسافرين. مسارات واضحة، خرائط، أماكن لا تفوّت، وخطط توفّر وقتك.",
      primaryCta: "تصفح الأدلة",
      secondaryCta: "كيف تعمل المنصة",
      howItWorks: {
        title: "كيف يعمل GuiderPlan",
        steps: [
          {
            label: "تصفّح",
            description: "استعرض مجموعتنا من أدلة المدن المُعدّة باحترافية.",
          },
          {
            label: "اشترِ",
            description: "اختر الدليل الذي تحتاجه وأتمم عملية دفع سريعة وآمنة.",
          },
          {
            label: "حمّل وسافر",
            description: "حمّل ملف PDF فورًا وابدأ مغامرتك.",
          },
        ],
        closeLabel: "فهمت",
      },
    },
    products: {
      sectionTitle: "أدلة السفر لدينا",
      sectionSubtitle:
        "أدلة PDF مُعدّة بعناية لمساعدتك على استكشاف أشهر مدن أوروبا.",
      ctaLabel: "احصل على الدليل",
      currency: "USD",
      products: [
        {
          city: "لندن",
          description:
            "الدليل الشامل لمعالم لندن وجواهرها الخفية والأماكن المفضلة محليًا.",
          price: "$14.99",
          emoji: "\uD83C\uDDEC\uD83C\uDDE7",
          gradient: "bg-gradient-to-br from-blue-900/60 to-red-900/40",
          badge: "الأكثر مبيعًا",
          badgeVariant: "default",
        },
        {
          city: "إدنبرة",
          description:
            "اكتشف عاصمة اسكتلندا — من مقعد آرثر إلى الميل الملكي.",
          price: "$12.99",
          emoji: "\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74\uDB40\uDC7F",
          gradient: "bg-gradient-to-br from-blue-900/60 to-indigo-900/40",
        },
        {
          city: "برشلونة",
          description:
            "غاودي، التاباس، الشواطئ، والأحياء النابضة بالحياة — كل ذلك في دليل واحد.",
          price: "$14.99",
          emoji: "\uD83C\uDDEA\uD83C\uDDF8",
          gradient: "bg-gradient-to-br from-red-900/50 to-yellow-900/40",
          badge: "جديد",
          badgeVariant: "secondary",
        },
        {
          city: "أمستردام",
          description:
            "القنوات، المتاحف، مسارات الدراجات، وأفضل الأماكن المحلية.",
          price: "$12.99",
          emoji: "\uD83C\uDDF3\uD83C\uDDF1",
          gradient: "bg-gradient-to-br from-orange-900/50 to-blue-900/40",
        },
        {
          city: "براغ",
          description:
            "سحر بوهيمي وعمارة مذهلة ومغامرات بأسعار معقولة.",
          price: "$11.99",
          emoji: "\uD83C\uDDE8\uD83C\uDDFF",
          gradient: "bg-gradient-to-br from-blue-900/50 to-red-900/40",
          badge: "جديد",
          badgeVariant: "secondary",
        },
      ],
    },
  },
};

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");
  const c = content[lang];

  return (
    <div dir={lang === "ar" ? "rtl" : "ltr"} className="min-h-screen bg-black">
      <Navbar lang={lang} setLang={setLang} content={c.nav} />
      <Hero lang={lang} content={c.hero} />
      <SocialProofMarquee lang={lang} />
      <ProductsSection lang={lang} content={c.products} />
      <UseCasesSection lang={lang} />
      <AboutUsSection lang={lang} />
      <Footer lang={lang} />
    </div>
  );
}

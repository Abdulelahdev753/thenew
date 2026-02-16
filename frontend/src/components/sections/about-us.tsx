import { MapPin, Clock, Map, Globe } from "lucide-react";

type Lang = "en" | "ar";

interface Bullet {
  icon: React.ComponentType<{ className?: string }>;
  text: string;
}

interface AboutContent {
  title: string;
  body: string[];
  bullets: Bullet[];
}

const content: Record<Lang, AboutContent> = {
  en: {
    title: "About Us",
    body: [
      "GuiderPlan started with a simple frustration: spending hours planning a trip, only to end up with scattered bookmarks and generic advice.",
      "We build detailed, ready-to-use PDF travel guides — with clear routes, curated spots, Google Maps links, and realistic day plans. No fluff, no filler — just what you need to travel smarter.",
    ],
    bullets: [
      { icon: MapPin, text: "Curated routes, not random lists" },
      { icon: Clock, text: "Time-saving day plans" },
      { icon: Map, text: "Google Maps–ready locations" },
      {
        icon: Globe,
        text: "Made for travelers from the Gulf and beyond",
      },
    ],
  },
  ar: {
    title: "من نحن",
    body: [
      "بدأ GuiderPlan من إحباط بسيط: ساعات من التخطيط لرحلة تنتهي بروابط متفرقة ونصائح عامة.",
      "نبني أدلة سفر PDF جاهزة للاستخدام — بمسارات واضحة، أماكن مختارة، روابط Google Maps، وخطط يومية واقعية. بدون حشو — فقط اللي تحتاجه تسافر بذكاء.",
    ],
    bullets: [
      { icon: MapPin, text: "مسارات مرتّبة مو قوائم عشوائية" },
      { icon: Clock, text: "خطط يومية توفر وقتك" },
      { icon: Map, text: "روابط جاهزة لخرائط Google" },
      { icon: Globe, text: "مناسبة لمستخدمي الخليج وغيرهم" },
    ],
  },
};

export default function AboutUsSection({ lang }: { lang: Lang }) {
  const c = content[lang];

  return (
    <section
      id="about-us"
      className="mx-auto w-full max-w-6xl scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
        {/* Left column — text */}
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {c.title}
          </h2>
          <div className="mt-6 space-y-4">
            {c.body.map((paragraph, i) => (
              <p key={i} className="text-base leading-relaxed text-zinc-400 sm:text-lg">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Right column — bullet cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {c.bullets.map((bullet) => {
            const Icon = bullet.icon;
            return (
              <div
                key={bullet.text}
                className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-5 transition-colors duration-300 hover:border-orange-500/30 hover:bg-white/[0.06]"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-500/10">
                  <Icon className="h-5 w-5 text-orange-400" />
                </div>
                <p className="text-sm font-medium leading-relaxed text-white">
                  {bullet.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

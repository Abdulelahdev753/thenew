import {
  MapPin,
  Landmark,
  Heart,
  Users,
  ShoppingBag,
  UtensilsCrossed,
  Star,
} from "lucide-react";
import Marquee from "@/components/ui/marquee";

type Lang = "en" | "ar";

interface UseCase {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

interface Testimonial {
  name: string;
  text: string;
  city: string;
}

interface UseCasesContent {
  title: string;
  subtitle: string;
  cases: UseCase[];
  testimonials: Testimonial[];
}

const content: Record<Lang, UseCasesContent> = {
  en: {
    title: "Use Cases",
    subtitle:
      "Built for real trips — quick decisions, clear routes, and saved time.",
    cases: [
      {
        icon: MapPin,
        title: "Weekend Trips",
        description:
          "Short on time? Get a ready-made plan that covers the best spots in 2–3 days.",
      },
      {
        icon: Landmark,
        title: "First-time London",
        description:
          "Navigate the city like a local with curated routes and must-see landmarks.",
      },
      {
        icon: Heart,
        title: "Couples Getaways",
        description:
          "Romantic restaurants, scenic walks, and memorable experiences for two.",
      },
      {
        icon: Users,
        title: "Family-friendly Routes",
        description:
          "Kid-approved attractions, parks, and easy-to-follow itineraries.",
      },
      {
        icon: ShoppingBag,
        title: "Shopping + Outlets",
        description:
          "Top shopping streets, outlet villages, and duty-free tips all mapped out.",
      },
      {
        icon: UtensilsCrossed,
        title: "Food & Dessert Spots",
        description:
          "Handpicked cafés, restaurants, and dessert spots you won't find in generic lists.",
      },
    ],
    testimonials: [
      {
        name: "Sara",
        text: "The London guide saved us hours of planning!",
        city: "London Guide",
      },
      {
        name: "Khalid",
        text: "Best travel investment I've made. Every spot was perfect.",
        city: "Edinburgh Guide",
      },
      {
        name: "Noura",
        text: "My family trip was stress-free thanks to this guide.",
        city: "Barcelona Guide",
      },
      {
        name: "Ahmed",
        text: "The Google Maps links made navigating so easy.",
        city: "Amsterdam Guide",
      },
      {
        name: "Lina",
        text: "Incredible value — felt like having a local friend.",
        city: "Prague Guide",
      },
      {
        name: "Omar",
        text: "We followed the itinerary day by day. Flawless.",
        city: "London Guide",
      },
    ],
  },
  ar: {
    title: "حالات الاستخدام",
    subtitle:
      "مصمم لرحلات واقعية — قرارات أسرع، مسارات أوضح، ووقت أقل ضياعًا.",
    cases: [
      {
        icon: MapPin,
        title: "رحلات نهاية الأسبوع",
        description:
          "وقتك محدود؟ احصل على خطة جاهزة تغطي أفضل الأماكن في ٢–٣ أيام.",
      },
      {
        icon: Landmark,
        title: "أول مرة في لندن",
        description:
          "تنقّل في المدينة كأهلها مع مسارات مختارة ومعالم لا تفوّت.",
      },
      {
        icon: Heart,
        title: "رحلات للأزواج",
        description:
          "مطاعم رومانسية، مشاوير خلابة، وتجارب لا تُنسى لشخصين.",
      },
      {
        icon: Users,
        title: "مسارات مناسبة للعائلات",
        description:
          "أماكن ترفيهية للأطفال، حدائق، وجداول يومية سهلة التنفيذ.",
      },
      {
        icon: ShoppingBag,
        title: "تسوّق ومنافذ بيع",
        description:
          "أفضل شوارع التسوق، قرى الأوتلت، ونصائح الشراء — كلها على الخريطة.",
      },
      {
        icon: UtensilsCrossed,
        title: "أماكن أكل وحلويات",
        description:
          "كافيهات ومطاعم وأماكن حلويات مختارة بعناية ما تلقاها بقوائم عشوائية.",
      },
    ],
    testimonials: [
      {
        name: "سارة",
        text: "دليل لندن وفّر علينا ساعات من التخطيط!",
        city: "دليل لندن",
      },
      {
        name: "خالد",
        text: "أفضل استثمار سفر سويته. كل مكان كان مثالي.",
        city: "دليل إدنبرة",
      },
      {
        name: "نورة",
        text: "رحلة عائلتي كانت بدون أي توتر بفضل هذا الدليل.",
        city: "دليل برشلونة",
      },
      {
        name: "أحمد",
        text: "روابط قوقل ماب سهّلت التنقل بشكل كبير.",
        city: "دليل أمستردام",
      },
      {
        name: "لينا",
        text: "قيمة لا تُصدّق — حسيت إن معي صديق محلي.",
        city: "دليل براغ",
      },
      {
        name: "عمر",
        text: "مشينا على الجدول يوم بيوم. بدون أي خلل.",
        city: "دليل لندن",
      },
    ],
  },
};

export default function UseCasesSection({ lang }: { lang: Lang }) {
  const c = content[lang];

  return (
    <section
      id="use-cases"
      className="mx-auto w-full max-w-6xl scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8"
    >
      {/* Section header */}
      <div className="mb-14 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          {c.title}
        </h2>
        <p className="mt-4 text-base text-zinc-400 sm:text-lg">{c.subtitle}</p>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {c.cases.map((useCase) => {
          const Icon = useCase.icon;
          return (
            <div
              key={useCase.title}
              className="group rounded-xl border border-white/10 bg-white/[0.03] p-6 transition-colors duration-300 hover:border-orange-500/30 hover:bg-white/[0.06]"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/10">
                <Icon className="h-5 w-5 text-orange-400" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">
                {useCase.title}
              </h3>
              <p className="text-sm leading-relaxed text-zinc-400">
                {useCase.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Client testimonials marquee */}
      <div className="mt-12">
        <Marquee
          speed={25}
          direction={lang === "ar" ? "right" : "left"}
          pauseOnHover
        >
          {c.testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="mx-2 min-w-[280px] rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4"
            >
              <div className="mb-2 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-orange-400 text-orange-400"
                  />
                ))}
              </div>
              <p className="mb-3 text-sm leading-relaxed text-zinc-300">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <p className="text-sm">
                <span className="text-white">{testimonial.name}</span>
                <span className="text-zinc-500"> — {testimonial.city}</span>
              </p>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}

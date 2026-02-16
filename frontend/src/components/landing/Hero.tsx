"use client";

import Image from "next/image";
import TextType from "./TextType";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export interface HeroContent {
  announcement: string;
  announcementCta: string;
  headline: string;
  subtext: string;
  primaryCta: string;
  secondaryCta: string;
  howItWorks: {
    title: string;
    steps: { label: string; description: string }[];
    closeLabel: string;
  };
}

interface HeroProps {
  lang: "en" | "ar";
  content: HeroContent;
}

export default function Hero({ lang, content }: HeroProps) {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/thenew/images/background.png"
        alt=""
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />

      {/* Overlay — top gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-transparent" />
      {/* Overlay — bottom gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      {/* Overlay — vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.7)_100%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-8 px-6 text-center">
        {/* Announcement pill */}
        <div className="shine-border inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-1.5 backdrop-blur-sm">
          <span className="text-sm text-zinc-300">{content.announcement}</span>
          <span className="text-sm font-medium text-orange-400">
            {content.announcementCta}
          </span>
        </div>

        {/* Headline */}
        <h1 className="min-h-[2.5em] text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl">
          <TextType
            key={lang}
            text={content.headline}
            as="span"
            typingSpeed={130}
            showCursor={true}
            cursorCharacter="|"
            cursorClassName="text-orange-400"
            loop={false}
            className="text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl"
          />
        </h1>

        {/* Subtext */}
        <p className="mx-auto max-w-xl text-base font-bold text-zinc-400 sm:text-lg">
          {content.subtext}
        </p>

        {/* CTA buttons */}
        <div className="flex w-full flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href="#products"
            className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-semibold text-black shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all duration-200 hover:opacity-90 active:scale-95"
          >
            {content.primaryCta}
          </a>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <button className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 px-8 text-sm font-medium text-white transition-all duration-200 hover:bg-white/10 active:scale-95">
                {content.secondaryCta}
              </button>
            </AlertDialogTrigger>
            <AlertDialogContent className="border-white/10 bg-zinc-950 text-white">
              <AlertDialogHeader>
                <AlertDialogTitle className="text-xl font-bold text-white">
                  {content.howItWorks.title}
                </AlertDialogTitle>
                <AlertDialogDescription asChild>
                  <div className="space-y-4 pt-2">
                    {content.howItWorks.steps.map((step, i) => (
                      <div key={i} className="flex gap-3">
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-500/15 text-sm font-bold text-orange-400">
                          {i + 1}
                        </span>
                        <div>
                          <p className="font-semibold text-white">
                            {step.label}
                          </p>
                          <p className="text-sm text-zinc-400">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogAction className="rounded-full bg-orange-500 text-white hover:bg-orange-600">
                  {content.howItWorks.closeLabel}
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </section>
  );
}

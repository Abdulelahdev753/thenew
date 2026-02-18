"use client";

import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

export interface ProductContent {
  sectionTitle: string;
  sectionSubtitle: string;
  ctaLabel: string;
  currency: string;
  products: {
    city: string;
    description: string;
    price: string;
    emoji: string;
    gradient: string;
    badge?: string;
    badgeVariant?: "default" | "secondary";
  }[];
}

interface ProductsSectionProps {
  lang: "en" | "ar";
  content: ProductContent;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "";

export default function ProductsSection({ content }: ProductsSectionProps) {
  const [loadingCity, setLoadingCity] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleGetGuide(cityName: string) {
    setError(null);
    setLoadingCity(cityName);

    try {
      const res = await fetch(`${API_URL}/api/create-payment-link`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cityName }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error ?? "Payment request failed");
      }

      const { paymentUrl } = await res.json();
      window.location.href = paymentUrl;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      setLoadingCity(null);
    }
  }

  return (
    <section id="products" className="mx-auto w-full max-w-6xl scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8">
      {/* Section header */}
      <div className="mb-14 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          {content.sectionTitle}
        </h2>
        <p className="mt-4 text-base text-zinc-400 sm:text-lg">
          {content.sectionSubtitle}
        </p>
      </div>

      {/* Error banner */}
      {error && (
        <div className="mb-6 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-center text-sm text-red-400">
          {error}
        </div>
      )}

      {/* Products grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {content.products.map((product) => (
          <Card
            key={product.city}
            className="group relative overflow-hidden border-white/10 bg-white/[0.03] py-0 transition-colors duration-300 hover:border-orange-500/30 hover:bg-white/[0.06]"
          >
            {/* Gradient banner */}
            <div
              className={`relative flex h-40 items-center justify-center ${product.gradient}`}
            >
              <span className="text-6xl transition-transform duration-300 group-hover:scale-110">
                {product.emoji}
              </span>

              {product.badge && (
                <Badge
                  variant={product.badgeVariant ?? "default"}
                  className={
                    product.badgeVariant === "secondary"
                      ? "absolute top-4 end-4 border-orange-500/40 bg-transparent text-orange-400"
                      : "absolute top-4 end-4 border-transparent bg-orange-500 text-white"
                  }
                >
                  {product.badge}
                </Badge>
              )}
            </div>

            {/* Card body */}
            <CardHeader>
              <CardTitle className="text-lg text-white">
                {product.city}
              </CardTitle>
              <CardDescription className="text-zinc-400">
                {product.description}
              </CardDescription>
            </CardHeader>

            <CardContent>
              <p className="text-2xl font-bold text-white">
                {product.price}{" "}
                <span className="text-sm font-normal text-zinc-500">
                  {content.currency}
                </span>
              </p>
            </CardContent>

            <CardFooter className="mt-auto pb-6">
              <Button
                className="w-full bg-orange-500 text-white hover:bg-orange-600"
                disabled={loadingCity !== null}
                onClick={() => handleGetGuide(product.city)}
              >
                {loadingCity === product.city ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  content.ctaLabel
                )}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}

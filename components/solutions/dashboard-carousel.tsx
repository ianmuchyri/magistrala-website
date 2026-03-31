"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useCallback, useState } from "react";
import { Button } from "../ui/button";

interface DashboardCarouselProps {
  images: { src: string; alt: string }[];
}

export function DashboardCarousel({ images }: DashboardCarouselProps) {
  const [current, setCurrent] = useState(0);

  const prev = useCallback(
    () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1)),
    [images.length],
  );
  const next = useCallback(
    () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1)),
    [images.length],
  );

  if (images.length === 0) return null;

  return (
    <div>
      <div className="relative rounded-2xl overflow-hidden border border-border/40 shadow-xl shadow-[#073763]/6">
        <Image
          key={images[current].src}
          src={images[current].src}
          alt={images[current].alt}
          width={1200}
          height={720}
          className="w-full h-auto"
          priority={current === 0}
        />
        <div className="absolute inset-0 bg-linear-to-t from-card/10 to-transparent pointer-events-none" />

        {images.length > 1 && (
          <>
            <Button
              onClick={prev}
              aria-label="Previous screenshot"
              className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center size-9 rounded-full bg-background/80 border border-border/50 backdrop-blur-sm hover:bg-background transition-colors shadow-sm"
            >
              <ChevronLeft className="size-4 text-foreground" />
            </Button>
            <Button
              onClick={next}
              aria-label="Next screenshot"
              className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center size-9 rounded-full bg-background/80 border border-border/50 backdrop-blur-sm hover:bg-background transition-colors shadow-sm"
            >
              <ChevronRight className="size-4 text-foreground" />
            </Button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="flex items-center justify-center gap-2 mt-4">
          {images.map((img, i) => (
            <Button
              key={img.src}
              onClick={() => setCurrent(i)}
              aria-label={`Go to screenshot ${i + 1} of ${images.length}`}
              className={`rounded-full transition-all ${
                i === current
                  ? "w-5 h-2 bg-[#073763] dark:bg-blue-400"
                  : "size-2 bg-border hover:bg-muted-foreground/40"
              }`}
            />
          ))}
        </div>
      )}

      <p className="text-center text-xs text-muted-foreground/60 mt-2">
        {images[current].alt}
      </p>
    </div>
  );
}

"use client";

import { LayoutGrid, Rocket, SlidersHorizontal } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const steps = [
  {
    number: "01",
    icon: LayoutGrid,
    label: "Solutions",
    title: "Choose your solution",
    description:
      "Browse pre-built solutions for your industry. Pick one that fits — smart water, energy, cold storage, and more. Everything is pre-configured from day one.",
  },
  {
    number: "02",
    icon: Rocket,
    label: "Platform",
    title: "Install & go live",
    description:
      "Deploy to our cloud or your own infrastructure in minutes. Devices, dashboards, data pipelines, and alerts are all pre-wired and running immediately.",
  },
  {
    number: "03",
    icon: SlidersHorizontal,
    label: "Customization",
    title: "Make it yours",
    description:
      "Tailor every layer to your organization — custom rules, additional integrations, branded dashboards, and workflow automations. Full flexibility, when you need it.",
  },
];

export function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="py-20 lg:py-28 bg-[#f8fafc] dark:bg-muted/10 border-t border-border/40">
      <div ref={ref} className="mx-auto container px-6">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#073763] dark:text-blue-400 mb-3">
            How it works
          </p>
          <h2 className="text-3xl font-medium tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] leading-[1.1] mb-4">
            From zero to live,{" "}
            <span className="text-muted-foreground">in three steps.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            No months of configuration. No platform expertise required.
          </p>
        </div>

        {/* ── Desktop: horizontal flow ── */}
        <div className="hidden lg:flex items-start max-w-6xl mx-auto">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <React.Fragment key={step.number}>
                {/* Animated connector between steps */}
                {i > 0 && (
                  <div className="flex-1 mt-7 mx-3 h-[1.5px] bg-border/60 overflow-hidden shrink-0 min-w-10">
                    <div
                      className={cn(
                        "h-full bg-linear-to-r from-[#073763]/50 to-[#073763]/20 origin-left",
                        "transition-transform ease-out",
                        inView ? "scale-x-100" : "scale-x-0",
                      )}
                      style={{
                        transitionDuration: "900ms",
                        transitionDelay: inView
                          ? `${(i * 2 - 1) * 220}ms`
                          : "0ms",
                      }}
                    />
                  </div>
                )}

                {/* Step card */}
                <div
                  className={cn(
                    "flex flex-col items-center text-center w-80 shrink-0",
                    "transition-all duration-700 ease-out",
                    inView
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8",
                  )}
                  style={{
                    transitionDelay: inView ? `${i * 320}ms` : "0ms",
                  }}
                >
                  {/* Icon circle */}
                  <div
                    className={cn(
                      "size-14 rounded-full border-2 flex items-center justify-center mb-6",
                      "bg-white dark:bg-card transition-all duration-500",
                      inView
                        ? "border-[#073763] shadow-[0_0_0_6px_rgba(7,55,99,0.08)] dark:shadow-[0_0_0_6px_rgba(7,55,99,0.2)]"
                        : "border-border shadow-none",
                    )}
                    style={{
                      transitionDelay: inView ? `${i * 320 + 120}ms` : "0ms",
                    }}
                  >
                    <Icon className="size-5 text-[#073763] dark:text-blue-400" />
                  </div>

                  <p className="text-[11px] font-semibold uppercase tracking-widest text-[#073763]/50 dark:text-blue-400/50 mb-2">
                    {step.label}
                  </p>
                  <h3 className="text-xl font-semibold text-foreground mb-3 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </React.Fragment>
            );
          })}
        </div>

        {/* ── Mobile: vertical timeline ── */}
        <div className="lg:hidden flex flex-col max-w-sm mx-auto">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="flex gap-5">
                {/* Left rail: circle + vertical line */}
                <div className="flex flex-col items-center">
                  <div
                    className={cn(
                      "size-11 rounded-full border-2 flex items-center justify-center shrink-0",
                      "bg-white dark:bg-card transition-all duration-500",
                      inView ? "border-[#073763]" : "border-border",
                    )}
                    style={{
                      transitionDelay: inView ? `${i * 250}ms` : "0ms",
                    }}
                  >
                    <Icon className="size-4 text-[#073763] dark:text-blue-400" />
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-[1.5px] flex-1 bg-border mt-1 min-h-12" />
                  )}
                </div>

                {/* Right: content */}
                <div
                  className={cn(
                    "pb-10 transition-all duration-700 ease-out",
                    inView
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-3",
                  )}
                  style={{
                    transitionDelay: inView ? `${i * 250}ms` : "0ms",
                  }}
                >
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-[#073763]/50 dark:text-blue-400/50 mb-1">
                    {step.label}
                  </p>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

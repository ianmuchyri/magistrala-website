import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const SOLUTIONS_CONTENT = {
  heading: {
    eyebrow: "Solutions",
    title: "Pick a solution.",
    titleAccent: "Deploy in minutes.",
    description:
      "Every solution ships pre-configured — devices, data pipelines, dashboards, and alerts included. Ready in minutes, not months.",
  },
  // ---------------------------------------------------------------------------
  // Grid pattern (4-column grid, md:grid-cols-4)
  //
  //   Row A — [wide ×2] [narrow ×1] [narrow ×1]  → 3 cards, spans: 2 + 1 + 1
  //   Row B — [narrow ×1] [narrow ×1] [wide ×2]  → 3 cards, spans: 1 + 1 + 2
  //   Row C — [wide ×2] [wide ×2]                → 2 cards, spans: 2 + 2
  //
  // To add more solutions:
  //   • Insert new cards before the last Row C pair, alternating Row A / Row B.
  //   • Each full A+B cycle adds 6 cards and fills 2 rows with no gaps.
  //   • Row C (2×span-2) is always the last row.
  // ---------------------------------------------------------------------------
  solutions: [
    // — Row A ——————————————————————————————————————————
    {
      id: "smart-city",
      title: "Smart City",
      description:
        "Digitize urban infrastructure and unify civic command centers. Monitor traffic, energy, and public utilities from a single platform.",
      href: "/solutions/smart-city",
      image: "/solutions/smart-city.jpg",
      colSpan: "md:col-span-2",
    },
    {
      id: "smart-water",
      title: "Smart Water Metering",
      description:
        "Eliminate non-revenue water losses and automate municipal billing with real-time network metering.",
      href: "/solutions/smart-water",
      image: "/solutions/water-metering.jpg",
      colSpan: "md:col-span-1",
    },
    {
      id: "smart-energy",
      title: "Smart Energy",
      description:
        "Balance loads and monitor renewable generation with sub-millisecond telemetry and automated alerts.",
      href: "/solutions/smart-energy",
      image: "/solutions/smart-energy.jpg",
      colSpan: "md:col-span-1",
    },
    // — Row B ——————————————————————————————————————————
    {
      id: "cold-storage",
      title: "Cold Storage",
      description:
        "Ensure zero spoilage and strict regulatory compliance with continuous temperature and humidity monitoring.",
      href: "/solutions/cold-storage",
      image: "/solutions/cold-storage.jpg",
      colSpan: "md:col-span-1",
    },
    {
      id: "smart-farming",
      title: "Smart Farming",
      description:
        "Maximize agricultural yield via predictive models and real-time soil, weather, and crop analytics.",
      href: "/solutions/smart-farming",
      image: "/solutions/smart-farming.jpg",
      colSpan: "md:col-span-1",
    },
    {
      id: "oil-gas",
      title: "Oil & Gas",
      description:
        "Monitor remote pipelines and predict pump failures before they cause costly downtime in harsh environments.",
      href: "/solutions/oil-gas",
      image: "/solutions/oil-and-gas.jpg",
      colSpan: "md:col-span-2",
    },
    // — Row C (last row — always 2 × span-2) ——————————
    {
      id: "smart-irrigation",
      title: "Smart Irrigation",
      description:
        "Trigger precise watering schedules automatically based on live soil moisture and weather forecast data.",
      href: "/solutions/smart-irrigation",
      image: "/solutions/smart-irrigation.jpg",
      colSpan: "md:col-span-2",
    },
    {
      id: "air-quality",
      title: "Air Quality Monitoring",
      description:
        "Track PM2.5, CO₂, and pollutants across zones to ensure regulatory compliance and protect public health.",
      href: "/solutions/air-quality",
      image: "/solutions/air-quality.jpg",
      colSpan: "md:col-span-2",
    },
  ],
};

export function SolutionsGrid() {
  return (
    <section className="py-20 lg:py-28 bg-background border-t border-border/40">
      <div className="mx-auto container px-6">
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#073763] dark:text-blue-400 mb-3">
            {SOLUTIONS_CONTENT.heading.eyebrow}
          </p>
          <h2 className="text-3xl font-medium tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] leading-[1.1] mb-4">
            {SOLUTIONS_CONTENT.heading.title}{" "}
            <span className="text-muted-foreground">
              {SOLUTIONS_CONTENT.heading.titleAccent}
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {SOLUTIONS_CONTENT.heading.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 lg:gap-4">
          {SOLUTIONS_CONTENT.solutions.map((solution) => (
            <Link
              key={solution.id}
              href={solution.href}
              className={cn(
                "group relative flex flex-col overflow-hidden rounded-2xl",
                "border-2 border-border bg-card",
                "transition-all duration-300 hover:border-[#073763]/50 hover:shadow-lg hover:-translate-y-0.5",
                solution.colSpan,
              )}
            >
              {/* Screenshot preview */}
              <div className="relative overflow-hidden bg-muted/20 h-100 shrink-0">
                <Image
                  src={solution.image}
                  alt={`${solution.title} dashboard preview`}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-card/50 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-5">
                <h3 className="text-lg font-semibold text-foreground mb-1.5 leading-snug">
                  {solution.title}
                </h3>
                <p className=" text-muted-foreground leading-relaxed mb-4 flex-1 line-clamp-2">
                  {solution.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-base font-medium text-[#073763] dark:text-blue-400">
                  Explore solution
                  <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

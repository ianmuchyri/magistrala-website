import { cn } from "@/lib/utils";
import type { Feature } from "./features-data";
import { RBACVisual } from "./rbac-visual";
import { ScreenshotVisual } from "./screenshot-visual";
import { TerminalVisual } from "./terminal-visual";

export function FeatureCard({
  feature,
  reversed,
}: {
  feature: Feature;
  reversed: boolean;
}) {
  const Icon = feature.icon;

  return (
    <div
      className={cn(
        "flex flex-col sm:flex-row transition-all duration-200 h-100",
        reversed && "sm:flex-row-reverse",
      )}
    >
      {/* Content */}
      <div className="flex flex-col justify-center p-8 lg:p-10 sm:w-[42%] shrink-0 border-b sm:border-b-0 border-border/60">
        <div className="flex items-center gap-3 mb-4">
          <div className="size-12 rounded-lg bg-[#073763]/8 dark:bg-[#073763]/20 flex items-center justify-center shrink-0">
            <Icon className="size-8 text-[#073763] dark:text-blue-400" />
          </div>
          <h3 className="text-xl font-semibold text-foreground leading-snug">
            {feature.title}
          </h3>
        </div>
        <p className="text-lg text-muted-foreground leading-relaxed">
          {feature.description}
        </p>
      </div>

      {/* Visual — fills remaining card width; card has fixed h-100 */}
      <div className="relative flex-1 overflow-hidden bg-muted/10">
        {feature.visual === "terminal" && <TerminalVisual />}
        {feature.visual === "screenshot" && (
          <>
            <ScreenshotVisual src={feature.image} alt={feature.imageAlt} />
            {/* Bottom fade */}
            <div className="absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-card via-card/60 to-transparent pointer-events-none z-10" />
          </>
        )}
        {feature.visual === "rbac" && <RBACVisual />}
      </div>
    </div>
  );
}

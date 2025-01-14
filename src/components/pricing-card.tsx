import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { PricingCardProps } from "@/types/card-types";

export function PricingCard({
  title,
  features,
  ctaText,
  ctaVariant,
  ctaLink,
}: PricingCardProps) {
  return (
    <Card className="flex flex-col p-6">
      <h3 className="text-2xl font-bold text-center mb-6">{title}</h3>
      <ul className="flex-1 space-y-4 mb-6">
        {features.map((feature, index) => (
          // biome-ignore lint/suspicious/noArrayIndexKey:
          <li key={index} className="flex items-start gap-2">
            <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button variant="default" className="w-full" asChild>
        <a href={ctaLink}>{ctaText}</a>
      </Button>
    </Card>
  );
}

import type { PricingSectionProps } from "@/types/card-types";
import { PricingCard } from "./pricing-card";

export function PricingSection({ plans }: PricingSectionProps) {
  return (
    <section id="pricing" className=" bg-gray-100 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Pricing</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            // biome-ignore lint/suspicious/noArrayIndexKey:
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { Button } from "@/components/ui/button";

interface HeroProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  imageUrl: string;
}

export function Hero({ title, subtitle, buttonText, buttonLink, imageUrl }: HeroProps) {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6 text-center flex flex-row">
        <div className="text-center md:text-left space-y-4">
          <h2 className="text-5xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-gray-700">{subtitle}</p>
          <Button size="lg" variant="default" asChild>
            <a href={buttonLink}>{buttonText}</a>
          </Button>
        </div>
        <div className="relative w-full h-64 md:h-80">
          <Image
            src={imageUrl}
            alt="Hero Image"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-md"
          />
        </div>
      </div>
    </section>
  );
}

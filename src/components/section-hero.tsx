import { Button } from '@/components/ui/button';
import { heroData } from '@/lib/constants';
import { getImageUrl } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="py-32 md:h-[95vh]">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2  space-y-2">
        <div className="text-center md:text-left space-y-8">
          <h1 className="lg:text-6xl text-5xl mb-4 text-blue-950 tracking-tight">
            {heroData.title}
          </h1>
          <p className="text-xl text-gray-800 mr-2">{heroData.subtitle}</p>
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <Button
              size="lg"
              variant="default"
              className="px-4 py-2 rounded w-48 hover:scale-105"
              asChild={true}
            >
              <Link href={heroData.getStartedButton.link}>
                <span>{heroData.getStartedButton.text}</span>
                <ArrowRight />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild={true}
              className="hover:scale-105"
            >
              <Link href={heroData.requestDemoButton.link}>
                <span>{heroData.requestDemoButton.text}</span>
                <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
        <div className="relative hidden md:block w-full">
          <Image
            src={getImageUrl(heroData.image.url)}
            alt={heroData.image.alt}
            fill
            objectFit="contain"
            className="rounded-md"
            priority
          />
        </div>
      </div>
    </section>
  );
}

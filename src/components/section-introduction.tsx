import { Card, CardContent } from '@/components/ui/card';
import { IntroductionSectionData } from '@/lib/constants';
import { getImageUrl } from '@/lib/utils';
import Image from 'next/image';

interface IntroductionSectionProps {
  sectionId: string;
  title: string;
  imageUrl: string;
  alt: string;
  content: {
    overview: string;
    security: string;
    community: string;
  };
}

export function IntroductionSection() {
  const { sectionId, title, content, imageUrl, alt } = IntroductionSectionData;

  return (
    <section id={sectionId} className="py-32">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          <div className="w-full lg:w-1/2">
            <Image
              src={getImageUrl(imageUrl)}
              alt={alt}
              width={300}
              height={225}
              className="object-cover rounded-lg w-full"
            />
          </div>
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="lg:text-5xl text-3xl mb-8">{title}</h2>
            <div className="space-y-6 text-gray-700">
              <p className="text-lg  leading-relaxed">{content.overview}</p>
              <p className="text-lg  leading-relaxed">{content.security}</p>
              <p className="text-lg  leading-relaxed">{content.community}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

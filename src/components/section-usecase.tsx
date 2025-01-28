'use client';

import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useCasesSectionData } from '@/lib/constants';
import { getImageUrl } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { use, useState } from 'react';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';

interface UseCase {
  title: string;
  description: string;
  imageUrl: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
}

export function UseCasesSection() {
  const { sectionId, title, subtitle, useCases } = useCasesSectionData;

  return (
    <section id={sectionId} className="bg-gray-100 py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl lg:text-5xl text-center mb-8">{title}</h2>
        <p className="text-xl lg:text-2xl text-gray-700 text-center mb-8">
          {subtitle}
        </p>
        <div className="grid grid-rows-1 md:grid-cols-3 gap-4">
          {useCases.map((usecase) => (
            <UseCaseCard key={usecase.title} useCase={usecase} />
          ))}
        </div>
      </div>
    </section>
  );
}

function UseCaseCard({ useCase }: { useCase: UseCase }) {
  return (
    <Card className="overflow-hidden flex flex-col h-full">
      <div>
        <Image
          src={getImageUrl(useCase.imageUrl)}
          alt={useCase.title}
          width={400}
          height={200}
          className="object-cover w-full h-60"
        />
        <CardHeader className="p-4">
          <CardTitle className="text-lg">{useCase.title}</CardTitle>
          <CardDescription className="text-md text-muted-foreground mt-2">
            {useCase.description}
          </CardDescription>
        </CardHeader>
      </div>
      <CardFooter className="mt-auto p-4 flex flex-row gap-4">
        <Button asChild={true}>
          <Link href={useCase.ctaLink || '#'}>{useCase.ctaText}</Link>
        </Button>
        {useCase.secondaryCtaText && useCase.secondaryCtaLink && (
          <Button variant="outline" asChild={true}>
            <a href={useCase.secondaryCtaLink}>{useCase.secondaryCtaText}</a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}

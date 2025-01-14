'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { UseCaseCard } from "./usecase-card"

interface UseCase {
  title: string
  description: string
  imageUrl: string
  ctaText?: string
  ctaLink?: string
  secondaryCtaText?: string
  secondaryCtaLink?: string
}

interface UseCasesCarouselProps {
  useCases: UseCase[]
}

export function UseCasesCarousel({ useCases }: UseCasesCarouselProps) {
  return (
    <Carousel className="w-full max-w-6xl mx-auto relative">
      <CarouselContent>
        {useCases.map((useCase, index) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: 
            <CarouselItem key={index}>
            <UseCaseCard {...useCase} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute -left-12 top-1/2 -translate-y-1/2" />
      <CarouselNext className="absolute -right-12 top-1/2 -translate-y-1/2" />
    </Carousel>
  )
}


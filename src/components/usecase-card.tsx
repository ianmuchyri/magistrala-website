import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface UseCaseCardProps {
  title: string
  description: string
  imageUrl: string
  ctaText?: string
  ctaLink?: string
  secondaryCtaText?: string
  secondaryCtaLink?: string
}

export function UseCaseCard({
  title,
  description,
  imageUrl,
  ctaText = "Learn more",
  ctaLink = "#",
  secondaryCtaText,
  secondaryCtaLink
}: UseCaseCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="grid md:grid-cols-2 gap-6 p-6">
        <div className="flex flex-col justify-center space-y-4">
          <h3 className="text-2xl font-bold tracking-tight">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Button asChild>
              <a href={ctaLink}>{ctaText}</a>
            </Button>
            {secondaryCtaText && secondaryCtaLink && (
              <Button variant="outline" asChild>
                <a href={secondaryCtaLink}>{secondaryCtaText}</a>
              </Button>
            )}
          </div>
        </div>
        <div className="relative h-[300px] md:h-[400px]">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </Card>
  )
}

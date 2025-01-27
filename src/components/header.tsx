'use client';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { HeaderData } from '@/lib/constants';
import { getImageUrl } from '@/lib/utils';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Separator } from './ui/separator';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <Link href="/">
          <Image
            src={
              getImageUrl(HeaderData.Logo.url) || HeaderData.Logo.placeholder
            }
            alt={HeaderData.Logo.alt}
            width={HeaderData.Logo.width}
            height={HeaderData.Logo.height}
          />
        </Link>

        {/* Desktop Navigation Section */}
        <nav className="hidden md:flex flex-1 justify-center">
          <ul className="flex space-x-8 items-center">
            {HeaderData.navigationLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-xl hover:text-blue-600 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA Button Section */}
        <div className="hidden md:flex items-center gap-6">
          <Button aria-label={HeaderData.ctaButton.text} asChild={true}>
            <Link href={HeaderData.ctaButton.link}>
              {HeaderData.ctaButton.text}
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <MobileMenu />
      </div>
    </header>
  );
}

function MobileMenu() {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button className="md:hidden" aria-label="Toggle menu">
          <Menu className="h-6 w-6 text-white" />
        </Button>
      </SheetTrigger>
      <SheetContent side="top">
        <SheetHeader>
          <SheetTitle className="hidden">Menu</SheetTitle>
        </SheetHeader>
        <Separator className="my-8" />
        <nav className="flex flex-col gap-4">
          <ul className="flex flex-col space-y-4 items-center">
            {HeaderData.navigationLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-xl hover:text-blue-600 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Separator className="mt-4" />

          <Button aria-label={HeaderData.ctaButton.text} asChild={true}>
            <Link href={HeaderData.ctaButton.link}>
              {HeaderData.ctaButton.text}
            </Link>
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  );
}

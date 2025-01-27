import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const isProd = process.env.NODE_ENV === 'production';

export function getImageUrl(imageUrl: string): string {
  const placeholderImage = '/crashed-error.svg';

  if (!imageUrl) {
    return isProd ? `/magistrala-website${placeholderImage}` : placeholderImage;
  }
  return isProd ? `/magistrala-website/${imageUrl}` : `/${imageUrl}`;
}

export function getCurrentYear(): number {
  return new Date().getFullYear();
}

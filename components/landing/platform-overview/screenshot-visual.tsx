import Image from "next/image";

export function ScreenshotVisual({ src, alt }: { src: string; alt: string }) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover object-top-left"
      sizes="(max-width: 768px) 100vw, 40vw"
    />
  );
}

"use client";
import Image, { ImageProps, StaticImageData } from "next/image";
import { useState } from "react";

export function ImageWithFallback({
  fallback,
  src,
  ...p
}: ImageProps & { fallback: StaticImageData }) {
  const [imageSrc, setImageSrc] = useState(src);

  return (
    <Image
      {...p}
      src={imageSrc}
      alt="fallback"
      onError={() => {
        setImageSrc(fallback.src);
      }}
    />
  );
}

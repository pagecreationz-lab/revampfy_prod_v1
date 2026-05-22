"use client";

import { useEffect, useState } from "react";

type HeroImageSliderProps = {
  images: Array<{ src: string; alt: string }>;
  intervalMs?: number;
};

export function HeroImageSlider({ images, intervalMs = 3500 }: HeroImageSliderProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, intervalMs);
    return () => window.clearInterval(timer);
  }, [images.length, intervalMs]);

  return (
    <div className="hero-slider" aria-label="Hero image slider">
      <span className="hero-slider__badge">Refurbished</span>
      {images.map((image, imageIndex) => (
        <img
          key={image.src}
          src={image.src}
          alt={image.alt}
          className={`hero-slider__image ${imageIndex === index ? "is-active" : ""}`}
        />
      ))}
      <div className="hero-slider__dots" role="tablist" aria-label="Slide navigation">
        {images.map((image, dotIndex) => (
          <button
            key={`${image.src}-dot`}
            type="button"
            className={`hero-slider__dot ${dotIndex === index ? "is-active" : ""}`}
            onClick={() => setIndex(dotIndex)}
            aria-label={`Go to slide ${dotIndex + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

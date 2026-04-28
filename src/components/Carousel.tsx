'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselImage {
  url: string;
}

interface CarouselProps {
  images: CarouselImage[];
}

const CHANGE_TIME = 6000;

export default function Carousel({ images }: CarouselProps) {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleNext = useCallback(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const handlePrev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const goToSlide = (index: number) => {
    if (index === current) return;
    setCurrent(index);
  };

  if (images.length === 0) return null;

  return (
    <div
      className="relative w-full group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Main carousel container */}
      <div className="relative w-full aspect-[21/9] sm:aspect-[21/9] md:aspect-[21/8] lg:aspect-[21/9] overflow-hidden rounded-2xl bg-gray-100">
        {/* Images */}
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-700 ease-out ${
              index === current
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-105'
            }`}
          >
            <Image
              src={image.url}
              alt={`Slide ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
              loading={index === 0 ? 'eager' : 'lazy'}
              sizes="100vw"
            />
          </div>
        ))}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

        {/* Navigation arrows - visible on hover */}
        <button
          onClick={handlePrev}
          className="absolute left-4 lg:left-6 top-1/2 -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm text-gray-700 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110 shadow-lg"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-4 lg:right-6 top-1/2 -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm text-gray-700 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110 shadow-lg"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6" />
        </button>

        {/* Bottom indicators with progress */}
        <div className="absolute bottom-4 lg:bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 lg:gap-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="relative h-1 lg:h-1.5 rounded-full overflow-hidden transition-all duration-300 bg-white/40"
              style={{
                width: index === current ? '32px' : '8px',
              }}
              aria-label={`Go to slide ${index + 1}`}
            >
              {/* Progress fill for current slide — CSS-driven, advances slide on animationend */}
              {index === current && (
                <div
                  key={current}
                  className="absolute inset-y-0 left-0 bg-white rounded-full carousel-progress"
                  style={{
                    animationDuration: `${CHANGE_TIME}ms`,
                    animationPlayState: isPaused ? 'paused' : 'running',
                  }}
                  onAnimationEnd={handleNext}
                />
              )}
            </button>
          ))}
        </div>

      </div>
    </div>
  );
}

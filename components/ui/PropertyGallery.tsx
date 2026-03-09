'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useCallback, useRef, useState } from 'react';

type PropertyGalleryProps = Readonly<{
  images: string[];
  title: string;
}>;

export function PropertyGallery({ images, title }: PropertyGalleryProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(images.length > 3);

  const updateScrollButtons = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, []);

  const scroll = useCallback((direction: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.clientWidth / 3;
    el.scrollBy({ left: direction === 'left' ? -cardWidth : cardWidth, behavior: 'smooth' });
  }, []);

  const showArrows = images.length > 3;

  return (
    <div className="relative group/gallery">
      {showArrows && canScrollLeft && (
        <button
          onClick={() => scroll('left')}
          aria-label="Scroll gallery left"
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-neutral-950/80 border border-white/10 text-white hover:border-gold hover:text-gold transition-colors backdrop-blur-sm"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
      )}

      {showArrows && canScrollRight && (
        <button
          onClick={() => scroll('right')}
          aria-label="Scroll gallery right"
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-neutral-950/80 border border-white/10 text-white hover:border-gold hover:text-gold transition-colors backdrop-blur-sm"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      )}

      <div
        ref={scrollRef}
        onScroll={updateScrollButtons}
        className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {images.map((src, idx) => (
          <div
            key={idx}
            className="flex-none w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.67rem)] aspect-[4/3] relative bg-neutral-900 overflow-hidden"
          >
            <Image
              src={src}
              alt={`${title} — image ${idx + 1}`}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageCarouselProps {
  images: string[];
  alt: string;
  className?: string;
}

const ImageCarousel = ({ images, alt, className = '' }: ImageCarouselProps) => {
  const [index, setIndex] = useState(0);

  if (images.length === 1) {
    return <img src={images[0]} alt={alt} className={className} />;
  }

  const goTo = (i: number) => setIndex((i + images.length) % images.length);

  return (
    <div className="relative w-full h-full group/carousel">
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={alt}
          className={`${className} absolute inset-0 transition-opacity duration-500 ${i === index ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        />
      ))}

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          goTo(index - 1);
        }}
        aria-label="Previous image"
        className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-black/50 text-white opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-200 hover:bg-yellow-400 hover:text-black"
      >
        <ChevronLeft size={18} />
      </button>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          goTo(index + 1);
        }}
        aria-label="Next image"
        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-black/50 text-white opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-200 hover:bg-yellow-400 hover:text-black"
      >
        <ChevronRight size={18} />
      </button>

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setIndex(i);
            }}
            aria-label={`Go to image ${i + 1}`}
            className={`h-1.5 transition-all duration-200 ${i === index ? 'w-4 bg-yellow-400' : 'w-1.5 bg-white/50 hover:bg-white/80'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;

import { useState } from 'react';

interface ImageLightboxProps {
  images: { src: string; alt: string; caption: string }[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export function ImageLightbox({ 
  images, 
  currentIndex, 
  isOpen, 
  onClose, 
  onNext, 
  onPrev 
}: ImageLightboxProps) {
  if (!isOpen || !images[currentIndex]) return null;

  const currentImage = images[currentIndex];

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <button 
          className="absolute top-2 right-2 w-8 h-8 bg-red-600 text-white border border-red-800 text-lg"
          onClick={onClose}
        >
          ×
        </button>
        
        <img 
          src={currentImage.src}
          alt={currentImage.alt}
          className="max-w-full max-h-96 object-contain mx-auto block"
        />
        
        <div className="text-center mt-4">
          <p className="text-sm text-gray-700 font-serif">
            {currentImage.caption}
          </p>
          <p className="text-xs text-gray-500 mt-2">
            {currentIndex + 1} of {images.length}
          </p>
        </div>

        {images.length > 1 && (
          <>
            <button 
              className="lightbox-nav prev"
              onClick={onPrev}
              disabled={currentIndex === 0}
            >
              ‹
            </button>
            <button 
              className="lightbox-nav next"
              onClick={onNext}
              disabled={currentIndex === images.length - 1}
            >
              ›
            </button>
          </>
        )}
      </div>
    </div>
  );
}
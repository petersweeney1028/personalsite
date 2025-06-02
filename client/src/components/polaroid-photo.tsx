interface PolaroidPhotoProps {
  src: string;
  alt: string;
  caption: string;
}

export function PolaroidPhoto({ src, alt, caption }: PolaroidPhotoProps) {
  return (
    <div className="polaroid">
      <img 
        src={src}
        alt={alt}
        className="w-32 h-32 object-cover"
      />
      <div className="text-center mt-3 font-comic text-black text-sm">
        {caption}
      </div>
    </div>
  );
}

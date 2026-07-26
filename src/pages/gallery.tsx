import { galleryImages } from "@/data/gallery";
import { ImageIcon, X } from "lucide-react";
import { useState } from "react";

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("vi-VN", {
    year: "numeric",
    // month: "long",
    // day: "numeric",
  });
}

export default function GalleryPage() {
  const [zoomedIndex, setZoomedIndex] = useState<number | null>(null);

  if (galleryImages.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <ImageIcon className="h-12 w-12 text-muted-foreground/50" />
        <h1 className="mt-4 text-2xl font-bold tracking-tight">Gallery</h1>
        <p className="mt-2 text-muted-foreground">
          Nothing here. Comeback later!
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-10">
      <section className="bg-secondary p-6 sm:p-8">
        <p className="font-mono text-[10px] font-bold tracking-[0.18em] text-primary">ART / SELECTED FRAGMENTS</p>
        <h1 className="mt-5 text-4xl font-bold tracking-[-0.05em] sm:text-5xl">Gallery</h1>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
          People, places, and small records kept outside the work desk.
        </p>
      </section>

      <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 xl:grid-cols-3">
        {galleryImages.map((image, index) => (
          <figure key={image.src} className="group bg-card">
            <button
              type="button"
              className="block aspect-[3/2] w-full cursor-zoom-in overflow-hidden bg-foreground text-left"
              onClick={() => setZoomedIndex(index)}
              aria-label={`Expand ${image.alt}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.025] group-hover:opacity-90"
              />
            </button>
            <figcaption className="flex min-h-14 items-start justify-between gap-4 px-4 py-3 font-mono">
              <span className="text-xs font-bold tracking-[0.08em] text-foreground">{image.alt}</span>
              <time dateTime={image.date} className="text-[10px] font-bold tracking-[0.14em] text-muted-foreground">
                {formatDate(image.date)}
              </time>
            </figcaption>
          </figure>
        ))}
      </div>

      {/* Zoom overlay */}
      {zoomedIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/95 p-4"
          onClick={() => setZoomedIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`Expanded ${galleryImages[zoomedIndex].alt}`}
        >
          <button
            type="button"
            onClick={() => setZoomedIndex(null)}
            className="absolute right-4 top-4 bg-primary p-3 text-primary-foreground"
            aria-label="Close image"
          >
            <X className="h-5 w-5" />
          </button>
          <img
            src={galleryImages[zoomedIndex].src}
            alt={galleryImages[zoomedIndex].alt}
            className="max-h-[85vh] max-w-[92vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}

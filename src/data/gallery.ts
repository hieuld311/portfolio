export interface GalleryImage {
  /** File path relative to /public, e.g. "/gallery/sunset.jpg" */
  src: string;
  alt: string;
  date: string; // ISO date string or readable date
}

/**
 * Add new images to the top of this array.
 * Place the actual image file inside  public/gallery/
 */
export const galleryImages: GalleryImage[] = [
  {
    src: "/gallery/SUMUPDAT.jpg",
    alt: "Year end party of DAT",
    date: "2026",
  },
  {
    src: "/gallery/CIS2026.jfif",
    alt: "CIS Course of FPT Academy",
    date: "2026",
  },
  {
    src: "/gallery/fsoftwithHoa.jpg",
    alt: "FSoft academy intern class",
    date: "2024",
  },
  {
    src: "/gallery/QUOCPHONG2.png",
    alt: "FPT University military course",
    date: "2022",
  },
  {
    src: "/gallery/QUOCPHONG.jpg",
    alt: "FPT University military course",
    date: "2022",
  },
];

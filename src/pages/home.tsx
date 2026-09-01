
import {  X } from "lucide-react";
import { useState } from "react";

const deskNotes = [
  { label: "DEV", value: "Very Inefficient But Entertaining", tone: "bg-foreground text-background" },
  { label: "ART", value: "An old habit", tone: "bg-accent text-accent-foreground" },
  { label: "NOW PLAYING", value: "Machines are talking", tone: "bg-primary text-primary-foreground" },
];

export default function HomePage() {
  const [zoomed, setZoomed] = useState(false);

  return (
    <div className="space-y-10 sm:space-y-14">
      <section className="grid gap-6 lg:grid-cols-[1.5fr_0.8fr] lg:gap-8">
        <div className="bg-secondary p-6 sm:p-10">
          <p className="font-mono text-[11px] font-bold tracking-[0.18em] text-primary">
            PERSONAL INDEX / VIETNAM
          </p>
          <h1 className="mt-8 max-w-3xl text-5xl font-bold leading-[0.92] tracking-[-0.06em] sm:text-7xl lg:text-6xl">
            UEIHDEL
          </h1>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            I code, draw and sometimes play guitar (actually I want to try drums).
          </p>
          
        </div>

        <button
          type="button"
          onClick={() => setZoomed(true)}
          className="group relative min-h-72 overflow-hidden bg-foreground text-left sm:min-h-96"
          aria-label="Zoom portrait"
        >
          <img
            src="/awa_subaru.jpg"
            alt="Lê Đình Hiếu"
            className="h-full w-full object-cover opacity-90 grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
          />
          <span className="absolute bottom-0 left-0 bg-foreground px-3 py-2 font-mono text-[10px] font-bold tracking-[0.14em] text-background">
            PORTRAIT_01 / CLICK TO EXPAND
          </span>
        </button>
      </section>

      <section className="grid gap-1 sm:grid-cols-3" aria-label="Personal disciplines">
        {deskNotes.map((note) => (
          <div key={note.label} className={`${note.tone} min-h-36 p-5 sm:min-h-44`}>
            <p className="font-mono text-[10px] font-bold tracking-[0.16em] opacity-70">
              {note.label}
            </p>
            <p className="mt-8 max-w-48 text-lg font-semibold leading-tight tracking-tight">
              {note.value}
            </p>
          </div>
        ))}
      </section>

      <section className="grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="bg-primary p-6 text-primary-foreground sm:p-8">
          <p className="font-mono text-[10px] font-bold tracking-[0.18em]">SIDE A / ME</p>
          <p className="mt-10 text-3xl font-bold leading-none tracking-tight">quis sum?</p>
          <p className="mt-5 max-w-sm text-sm leading-relaxed opacity-80">
            who am i?
          </p>
        </div>
        <div className="bg-card p-6 sm:p-8">
          <p className="font-mono text-[10px] font-bold tracking-[0.18em] text-muted-foreground">ABOUT THIS DESK</p>
          <p className="mt-8 max-w-2xl text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
            A small portfolio for code, art, and the things in between.
          </p>
        </div>
      </section>

      {zoomed && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/95 p-4"
          onClick={() => setZoomed(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Expanded portrait"
        >
          <button
            type="button"
            onClick={() => setZoomed(false)}
            className="absolute right-4 top-4 bg-primary p-3 text-primary-foreground"
            aria-label="Close portrait"
          >
            <X className="h-5 w-5" />
          </button>
          <img
            src="/awa_subaru.jpg"
            alt="Lê Đình Hiếu"
            className="max-h-[84vh] max-w-[92vw] object-contain"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}

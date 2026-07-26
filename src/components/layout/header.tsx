import { ThemeToggle } from "@/components/theme-toggle";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { to: "#/", label: "Home" },
  { to: "#/gallery", label: "Gallery" },
  { to: "#/about", label: "About Me" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const currentRoute = window.location.hash || "#/";

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex min-h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a
          href="#/"
          className="group flex items-baseline gap-2 font-mono text-sm font-bold tracking-tight"
          onClick={() => setMobileOpen(false)}
        >
          <span className="bg-foreground px-2 py-1 text-background transition-colors group-hover:bg-primary">
            HIEULD
          </span>
          <span className="hidden text-[10px] font-medium tracking-[0.16em] text-muted-foreground sm:inline">
            PERSONAL INDEX
          </span>
        </a>

        <nav className="hidden items-center gap-1 font-mono md:flex">
          {navLinks.map((link) => (
            <a
              key={link.to}
              href={link.to}
              className={`px-3 py-2 text-xs font-bold tracking-[0.12em] transition-colors ${
                currentRoute === link.to
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-accent hover:text-foreground"
              }`}
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="bg-secondary md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3 font-mono">
            {navLinks.map((link) => (
              <a
                key={link.to}
                href={link.to}
                onClick={() => setMobileOpen(false)}
                className={`px-3 py-2 text-xs font-bold tracking-[0.12em] transition-colors ${
                  currentRoute === link.to
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-background hover:text-foreground"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

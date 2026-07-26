export function Footer() {
  return (
    <footer className="mt-8 bg-foreground text-background">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 font-mono text-xs tracking-[0.1em] sm:px-6">
        <span>© {new Date().getFullYear()} HIEULD / VIETNAM</span>
        <a
          href="https://github.com/hieuld311"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-primary"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}

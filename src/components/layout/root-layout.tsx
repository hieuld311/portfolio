import type { ReactNode } from "react";
import { Header } from "./header";
import { Footer } from "./footer";

export function RootLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-6 sm:py-12">
        {children}
      </main>
      <Footer />
    </div>
  );
}

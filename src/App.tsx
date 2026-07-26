import { useEffect, useState } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { RootLayout } from "@/components/layout/root-layout";
import HomePage from "@/pages/home";
import GalleryPage from "@/pages/gallery";
import AboutPage from "@/pages/about";

type Route = "/" | "/gallery" | "/about";

function getRoute(): Route {
  const route = window.location.hash.slice(1) || "/";
  return route === "/gallery" || route === "/about" ? route : "/";
}

function App() {
  const [route, setRoute] = useState<Route>(getRoute);

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(getRoute());
      window.scrollTo(0, 0);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const page = {
    "/": <HomePage />,
    "/gallery": <GalleryPage />,
    "/about": <AboutPage />,
  }[route];

  return (
    <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
      <RootLayout>{page}</RootLayout>
    </ThemeProvider>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { ScrollToTop } from "@/components/scroll-to-top";
import { RootLayout } from "@/components/layout/root-layout";
import HomePage from "@/pages/home";
import GalleryPage from "@/pages/gallery";
import AboutPage from "@/pages/about";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<RootLayout />}>
            <Route index element={<HomePage />} />
            <Route path="gallery" element={<GalleryPage />} />
            <Route path="about" element={<AboutPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

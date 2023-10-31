"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import Lenis from "@studio-freight/lenis";
import debounce from "@/utils/debounce";

// Define the type for the context
interface PageContextType {
  lenis: Lenis | null;
}

const PageContext = createContext<PageContextType | undefined>(undefined);

interface PageProviderProps {
  children: React.ReactNode;
}

export const PageProvider: React.FC<PageProviderProps> = ({ children }) => {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothTouch: false,
      touchMultiplier: 2,
      gestureOrientation: "vertical",
      orientation: "vertical",
      smoothWheel: true,
    });

    let lastHeight = 0;
    let hideNav = false;
    let isScrolled = false;

    const animate = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    lenis.on("scroll", ({ scroll }: { scroll: number }) => {
      debounce(() => (lastHeight = scroll))();

      if (lastHeight < scroll && scroll > 100 && !hideNav) {
        document.body.classList.add("hide_header");
        hideNav = true;
      }

      if (lastHeight >= scroll && scroll > 100 && hideNav) {
        document.body.classList.remove("hide_header");
        hideNav = false;
      }

      if (lastHeight < scroll && scroll > 220 && !isScrolled) {
        document.body.classList.add("scrolled");
        isScrolled = true;
      }

      if (lastHeight >= scroll && scroll < 220 && isScrolled) {
        document.body.classList.remove("scrolled");
        isScrolled = false;
      }
    });

    setLenis(lenis);

    return () => {
      lenis.destroy();
    };
  }, []);

  const memoedValue = useMemo(() => ({ lenis }), [lenis]);

  return (
    <PageContext.Provider value={memoedValue}>{children}</PageContext.Provider>
  );
};

export function usePage() {
  const context = useContext(PageContext);
  if (context === undefined) {
    throw new Error("usePage must be used within a PageProvider");
  }
  return context;
}

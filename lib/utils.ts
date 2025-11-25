import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { useState, useEffect } from "react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function useIsXL() {
  const [isXL, setIsXL] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 80rem)");
    const listener = (e: MediaQueryListEvent) => setIsXL(e.matches);
    setIsXL(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, []);

  return isXL;
}

export function useIsMD() {
  const [isMD, setIsMD] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 48rem)");
    const listener = (e: MediaQueryListEvent) => setIsMD(e.matches);
    setIsMD(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, []);

  return isMD;
}

"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useEffect, useState } from "react";

import type { ThemeProviderProps } from "next-themes/dist/types";

/**
 * Theme Provider
 *
 * Allows us to use dark mode/light mode (as well as other themes in the future)
 *
 * @see https://ui.shadcn.com/docs/dark-mode/next
 * @see https://github.com/pacocoursey/next-themes
 */
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

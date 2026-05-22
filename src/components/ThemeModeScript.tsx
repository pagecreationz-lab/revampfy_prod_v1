"use client";

import { useLayoutEffect } from "react";

type ThemeModeScriptProps = {
  defaultMode: "dark" | "light";
};

export function ThemeModeScript({ defaultMode }: ThemeModeScriptProps) {
  useLayoutEffect(() => {
    const body = document.body;
    if (!body) return;
    body.classList.remove("theme-dark", "theme-light");
    body.classList.add(defaultMode === "light" ? "theme-light" : "theme-dark");
  }, [defaultMode]);

  return null;
}

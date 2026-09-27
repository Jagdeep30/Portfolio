"use client";

import { useRef } from "react";

type Theme = "light" | "dark";

/**
 * Switches theme and remembers it. Where the browser supports view transitions,
 * the new theme spreads out as a circle from `origin` (the toggle, usually).
 */
export function setTheme(next: Theme, origin?: { x: number; y: number }) {
  const root = document.documentElement;
  const apply = () => {
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* Safari private mode and friends — the switch still holds for this visit. */
    }
  };

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!document.startViewTransition || reduced) {
    apply();
    return;
  }

  const x = origin?.x ?? window.innerWidth / 2;
  const y = origin?.y ?? 0;
  const radius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));

  document.startViewTransition(apply).ready.then(() => {
    root.animate(
      { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
      { duration: 550, easing: "cubic-bezier(0.16, 1, 0.3, 1)", pseudoElement: "::view-transition-new(root)" },
    );
  });
}

export function currentTheme(): Theme {
  return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
}

/**
 * The icon swap is pure CSS, keyed off the `data-theme` attribute the inline
 * script in the layout sets before first paint — so the correct icon is on
 * screen immediately, with no hydration flash.
 */
export function ThemeToggle() {
  const button = useRef<HTMLButtonElement>(null);

  function toggle() {
    const rect = button.current?.getBoundingClientRect();
    setTheme(
      currentTheme() === "dark" ? "light" : "dark",
      rect ? { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 } : undefined,
    );
  }

  return (
    <button
      ref={button}
      type="button"
      onClick={toggle}
      aria-label="Toggle colour theme"
      className="flex size-10 shrink-0 items-center justify-center rounded-full text-muted transition-colors hover:text-fg sm:size-8"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-[15px] dark:hidden"
        aria-hidden="true"
      >
        <path d="M20.8 13.4A8.6 8.6 0 1 1 10.6 3.2a6.7 6.7 0 0 0 10.2 10.2z" />
      </svg>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="hidden size-[15px] dark:block"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4.2" />
        <path d="M12 2.2v2.1M12 19.7v2.1M4.6 4.6l1.5 1.5M17.9 17.9l1.5 1.5M2.2 12h2.1M19.7 12h2.1M4.6 19.4l1.5-1.5M17.9 6.1l1.5-1.5" />
      </svg>
    </button>
  );
}

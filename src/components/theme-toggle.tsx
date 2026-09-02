"use client";

/**
 * The icon swap is pure CSS, keyed off the `data-theme` attribute the inline
 * script in the layout sets before first paint — so the correct icon is on
 * screen immediately, with no hydration flash.
 */
export function ThemeToggle() {
  function toggle() {
    const root = document.documentElement;
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* Safari private mode and friends — the toggle still works for this visit. */
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle colour theme"
      className="flex size-8 items-center justify-center rounded-full text-muted transition-colors hover:text-fg"
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

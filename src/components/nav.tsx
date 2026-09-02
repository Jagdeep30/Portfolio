"use client";

import { useEffect, useState } from "react";
import { ThemeToggle } from "./theme-toggle";

const links = [
  { href: "#top", label: "Home" },
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

/** Distance below the viewport top at which a section counts as "the one you're reading". */
const ACTIVATION_LINE = 140;

export function Nav() {
  const [active, setActive] = useState(links[0].href);

  useEffect(() => {
    const sections = links
      .map((link) => document.querySelector<HTMLElement>(link.href))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    let frame = 0;

    function update() {
      frame = 0;

      // The last section is short enough that it may never cross the activation
      // line, so treat "scrolled to the bottom" as reaching it. Only when there
      // is real scrolling to do - on a viewport taller than the whole page this
      // would otherwise pin the last link permanently.
      const scrollable = document.documentElement.scrollHeight - window.innerHeight > 120;
      const atBottom =
        scrollable &&
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;

      if (atBottom) {
        setActive(`#${sections[sections.length - 1].id}`);
        return;
      }

      let current = sections[0];
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= ACTIVATION_LINE) current = section;
      }
      setActive(`#${current.id}`);
    }

    function onScroll() {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    }

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="sticky top-0 z-50 flex justify-center px-3 pt-4 pb-3 sm:px-4 sm:pt-[30px]">
      {/* Fluid pill on phones so it can never be clipped; intrinsic width from sm up. */}
      <nav className="flex w-full items-center justify-between gap-0.5 rounded-full border border-edge bg-panel p-1.5 font-mono shadow-nav sm:w-auto sm:justify-start sm:gap-1.5 sm:p-[7px]">
        {links.map((link) => {
          const isActive = active === link.href;
          return (
            <a
              key={link.href}
              href={link.href}
              aria-current={isActive ? "true" : undefined}
              className={`rounded-full px-2 py-3 text-[11.5px] tracking-[0.04em] transition-colors sm:px-[15px] sm:py-2 sm:text-[12px] ${
                isActive ? "bg-elevated text-fg" : "text-muted hover:text-fg"
              }`}
            >
              {link.label}
            </a>
          );
        })}
        <span className="mx-[3px] hidden h-[18px] w-px bg-edge sm:block" aria-hidden="true" />
        <ThemeToggle />
      </nav>
    </div>
  );
}

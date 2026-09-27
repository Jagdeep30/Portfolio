"use client";

import { useState } from "react";
import type { System } from "@/content/site";
import { Visual } from "./work-visuals";

/**
 * Two cards share a row on wide screens. One is open, wider, with its diagram showing;
 * hovering, focusing or tapping the other swaps them. The last one opened stays open,
 * so the layout doesn't jump back as the pointer leaves. Below `lg` every card is open.
 */
export function WorkRow({
  systems,
  start,
  defaultOpen,
}: {
  systems: readonly System[];
  start: number;
  defaultOpen: number;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="flex flex-col gap-3 lg:flex-row">
      {systems.map((system, i) => (
        <article
          key={system.name}
          data-open={open === i}
          onMouseEnter={() => setOpen(i)}
          onFocus={() => setOpen(i)}
          onClick={() => setOpen(i)}
          className="group/card relative flex flex-col gap-6 overflow-hidden rounded-2xl border border-hairline bg-panel p-6 shadow-panel transition-[border-color,flex-grow] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] data-[open=true]:border-edge lg:basis-0 lg:grow lg:flex-row lg:gap-0 lg:data-[open=true]:grow-[2.1]"
        >
          <div className="flex flex-col lg:w-[264px] lg:shrink-0">
            <div className="flex items-center gap-3 font-mono text-[10.5px] tracking-[0.12em] text-faint">
              <span className="text-accent">{String(start + i + 1).padStart(2, "0")}</span>
              <span className="h-px w-4 bg-edge" aria-hidden="true" />
              <span className="truncate">{system.context}</span>
            </div>

            <h3 className="mt-4 text-[21px] leading-[1.3] tracking-[-0.01em]">
              {system.href ? (
                <a
                  href={system.href}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-accent"
                >
                  {system.name}
                  <span className="ml-1.5 text-[15px] text-faint" aria-hidden="true">
                    ↗
                  </span>
                </a>
              ) : (
                system.name
              )}
            </h3>
            <p className="mt-1.5 text-pretty text-[16px] leading-[1.6] text-muted">{system.summary}</p>

            <ul className="mt-4 flex flex-col gap-1.5">
              {system.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-2.5 text-[14.5px] leading-[1.6] text-muted">
                  <span className="mt-[11px] h-px w-2 shrink-0 bg-faint" aria-hidden="true" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
              {system.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-edge px-2.5 py-[3px] font-mono text-[10.5px] tracking-[0.04em] text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Decorative: everything it shows is already in the text beside it. */}
          <div
            aria-hidden="true"
            className="flex h-[220px] items-center justify-center overflow-hidden rounded-xl border border-hairline bg-bg [background-image:radial-gradient(var(--c-border)_1px,transparent_1px)] [background-size:14px_14px] lg:ml-6 lg:h-auto lg:min-w-0 lg:flex-1 lg:invisible lg:translate-x-3 lg:opacity-0 lg:transition-[opacity,translate,visibility] lg:duration-500 lg:group-data-[open=true]/card:visible lg:group-data-[open=true]/card:translate-x-0 lg:group-data-[open=true]/card:opacity-100 lg:group-data-[open=true]/card:delay-200"
          >
            <Visual kind={system.visual} />
          </div>
        </article>
      ))}
    </div>
  );
}

import { site } from "@/content/site";
import { SectionHeading } from "./section-heading";
import { WorkRow } from "./work-row";

/**
 * Systems in rows of two, stepping out of the reading column on wide screens.
 * The open card alternates sides row to row, so the grid reads as a zig-zag.
 */
export function Work() {
  const rows = [];
  for (let i = 0; i < site.systems.length; i += 2) {
    rows.push(site.systems.slice(i, i + 2));
  }

  return (
    <section
      id="work"
      className="relative left-1/2 flex w-[min(1000px,calc(100vw-48px))] -translate-x-1/2 scroll-mt-24 flex-col gap-[18px] pt-[76px] sm:pt-[92px]"
    >
      <SectionHeading>Selected work</SectionHeading>

      <div className="flex flex-col gap-3">
        {rows.map((row, r) => (
          <WorkRow key={r} systems={row} start={r * 2} defaultOpen={r % 2} />
        ))}

        <a
          href={site.github}
          target="_blank"
          rel="noreferrer"
          className="group mt-2 self-end font-mono text-[11px] tracking-[0.1em] text-faint uppercase transition-colors hover:text-accent"
        >
          More on GitHub
          <span className="ml-1.5 inline-block transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            ↗
          </span>
        </a>
      </div>
    </section>
  );
}

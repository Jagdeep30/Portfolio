import { site } from "@/content/site";
import { SectionHeading } from "./section-heading";

/** One panel, quartered on wider screens, with each group's items as tags. */
export function Toolkit() {
  return (
    <section className="flex flex-col gap-[18px] pt-[76px] sm:pt-[92px]">
      <SectionHeading>Toolkit</SectionHeading>

      <div className="grid overflow-hidden rounded-2xl border border-hairline bg-panel shadow-panel sm:grid-cols-2">
        {site.toolkit.map((group) => (
          <div
            key={group.label}
            className="flex flex-col gap-3 border-b border-rule p-5 last:border-b-0 sm:p-6 sm:odd:border-r sm:[&:nth-last-child(-n+2)]:border-b-0"
          >
            <h3 className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-faint">
              {group.label}
            </h3>
            <ul className="flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-edge px-2.5 py-[3px] font-mono text-[11px] tracking-[0.02em] text-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

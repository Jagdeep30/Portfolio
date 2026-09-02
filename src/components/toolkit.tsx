import { site } from "@/content/site";
import { SectionHeading } from "./section-heading";

export function Toolkit() {
  return (
    <section className="flex flex-col gap-[18px] pt-[76px] sm:pt-[92px]">
      <SectionHeading>Toolkit</SectionHeading>

      <div className="flex flex-col">
        {site.toolkit.map((group) => (
          <div
            key={group.label}
            className="grid grid-cols-1 items-baseline gap-x-5 gap-y-1 border-b border-rule py-[15px] sm:grid-cols-[150px_1fr] sm:py-[17px]"
          >
            <h3 className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-faint">
              {group.label}
            </h3>
            <p className="text-[16.5px] leading-[1.7] sm:text-[17px]">{group.items.join(", ")}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

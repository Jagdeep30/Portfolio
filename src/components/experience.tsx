import { site } from "@/content/site";
import { SectionHeading } from "./section-heading";

export function Experience() {
  return (
    <section id="experience" className="flex scroll-mt-24 flex-col gap-[18px] pt-[76px] sm:pt-[92px]">
      <SectionHeading>Experience</SectionHeading>

      <div className="flex flex-col">
        {site.work.map((entry) => (
          <div
            key={entry.title}
            className="grid grid-cols-1 items-baseline gap-x-5 gap-y-[5px] border-b border-rule py-5 sm:grid-cols-[106px_1fr]"
          >
            <span className="font-mono text-[11.5px] text-faint">{entry.period}</span>
            <h3 className="text-[19px] sm:text-[20px]">
              {entry.title}
              {entry.org ? (
                <>
                  <span className="text-faint"> · </span>
                  {entry.org}
                </>
              ) : null}
            </h3>
            <span className="hidden sm:block" aria-hidden="true" />
            <p className="text-[16px] leading-[1.72] text-muted sm:text-[16.5px]">{entry.note}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

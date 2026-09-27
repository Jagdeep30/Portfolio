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
            {entry.systems ? (
              <>
                <span className="hidden sm:block" aria-hidden="true" />
                <ul className="mt-2 flex flex-wrap gap-1.5" aria-label={`Built at ${entry.org}`}>
                  {entry.systems.map((id) => {
                    const system = site.systems.find((s) => s.id === id);
                    if (!system) return null;
                    return (
                      <li key={id}>
                        <a
                          href={`#${id}`}
                          className="group inline-flex items-center gap-1.5 rounded-full border border-edge px-2.5 py-[3px] font-mono text-[10.5px] tracking-[0.04em] text-muted transition-colors hover:border-accent/60 hover:text-accent"
                        >
                          {system.short}
                          <span
                            className="transition-transform group-hover:translate-y-0.5"
                            aria-hidden="true"
                          >
                            ↓
                          </span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}

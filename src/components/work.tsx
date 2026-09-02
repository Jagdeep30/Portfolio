import { site } from "@/content/site";
import { SectionHeading } from "./section-heading";

export function Work() {
  return (
    <section id="work" className="flex scroll-mt-24 flex-col gap-[18px] pt-[76px] sm:pt-[92px]">
      <SectionHeading>Selected work</SectionHeading>

      <div className="flex flex-col gap-2.5">
        {site.systems.map((system) => (
          <article
            key={system.name}
            className="rounded-xl border border-hairline bg-panel p-5 shadow-panel sm:p-6"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-5 gap-y-1">
              <h3 className="text-[19px] sm:text-[20px]">
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
              <span className="font-mono text-[11px] tracking-[0.04em] whitespace-nowrap text-faint sm:text-[11.5px]">
                {system.context}
              </span>
            </div>

            {/* The one line to read if you read nothing else. */}
            <p className="mt-[7px] text-[16.5px] leading-[1.6]">{system.summary}</p>

            <ul className="mt-3 flex flex-col gap-[7px]">
              {system.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex gap-2.5 text-[15.5px] leading-[1.62] text-muted sm:text-[16px]"
                >
                  <span
                    className="mt-[9px] size-[3px] shrink-0 rounded-full bg-faint"
                    aria-hidden="true"
                  />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            <p className="mt-4 font-mono text-[11px] tracking-[0.06em] text-faint">
              {system.tags.join(" · ")}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

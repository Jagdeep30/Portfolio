import { site } from "@/content/site";
import { CopyEmail } from "./copy-email";

const linkClass =
  "border-b border-underline transition-colors hover:border-accent hover:text-accent";

export function Contact() {
  return (
    <section
      id="contact"
      className="mt-[76px] flex scroll-mt-24 flex-col gap-4 rounded-2xl border border-hairline bg-panel p-7 shadow-panel sm:mt-[92px] sm:p-9"
    >
      <h2 className="text-[25px] tracking-[-0.01em] sm:text-[27px]">{site.contact.heading}</h2>

      <p className="text-[16.5px] leading-[1.72] text-muted sm:text-[17px]">{site.contact.blurb}</p>

      <div className="flex flex-wrap items-center gap-x-3 gap-y-2 pt-1">
        <a href={`mailto:${site.email}`} className={`${linkClass} text-[18px] sm:text-[20px]`}>
          {site.email}
        </a>
        <CopyEmail email={site.email} />
      </div>

      <div className="flex flex-wrap gap-x-[22px] gap-y-3 text-[16.5px] sm:text-[17px]">
        <a href={site.github} target="_blank" rel="noreferrer" className={linkClass}>
          GitHub ↗
        </a>
        <a href={site.linkedin} target="_blank" rel="noreferrer" className={linkClass}>
          LinkedIn ↗
        </a>
        <a href={site.resume} target="_blank" rel="noreferrer" className={linkClass}>
          Résumé ↗
        </a>
      </div>
    </section>
  );
}

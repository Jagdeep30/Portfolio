import { site } from "@/content/site";

export function Hero() {
  return (
    <section id="top" className="flex scroll-mt-24 flex-col gap-6 pt-20 sm:gap-7 sm:pt-[130px]">
      <p className="flex items-center gap-[9px] self-start rounded-full border border-edge px-[13px] py-1.5 font-mono text-[11.5px] tracking-[0.04em] text-muted">
        <span className="size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
        {site.status}
      </p>

      <h1 className="text-pretty text-[27px] leading-[1.42] tracking-[-0.018em] sm:text-[34px] sm:leading-[1.44]">
        {site.intro.lead}
        <em className="text-accent">{site.intro.accent}</em>
        {site.intro.tail}
      </h1>

      <p className="text-pretty text-[17px] leading-[1.76] text-muted sm:text-[18.5px] sm:leading-[1.78]">
        {site.intro.body}
      </p>
    </section>
  );
}

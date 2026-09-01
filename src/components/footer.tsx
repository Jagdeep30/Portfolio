import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 pt-11 font-mono text-[11px] text-ghost">
      <span>© {new Date().getFullYear()} {site.name.toUpperCase()}</span>
      <span>
        {site.location} · {site.timezone}
      </span>
    </footer>
  );
}

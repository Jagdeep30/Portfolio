import { site } from "@/content/site";
import { LocalTime } from "./local-time";
import { TerminalButton } from "./terminal";

export function Footer() {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 pt-11 font-mono text-[11px] text-ghost">
      <span>© {new Date().getFullYear()} {site.name.toUpperCase()}</span>
      <TerminalButton />
      <LocalTime />
    </footer>
  );
}

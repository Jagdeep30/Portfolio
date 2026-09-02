export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-[18px]">
      <h2 className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-faint">{children}</h2>
      <span className="h-px flex-grow bg-hairline" aria-hidden="true" />
    </div>
  );
}

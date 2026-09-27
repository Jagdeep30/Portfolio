import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Not found" };

/** Any unknown path. Plays it as a failed request, then points home. */
export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-svh w-full max-w-[660px] flex-col justify-center gap-6 px-6 py-24">
      <div className="rounded-2xl border border-hairline bg-panel p-6 font-mono text-[12.5px] leading-[1.8] shadow-panel sm:p-7">
        <p className="text-muted">
          <span className="text-accent">~ ❯</span> curl -I this-page
        </p>
        <p className="text-warn">HTTP/1.1 404 Not Found</p>
        <p className="text-faint">x-served-by: a backend engineer who checked twice</p>
        <p className="text-faint">x-hint: it was probably DNS</p>
      </div>

      <h1 className="text-[25px] tracking-[-0.025em] sm:text-[31px]">
        This route returned <em className="font-serif font-light text-accent">null</em>.
      </h1>
      <p className="text-[16px] leading-[1.75] text-muted">
        The page you asked for doesn’t exist, or it moved. Everything that does is on the home page.
      </p>

      <Link
        href="/"
        className="self-start rounded-full bg-fg px-4 py-2 font-mono text-[12px] tracking-[0.04em] text-bg transition-opacity hover:opacity-85"
      >
        ← Back home
      </Link>
    </main>
  );
}

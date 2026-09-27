"use client";

import { useEffect, useState } from "react";

/** Copies the address for people whose mail client isn't the one `mailto:` opens. */
export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(false), 1800);
    return () => window.clearTimeout(timer);
  }, [copied]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      /* Clipboard blocked (insecure context, permissions) — the mailto link still works. */
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="rounded-full border border-edge px-3 py-1 font-mono text-[11px] tracking-[0.04em] text-muted transition-colors hover:border-faint hover:text-fg"
    >
      <span aria-live="polite">{copied ? "Copied ✓" : "Copy"}</span>
    </button>
  );
}

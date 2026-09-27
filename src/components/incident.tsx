"use client";

import { useEffect, useState } from "react";

const KONAMI = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];

type Stage = "idle" | "paged" | "resolved";

/**
 * The Konami code pages you. The site's accent goes to alarm orange while the
 * "incident" is open, then it resolves itself — root cause, as ever, DNS.
 */
export function Incident() {
  const [stage, setStage] = useState<Stage>("idle");

  useEffect(() => {
    let progress = 0;

    function onKey(event: KeyboardEvent) {
      const target = event.target as HTMLElement | null;
      if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA")) return;

      const key = event.key.length === 1 ? event.key.toLowerCase() : event.key;
      progress = key === KONAMI[progress] ? progress + 1 : key === KONAMI[0] ? 1 : 0;
      if (progress === KONAMI.length) {
        progress = 0;
        setStage("paged");
      }
    }

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (stage === "paged") {
      root.setAttribute("data-incident", "");
      const timer = window.setTimeout(() => setStage("resolved"), 2600);
      return () => window.clearTimeout(timer);
    }
    root.removeAttribute("data-incident");
    if (stage === "resolved") {
      const timer = window.setTimeout(() => setStage("idle"), 3200);
      return () => window.clearTimeout(timer);
    }
  }, [stage]);

  if (stage === "idle") return null;

  const paged = stage === "paged";
  return (
    <div
      role="status"
      className="fixed top-24 left-1/2 z-[70] w-[min(380px,calc(100vw-24px))] -translate-x-1/2 rounded-xl border border-edge bg-panel px-4 py-3 font-mono text-[12px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.45)]"
    >
      <div className="flex items-center gap-2.5">
        <span className={`size-2 shrink-0 rounded-full ${paged ? "animate-pulse bg-warn" : "bg-accent"}`} />
        <span className={paged ? "text-warn" : "text-accent"}>{paged ? "PAGED · 03:02 AM" : "RESOLVED · 03:04 AM"}</span>
      </div>
      <p className="mt-1.5 text-muted">
        {paged
          ? "prod is down. p99 latency ∞. on-call: you."
          : "Mitigated in 2m. Root cause: it was DNS. Postmortem: blameless."}
      </p>
    </div>
  );
}

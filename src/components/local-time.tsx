"use client";

import { useEffect, useState } from "react";
import { site } from "@/content/site";

function now() {
  return new Date().toLocaleTimeString("en-GB", {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
  });
}

/** Hyderabad's clock, live. Falls back to the UTC offset until it hydrates. */
export function LocalTime() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    setTime(now());
    const timer = window.setInterval(() => setTime(now()), 15_000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <span>
      {site.location} · {time ? <time>{time} local</time> : site.timezone}
    </span>
  );
}

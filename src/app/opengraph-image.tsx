import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Fetches a TTF of a Google font for the image renderer, which can't read woff2.
 * Without a browser user agent Google serves TTF. Returns null offline, and the
 * image falls back to the renderer's built-in face rather than failing the build.
 */
async function googleFont(family: string, weight: number): Promise<ArrayBuffer | null> {
  try {
    const css = await (
      await fetch(`https://fonts.googleapis.com/css2?family=${family.replace(/ /g, "+")}:wght@${weight}`)
    ).text();
    const url = css.match(/src: url\((.+?)\) format\('(?:truetype|opentype)'\)/)?.[1];
    return url ? await (await fetch(url)).arrayBuffer() : null;
  } catch {
    return null;
  }
}

/** The card shown when the site is shared. Rendered once at build time, in the dark theme. */
export default async function OpengraphImage() {
  const [sans, mono] = await Promise.all([googleFont("IBM Plex Sans", 400), googleFont("IBM Plex Mono", 400)]);
  const fonts = [
    ...(sans ? [{ name: "Plex Sans", data: sans, weight: 400 as const }] : []),
    ...(mono ? [{ name: "Plex Mono", data: mono, weight: 400 as const }] : []),
  ];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px 88px",
          background: "#0a0a0b",
          color: "#ededef",
          fontFamily: "Plex Sans",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            alignSelf: "flex-start",
            padding: "10px 20px",
            border: "1px solid #212126",
            borderRadius: 999,
            background: "#101012",
            color: "#8a8a93",
            fontSize: 22,
            fontFamily: "Plex Mono",
          }}
        >
          <div style={{ width: 10, height: 10, borderRadius: 999, background: "#7dd3a7" }} />
          {site.status}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 84, letterSpacing: "-0.03em" }}>{site.name}</div>
          <div style={{ display: "flex", fontSize: 38, color: "#8a8a93" }}>
            {site.role} ·&nbsp;<span style={{ color: "#7dd3a7" }}>Rust, Python, infrastructure</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: "#55555e",
            fontSize: 22,
            fontFamily: "Plex Mono",
          }}
        >
          <span>{site.github.replace("https://", "")}</span>
          <span>
            {site.location} · {site.timezone}
          </span>
        </div>
      </div>
    ),
    { ...size, fonts },
  );
}

import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** The card shown when the site is shared. Rendered once at build time, in the dark theme. */
export default function OpengraphImage() {
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

        <div style={{ display: "flex", justifyContent: "space-between", color: "#55555e", fontSize: 22 }}>
          <span>{site.github.replace("https://", "")}</span>
          <span>
            {site.location} · {site.timezone}
          </span>
        </div>
      </div>
    ),
    size,
  );
}

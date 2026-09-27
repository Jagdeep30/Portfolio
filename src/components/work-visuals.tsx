import type { System } from "@/content/site";

/**
 * Small, fixed-width diagrams of each system. They are drawn at a set size and
 * clipped by their card, so opening a card reveals them rather than rescaling them.
 */
export function Visual({ kind }: { kind: NonNullable<System["visual"]> }) {
  switch (kind) {
    case "pipeline":
      return <Pipeline />;
    case "documents":
      return <Documents />;
    case "governance":
      return <Governance />;
    case "services":
      return <Services />;
    case "notifications":
      return <Notifications />;
    case "transcode":
      return <Transcode />;
  }
}

const box = "fill-panel stroke-edge";
const label = "fill-muted text-[9px]";
const line = "fill-none stroke-edge";

/** LogTrim: five sources fan into the pipeline, one trimmed stream leaves for Splunk. */
function Pipeline() {
  return (
    <svg viewBox="0 0 268 180" className="w-[260px] shrink-0 font-mono">
      {[0, 1, 2, 3, 4].map((r) => {
        const y = 12 + r * 34;
        return (
          <g key={r}>
            <path d={`M58 ${y + 10} C 78 ${y + 10}, 78 90, 96 90`} className={line} />
            <rect x="0.5" y={y} width="58" height="20" rx="5" className={box} />
            <text x="29.5" y={y + 13.5} textAnchor="middle" className={label}>
              app-0{r + 1}
            </text>
          </g>
        );
      })}

      {[0, 1, 2, 3, 4].map((r) => {
        const y = 12 + r * 34;
        return (
          <Packet key={r} path={`M58 ${y + 10} C 78 ${y + 10}, 78 90, 96 90`} dur={1.6} begin={r * 0.37} />
        );
      })}
      <Packet path="M200 90 H 214" dur={0.9} begin={0.4} gap={1.1} />

      <rect x="96" y="62" width="104" height="56" rx="9" className="fill-panel stroke-accent" />
      <text x="148" y="87" textAnchor="middle" className="fill-fg text-[11px]">
        logtrim
      </text>
      <text x="148" y="103" textAnchor="middle" className="fill-faint text-[8px]">
        dedupe · aggregate
      </text>

      <Arrow x1={200} x2={214} y={90} accent />
      <rect x="214" y="79" width="53" height="22" rx="5" className={box} />
      <text x="240.5" y="93.5" textAnchor="middle" className={label}>
        splunk
      </text>
    </svg>
  );
}

/** UWS: the same field read from two documents, and the policy engine catching the gap. */
function Documents() {
  const doc = (name: string, width: string) => (
    <div className="flex flex-col gap-2 rounded-md border border-edge bg-panel p-3">
      <span className="text-faint">{name}</span>
      <span className="h-1 w-[80%] rounded-full bg-edge" />
      <span className="h-1 w-[60%] rounded-full bg-edge" />
      <span className="flex items-center gap-2">
        <span className="text-muted">salary</span>
        <span className={`h-1 rounded-full bg-accent/70 ${width}`} />
      </span>
      <span className="h-1 w-[70%] rounded-full bg-edge" />
      <span className="h-1 w-[45%] rounded-full bg-edge" />
    </div>
  );

  return (
    <div className="flex w-[260px] shrink-0 flex-col gap-3 font-mono text-[9.5px]">
      <div className="relative grid grid-cols-2 gap-8">
        {doc("payslip.pdf", "w-10")}
        {doc("statement.pdf", "w-7")}
        <span className="absolute top-[58%] left-1/2 flex size-6 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-accent bg-bg text-[11px] text-accent">
          ≠
        </span>
      </div>
      <span className="flex items-center gap-2 self-center rounded-full border border-edge bg-panel px-2.5 py-1 text-muted">
        <span className="size-1.5 rounded-full bg-accent" />
        cross-document check → flagged
      </span>
    </div>
  );
}

/** Core V1: policies govern a use case, which groups the models and datasets under it. */
function Governance() {
  return (
    <svg viewBox="0 0 268 180" className="w-[260px] shrink-0 font-mono">
      <path d="M69 32 C 69 52, 134 48, 134 70" className={line} />
      <path d="M199 32 C 199 52, 134 48, 134 70" className={line} />
      <path d="M134 102 C 134 124, 44 118, 44 148" className={line} />
      <path d="M134 102 V 148" className={line} />
      <path d="M134 102 C 134 124, 224 118, 224 148" className={line} />

      <rect x="39" y="10" width="60" height="22" rx="5" className={box} />
      <text x="69" y="24.5" textAnchor="middle" className={label}>
        nist
      </text>
      <rect x="169" y="10" width="60" height="22" rx="5" className={box} />
      <text x="199" y="24.5" textAnchor="middle" className={label}>
        iso
      </text>

      <rect x="84" y="70" width="100" height="32" rx="8" className="fill-panel stroke-accent" />
      <text x="134" y="89.5" textAnchor="middle" className="fill-fg text-[10px]">
        use case
      </text>

      {[
        { x: 44, name: "model" },
        { x: 134, name: "model" },
        { x: 224, name: "dataset" },
      ].map(({ x, name }) => (
        <g key={x}>
          <rect x={x - 38} y="148" width="76" height="22" rx="5" className={box} />
          <text x={x - 6} y="162.5" textAnchor="middle" className={label}>
            {name}
          </text>
          <text x={x + 24} y="162.5" textAnchor="middle" className="fill-accent text-[9px]">
            ✓
          </text>
        </g>
      ))}
    </svg>
  );
}

/** Infrastructure: a status board of what runs on the bare-metal. */
function Services() {
  const services = ["GlitchTip", "Uptime Kuma", "Outline", "Docmost", "Postiz", "Papra", "Unleash", "Authentik"];
  return (
    <div className="w-[260px] shrink-0 rounded-lg border border-edge bg-panel font-mono text-[10.5px]">
      <div className="flex items-center justify-between border-b border-edge px-3 py-2 text-faint">
        <span>proxmox / coolify</span>
        <span className="flex gap-1">
          <span className="size-1.5 rounded-full bg-edge" />
          <span className="size-1.5 rounded-full bg-edge" />
          <span className="size-1.5 rounded-full bg-edge" />
        </span>
      </div>
      <ul className="grid grid-cols-2 gap-x-3 gap-y-2 p-3 text-muted">
        {services.map((name) => (
          <li key={name} className="flex items-center gap-2">
            <span className="size-1.5 shrink-0 rounded-full bg-accent/80" />
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Compensation: the notification service's path from event to inbox. */
function Notifications() {
  return (
    <svg viewBox="0 0 268 180" className="w-[260px] shrink-0 font-mono">
      {[
        { x: 0, name: "sns" },
        { x: 102, name: "sqs" },
      ].map(({ x, name }) => (
        <g key={name}>
          <rect x={x + 0.5} y="40" width="64" height="24" rx="5" className={box} />
          <text x={x + 32.5} y="55.5" textAnchor="middle" className={label}>
            {name}
          </text>
        </g>
      ))}
      <Arrow x1={65} x2={102} y={52} />
      <Arrow x1={167} x2={203} y={52} />

      <rect x="203" y="40" width="64" height="24" rx="5" className="fill-panel stroke-accent" />
      <text x="235" y="55.5" textAnchor="middle" className="fill-fg text-[9px]">
        lambda
      </text>

      <path d="M235 64 V 112" className="stroke-edge" />
      <path d="M231 108 L 235 112 L 239 108" className={line} />
      <rect x="203" y="112" width="64" height="24" rx="5" className={box} />
      <text x="235" y="127.5" textAnchor="middle" className={label}>
        ses
      </text>

      <path d="M203 124 H 150" className="stroke-edge" />
      <path d="M154 120 L 150 124 L 154 128" className={line} />
      {[0, 1, 2].map((i) => {
        const x = 14 + i * 44;
        return (
          <g key={i} className={i === 0 ? "stroke-accent" : "stroke-edge"}>
            <rect x={x} y="112" width="34" height="24" rx="3" className="fill-panel" />
            <path d={`M${x} 114 L ${x + 17} 126 L ${x + 34} 114`} className="fill-none" />
          </g>
        );
      })}
      <text x="72" y="154" textAnchor="middle" className="fill-faint text-[8px]">
        inbox
      </text>
    </svg>
  );
}

/** Video: one upload fans out to renditions, which come back together as an HLS playlist. */
function Transcode() {
  const renditions = ["1080p", "720p", "480p"];
  return (
    <svg viewBox="0 0 268 180" className="w-[260px] shrink-0 font-mono">
      <text x="132" y="14" textAnchor="middle" className="fill-faint text-[8px]">
        fargate · ffmpeg
      </text>
      {renditions.map((name, i) => {
        const y = 24 + i * 50;
        return (
          <g key={name}>
            <path d={`M66 90 C 84 90, 84 ${y + 11}, 100 ${y + 11}`} className={line} />
            <path d={`M164 ${y + 11} C 180 ${y + 11}, 180 90, 196 90`} className={line} />
            <rect x="100" y={y} width="64" height="22" rx="5" className={box} />
            <text x="132" y={y + 14.5} textAnchor="middle" className={label}>
              {name}
            </text>
          </g>
        );
      })}

      {renditions.map((name, i) => {
        const y = 24 + i * 50;
        return (
          <Packet
            key={name}
            path={`M66 90 C 84 90, 84 ${y + 11}, 100 ${y + 11} H 164 C 180 ${y + 11}, 180 90, 196 90`}
            dur={2.4}
            begin={i * 0.2}
            gap={0.8}
          />
        );
      })}

      <rect x="0.5" y="78" width="66" height="24" rx="5" className={box} />
      <text x="33.5" y="93.5" textAnchor="middle" className={label}>
        upload.mp4
      </text>

      <rect x="196" y="76" width="71" height="28" rx="7" className="fill-panel stroke-accent" />
      <text x="231.5" y="93.5" textAnchor="middle" className="fill-fg text-[9px]">
        master.m3u8
      </text>
    </svg>
  );
}

/**
 * A dot travelling a path on a loop: `dur` seconds moving, then `gap` seconds hidden.
 * Hidden entirely under prefers-reduced-motion (see globals.css).
 */
function Packet({ path, dur, begin, gap = 0 }: { path: string; dur: number; begin: number; gap?: number }) {
  const total = dur + gap;
  const end = dur / total;
  return (
    <circle r="2.2" className="packet fill-accent" opacity="0">
      <animateMotion
        path={path}
        dur={`${total}s`}
        begin={`${begin}s`}
        repeatCount="indefinite"
        keyPoints="0;1;1"
        keyTimes={`0;${end.toFixed(3)};1`}
        calcMode="linear"
      />
      <animate
        attributeName="opacity"
        values="0;1;1;0;0"
        keyTimes={`0;${(end * 0.1).toFixed(3)};${(end * 0.85).toFixed(3)};${end.toFixed(3)};1`}
        dur={`${total}s`}
        begin={`${begin}s`}
        repeatCount="indefinite"
      />
    </circle>
  );
}

function Arrow({ x1, x2, y, accent }: { x1: number; x2: number; y: number; accent?: boolean }) {
  const stroke = accent ? "stroke-accent" : "stroke-edge";
  return (
    <>
      <path d={`M${x1} ${y} H ${x2}`} className={stroke} />
      <path d={`M${x2 - 4} ${y - 4} L ${x2} ${y} L ${x2 - 4} ${y + 4}`} className={`fill-none ${stroke}`} />
    </>
  );
}

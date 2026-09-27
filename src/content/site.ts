export type WorkEntry = {
  period: string;
  title: string;
  org?: string;
  note: string;
  /** Ids of the systems built in this role; each renders as a link down to its card. */
  systems?: string[];
};

export type System = {
  /** Anchor for the card, linked to from Experience. */
  id: string;
  name: string;
  /** Name as it appears in Experience's links. */
  short: string;
  context: string;
  /** One line: what it is. Read on its own if nothing else is. */
  summary: string;
  /** Two or three concrete outcomes, each scannable without the others. */
  highlights: string[];
  tags: string[];
  href?: string;
  /** The small diagram shown beside the text when this card is the open one in its row. */
  visual: "pipeline" | "documents" | "governance" | "services" | "notifications" | "transcode";
};

export type ToolkitGroup = {
  label: string;
  items: string[];
};

export const site = {
  name: "Jagdeep Singh",
  role: "Backend Engineer",
  location: "Hyderabad, India",
  timezone: "UTC+5:30",
  status: "Building backend and data platforms at Superalign",

  email: "jagdeepsingh1630@gmail.com",
  github: "https://github.com/Jagdeep30",
  linkedin: "https://www.linkedin.com/in/jagdeepsingh1693",
  resume: "/jagdeep-singh-resume.pdf",

  intro: {
    lead: "I’m Jagdeep — a backend engineer. I build data pipelines, AI platforms and ",
    accent: "the infrastructure they run on",
    tail: ".",
    body:
      "Since 2024 I’ve shipped a Rust log pipeline moving 20,000+ events a second, an AI backend that reads identity and financial documents, a compliance-governance platform, and the bare-metal running a dozen internal services — at Superalign now, at Sequoia Consulting Group before that. Rust and Python mostly, with Go and Node where they fit better.",
  },

  work: [
    {
      period: "2025 — Present",
      title: "Backend Developer",
      org: "Superalign",
      note: "Log infrastructure, document intelligence and AI governance — plus the bare-metal that runs them. Hyderabad.",
      systems: ["logtrim", "uws", "core-v1", "infrastructure"],
    },
    {
      period: "2024 — 25",
      title: "Backend Engineering Intern",
      org: "Sequoia Consulting Group",
      note: "Compensation tooling and notification infrastructure for 20+ client teams. Bangalore.",
      systems: ["compensation"],
    },
    {
      period: "2021 — 25",
      title: "B.E. Computer Science Engineering",
      org: "Chitkara University",
      note: "Graduated with a CGPA of 9.72.",
    },
  ] satisfies WorkEntry[],

  systems: [
    {
      id: "logtrim",
      name: "LogTrim",
      short: "LogTrim",
      visual: "pipeline",
      context: "SUPERALIGN · 2025",
      summary: "An end-to-end log processing pipeline written in Rust.",
      highlights: [
        "Handles 20,000+ events per second across five integrated applications.",
        "Cut Splunk ingestion costs by roughly 40% by deduplicating and aggregating in real time, before anything is forwarded.",
        "Config reloads with zero downtime, using PostgreSQL LISTEN/NOTIFY and thread-safe memory swapping.",
      ],
      tags: ["Rust", "Tokio", "Axum", "Fluvio", "Kubernetes"],
    },
    {
      id: "uws",
      name: "UWS — Document Intelligence",
      short: "UWS",
      visual: "documents",
      context: "SUPERALIGN · CLIENT PROJECT",
      summary: "An AI backend that pulls structured data out of identity and financial documents.",
      highlights: [
        "Extracts fields from Aadhaar, PAN, US IDs, payslips and bank statements.",
        "A policy engine checks the results against compliance rules and flags cross-document mismatches — a salary that disagrees between a payslip and a bank statement, for instance.",
      ],
      tags: ["Python", "FastAPI", "PostgreSQL", "GCS", "Gemini API"],
    },
    {
      id: "core-v1",
      name: "Core V1 — AI Governance",
      short: "Core V1",
      visual: "governance",
      context: "SUPERALIGN · 2025",
      summary: "A platform for enforcing compliance policy across AI models and datasets.",
      highlights: [
        "Teams define NIST and ISO policies, then group models and datasets into governed use cases.",
        "Each use case is evaluated through policy questionnaires and against uploaded compliance documents.",
      ],
      tags: ["Python", "FastAPI", "SurrealDB"],
    },
    {
      id: "infrastructure",
      name: "Infrastructure & Internal Tooling",
      short: "Infrastructure",
      visual: "services",
      context: "SUPERALIGN · ONGOING",
      summary: "The bare-metal that runs the company’s internal services, and everything on it.",
      highlights: [
        "10+ services deployed and maintained — GlitchTip, Uptime Kuma, Outline, Docmost, Postiz, Papra, Unleash.",
        "Reachable securely from outside through Cloudflare Tunnels, with monitoring and issue resolution.",
      ],
      tags: ["Proxmox", "Coolify", "Cloudflare", "Authentik", "Docker"],
    },
    {
      id: "compensation",
      name: "Compensation Tooling",
      short: "Compensation tooling",
      visual: "notifications",
      context: "SEQUOIA · 2024 — 25",
      summary: "Merit-cycle tooling and notification infrastructure for 20+ client teams.",
      highlights: [
        "A merit-plan cloning feature cut cycle setup from hours to minutes.",
        "A notification service on SNS, SQS, SES and Lambda delivers 1,000+ emails a month at 99% reliability.",
      ],
      tags: ["Python", "Go", "MongoDB", "Redis", "AWS"],
    },
    {
      id: "video-streaming",
      name: "Adaptive Video Streaming",
      short: "Video streaming",
      visual: "transcode",
      context: "PERSONAL · 2024",
      href: "https://github.com/Jagdeep30/adaptive-video-streaming",
      summary: "A pipeline that converts uploaded video into HLS for adaptive bitrate streaming.",
      highlights: [
        "Transcode jobs fan out to ECS Fargate through SQS and EventBridge.",
        "Nothing is kept warm between uploads — the cost is only what is actually transcoded.",
      ],
      tags: ["Node.js", "AWS ECS", "FFmpeg", "MongoDB"],
    },
  ] satisfies System[],

  toolkit: [
    { label: "Languages", items: ["Rust", "Python", "Go", "JavaScript", "SQL"] },
    {
      label: "Frameworks & data",
      items: ["FastAPI", "Axum", "Tokio", "Celery", "PostgreSQL", "MongoDB", "Redis", "SurrealDB"],
    },
    {
      label: "Infrastructure",
      items: ["Kubernetes", "Docker", "AWS", "GCP", "Proxmox", "Coolify", "Cloudflare"],
    },
    {
      label: "Tooling",
      items: ["Fluvio", "Fluent Bit", "OPA Gatekeeper", "Authentik SSO", "Git", "Linux"],
    },
  ] satisfies ToolkitGroup[],

  contact: {
    heading: "Get in touch",
    blurb:
      "Backend and infrastructure work, Rust or Python, or an interesting scale problem — those are the emails I answer fastest.",
  },
} as const;

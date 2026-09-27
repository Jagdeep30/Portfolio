"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { site } from "@/content/site";

type Line = { kind: "in" | "out" | "err"; text: string };

const OPEN_EVENT = "terminal:open";
const PROMPT = "~ ❯";

const COMMANDS: Record<string, string> = {
  help: "what you're reading",
  whoami: "the short version",
  ls: "list projects",
  "open <project>": "jump to a project",
  experience: "where I've worked",
  stack: "what I work with",
  contact: "how to reach me",
  resume: "open the résumé",
  github: "open GitHub",
  linkedin: "open LinkedIn",
  theme: "toggle light / dark",
  date: "my local time",
  clear: "clear the screen",
  exit: "close the terminal",
};

let greeted = false;

/** Anything on the page can open the terminal without importing its state. */
export function openTerminal() {
  window.dispatchEvent(new Event(OPEN_EVENT));
}

export function TerminalButton() {
  return (
    <button
      type="button"
      onClick={openTerminal}
      className="rounded-full border border-edge px-2.5 py-[3px] transition-colors hover:border-faint hover:text-muted"
    >
      <span className="text-accent">›_</span> terminal <kbd className="hidden sm:inline">(`)</kbd>
    </button>
  );
}

/**
 * A small terminal, opened with the backtick key or the footer button. Everything it
 * says is already on the page — it's another way in, not hidden content.
 */
export function Terminal() {
  const [open, setOpen] = useState(false);
  const [lines, setLines] = useState<Line[]>([
    { kind: "out", text: `${site.name} — ${site.role}. Type 'help' to look around.` },
  ]);
  const [input, setInput] = useState("");
  const history = useRef<string[]>([]);
  const cursor = useRef(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const returnFocus = useRef<HTMLElement | null>(null);

  const show = useCallback(() => {
    returnFocus.current = document.activeElement as HTMLElement | null;
    setOpen(true);
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    returnFocus.current?.focus?.();
  }, []);

  useEffect(() => {
    if (!greeted) {
      greeted = true;
      console.log(
        "%c›_ %cHi — you opened the console, so you're my kind of person.\n%cPress ` on the page for a terminal, or write to " +
          site.email,
        "color:#7dd3a7;font:600 14px monospace",
        "font:14px monospace",
        "color:#8a8a93;font:12px monospace",
      );
    }

    function onKey(event: KeyboardEvent) {
      const target = event.target as HTMLElement | null;
      const typing =
        target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable);
      if (event.key === "`" && !typing && !event.metaKey && !event.ctrlKey) {
        event.preventDefault();
        show();
      }
    }

    window.addEventListener("keydown", onKey);
    window.addEventListener(OPEN_EVENT, show);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener(OPEN_EVENT, show);
    };
  }, [show]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight });
  }, [lines, open]);

  function run(raw: string) {
    const command = raw.trim();
    const out: Line[] = [{ kind: "in", text: command }];
    const say = (text: string, kind: Line["kind"] = "out") => out.push({ kind, text });
    const [name, ...args] = command.split(/\s+/);
    const arg = args.join(" ");

    switch (name) {
      case "":
        break;
      case "help":
        for (const [cmd, what] of Object.entries(COMMANDS)) say(`${cmd.padEnd(16)} ${what}`);
        break;
      case "whoami":
        say(`${site.name} — ${site.role} in ${site.location}.`);
        say(site.status + ".");
        break;
      case "ls":
        for (const s of site.systems) say(`${s.id.padEnd(16)} ${s.summary}`);
        break;
      case "open":
      case "cd": {
        const system = site.systems.find((s) => s.id === arg || s.short.toLowerCase() === arg.toLowerCase());
        if (!system) {
          say(arg ? `no such project: ${arg} — try 'ls'` : "usage: open <project>", "err");
          break;
        }
        say(`opening ${system.name}…`);
        window.setTimeout(() => {
          close();
          window.location.hash = system.id;
        }, 350);
        break;
      }
      case "experience":
        for (const w of site.work) say(`${w.period.padEnd(16)} ${w.title}${w.org ? ` · ${w.org}` : ""}`);
        break;
      case "stack":
        for (const g of site.toolkit) say(`${g.label.padEnd(20)} ${g.items.join(", ")}`);
        break;
      case "contact":
      case "email":
        say(site.email);
        say("or: sudo hire-me");
        break;
      case "resume":
      case "github":
      case "linkedin": {
        const url = site[name];
        say(`opening ${name}…`);
        window.open(url, "_blank", "noopener");
        break;
      }
      case "theme": {
        const root = document.documentElement;
        const next =
          arg === "light" || arg === "dark" ? arg : root.getAttribute("data-theme") === "dark" ? "light" : "dark";
        root.setAttribute("data-theme", next);
        try {
          localStorage.setItem("theme", next);
        } catch {
          /* The switch still holds for this visit. */
        }
        say(`theme: ${next}`);
        break;
      }
      case "date":
        say(
          new Date().toLocaleString("en-IN", {
            timeZone: "Asia/Kolkata",
            weekday: "short",
            hour: "2-digit",
            minute: "2-digit",
          }) + " in Hyderabad",
        );
        break;
      case "echo":
        say(arg);
        break;
      case "sudo":
        if (arg === "hire-me" || arg === "hire me") {
          say("[sudo] password for recruiter: ********");
          say("access granted. drafting an email…");
          window.setTimeout(() => {
            window.location.href = `mailto:${site.email}?subject=${encodeURIComponent("Let's talk")}`;
          }, 900);
        } else {
          say("visitor is not in the sudoers file. This incident will be reported.", "err");
        }
        break;
      case "rm":
        say("nice try.", "err");
        break;
      case "clear":
        setLines([]);
        setInput("");
        return;
      case "exit":
      case "quit":
      case "q":
        close();
        setInput("");
        return;
      default:
        say(`command not found: ${name} — try 'help'`, "err");
    }

    setLines((prev) => [...prev, ...out]);
    setInput("");
    if (command) history.current.push(command);
    cursor.current = history.current.length;
  }

  function onInputKey(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Escape") {
      close();
    } else if (event.key === "ArrowUp" || event.key === "ArrowDown") {
      event.preventDefault();
      const step = event.key === "ArrowUp" ? -1 : 1;
      cursor.current = Math.max(0, Math.min(history.current.length, cursor.current + step));
      setInput(history.current[cursor.current] ?? "");
    } else if (event.key === "Tab") {
      event.preventDefault();
      const words = [...Object.keys(COMMANDS).map((c) => c.split(" ")[0]), "sudo hire-me"];
      const [first, second] = input.split(/\s+/);
      if (second !== undefined && (first === "open" || first === "cd")) {
        const match = site.systems.find((s) => s.id.startsWith(second));
        if (match) setInput(`${first} ${match.id}`);
      } else {
        const match = words.find((w) => w.startsWith(input));
        if (match) setInput(match + (match === "open" ? " " : ""));
      }
    }
  }

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-label="Terminal"
      className="fixed inset-x-3 bottom-3 z-[60] flex h-[min(380px,70vh)] flex-col overflow-hidden rounded-xl border border-edge bg-panel font-mono text-[12px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.45)] sm:inset-x-auto sm:right-5 sm:bottom-5 sm:w-[560px]"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="flex items-center gap-2 border-b border-edge px-3.5 py-2.5 text-faint">
        <span className="size-2 rounded-full bg-edge" />
        <span className="size-2 rounded-full bg-edge" />
        <span className="size-2 rounded-full bg-accent/70" />
        <span className="ml-2 truncate">visitor@jagdeep: ~</span>
        <button
          type="button"
          onClick={close}
          aria-label="Close terminal"
          className="ml-auto rounded px-1.5 text-[14px] leading-none text-faint transition-colors hover:text-fg"
        >
          ×
        </button>
      </div>

      <div ref={bodyRef} className="flex-1 overflow-y-auto px-3.5 py-3 leading-[1.7]" aria-live="polite">
        {lines.map((line, i) => (
          <div
            key={i}
            className={`break-words whitespace-pre-wrap ${
              line.kind === "err" ? "text-warn" : line.kind === "in" ? "text-fg" : "text-muted"
            }`}
          >
            {line.kind === "in" ? <span className="text-accent">{PROMPT} </span> : null}
            {line.text}
          </div>
        ))}

        <form
          className="flex items-center gap-2"
          onSubmit={(event) => {
            event.preventDefault();
            run(input);
          }}
        >
          <label htmlFor="terminal-input" className="shrink-0 text-accent">
            {PROMPT}
          </label>
          <input
            id="terminal-input"
            ref={inputRef}
            value={input}
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={onInputKey}
            autoComplete="off"
            autoCapitalize="off"
            spellCheck={false}
            className="min-w-0 flex-1 bg-transparent text-fg caret-accent outline-none"
          />
        </form>
      </div>
    </div>
  );
}

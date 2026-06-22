"use client";

import { useEffect, useState } from "react";

const terminalLines = [
  { cmd: "whoami", out: "msr@cybersecurity-defender" },
  {
    cmd: "nmap -sV 192.168.1.0/24",
    out: "Discovered 12 hosts \u2022 3 services flagged",
  },
  {
    cmd: "systemctl status firewall",
    out: "\u25cf active (running) \u2014 all rules enforced",
  },
  {
    cmd: "tail -f /var/log/auth.log",
    out: "Monitoring for suspicious login attempts\u2026",
  },
  {
    cmd: "grep 'ALERT' /var/log/ids.log | wc -l",
    out: "23 intrusion alerts pending review",
  },
];

export default function TerminalAnimation() {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [showOutput, setShowOutput] = useState(false);

  const line = terminalLines[lineIndex];
  const isTyping = charIndex < line.cmd.length;

  useEffect(() => {
    if (isTyping) {
      const t = setTimeout(
        () => setCharIndex((c) => c + 1),
        50 + Math.random() * 35,
      );
      return () => clearTimeout(t);
    }

    if (!showOutput) {
      const t = setTimeout(() => setShowOutput(true), 350);
      return () => clearTimeout(t);
    }

    const t = setTimeout(() => {
      setLineIndex((i) => (i + 1) % terminalLines.length);
      setCharIndex(0);
      setShowOutput(false);
    }, 2400);
    return () => clearTimeout(t);
  }, [charIndex, isTyping, showOutput, lineIndex]);

  return (
    <div className="mt-6 overflow-hidden rounded-xl border border-[var(--card-border)] shadow-2xl shadow-purple-950/20">
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-white/[0.06] bg-[#1a1025] px-4 py-2.5">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-mono text-xs text-white/30">
          root@msr:~
        </span>
      </div>

      {/* Terminal body */}
      <div
        className="bg-[#0d0b1a] p-4 font-mono text-sm leading-relaxed"
        style={{ minHeight: 110 }}
      >
        <div className="text-purple-400">
          {"┌──("}
          <span className="font-bold text-indigo-400">msr㉿security</span>
          {")-["}
          <span className="text-white/70">~</span>
          {"]"}
        </div>
        <div className="flex items-center">
          <span className="text-purple-400">{"└─$ "}</span>
          <span className="text-gray-200">{line.cmd.slice(0, charIndex)}</span>
          <span
            className={`ml-px inline-block h-4 w-1.5 rounded-sm bg-purple-400 ${
              isTyping ? "animate-pulse" : "opacity-0"
            }`}
          />
        </div>
        {showOutput && (
          <p className="mt-1.5 animate-fadeIn text-emerald-400/80">
            {"➜ "}
            {line.out}
          </p>
        )}
      </div>
    </div>
  );
}

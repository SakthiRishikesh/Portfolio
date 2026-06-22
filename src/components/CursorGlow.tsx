"use client";

import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [position, setPosition] = useState({
    x: -500,
    y: -500,
  });

  useEffect(() => {
    const move = (e: MouseEvent) =>
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });

    window.addEventListener("mousemove", move);

    return () =>
      window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed z-0 hidden h-80 w-80 rounded-full blur-3xl md:block"
      style={{
        left: position.x - 160,
        top: position.y - 160,
        background: "var(--glow)",
      }}
    />
  );
}

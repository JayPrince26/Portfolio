"use client";

import { useEffect, useState } from "react";

interface FloatingElement {
  id: number;
  x: number;
  y: number;
  size: number;
  rotation: number;
  speed: number;
  opacity: number;
  type: "circle" | "square" | "triangle";
}

export function FloatingElements() {
  const [elements, setElements] = useState<FloatingElement[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // Initialize floating elements
    const initElements = () => {
      const newElements: FloatingElement[] = [];
      const types: ("circle" | "square" | "triangle")[] = [
        "circle",
        "square",
        "triangle",
      ];

      for (let i = 0; i < 20; i++) {
        newElements.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 80 + 30,
          rotation: Math.random() * 360,
          speed: Math.random() * 0.8 + 0.2,
          opacity: Math.random() * 0.4 + 0.1,
          type: types[Math.floor(Math.random() * types.length)],
        });
      }
      setElements(newElements);
    };

    initElements();

    // Animation loop
    const animate = () => {
      setElements((prev) =>
        prev.map((element) => ({
          ...element,
          rotation: element.rotation + element.speed,
          y: element.y - 0.8,
          opacity: element.opacity + Math.sin(Date.now() * 0.001) * 0.15,
        }))
      );
    };

    const interval = setInterval(animate, 50);

    return () => clearInterval(interval);
  }, [mounted]);

  if (!mounted) {
    return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {elements.map((element) => (
        <div
          key={element.id}
          className="absolute"
          style={{
            left: element.x,
            top: element.y,
            transform: `rotate(${element.rotation}deg)`,
            opacity: Math.max(0, Math.min(1, element.opacity)),
          }}
        >
          {element.type === "circle" && (
            <div
              className="rounded-full bg-gradient-to-br from-sky-200/40 to-sky-400/30"
              style={{
                width: element.size,
                height: element.size,
              }}
            />
          )}
          {element.type === "square" && (
            <div
              className="bg-gradient-to-br from-sky-300/40 to-sky-500/30"
              style={{
                width: element.size,
                height: element.size,
              }}
            />
          )}
          {element.type === "triangle" && (
            <div
              className="text-sky-500/30 font-mono font-bold"
              style={{
                fontSize: `${element.size * 0.6}px`,
                lineHeight: 1,
              }}
            >
              &lt;/&gt;
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

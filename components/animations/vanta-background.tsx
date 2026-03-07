"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function VantaBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const vantaRef = useRef<any>(null);

  useEffect(() => {
    let mounted = true;

    import("vanta/dist/vanta.net.min").then((VANTA) => {
      if (!mounted || !containerRef.current || vantaRef.current) return;
      vantaRef.current = VANTA.default({
        el: containerRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200,
        minWidth: 200,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x6366f1,       // indigo — site primary
        backgroundColor: 0x070c1a,
        points: 9,
        maxDistance: 24,
        spacing: 20,
        showDots: false,
      });
    });

    return () => {
      mounted = false;
      if (vantaRef.current) {
        vantaRef.current.destroy();
        vantaRef.current = null;
      }
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 w-full h-full" />;
}

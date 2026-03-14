"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import WAVES from "vanta/dist/vanta.waves.min";

type VantaEffect = {
  destroy: () => void;
  resize?: () => void;
};

type ThreeWindow = Window & {
  THREE?: typeof THREE;
};

export function HeroBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const effectRef = useRef<VantaEffect | null>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container || effectRef.current) {
      return;
    }

    (window as ThreeWindow).THREE = THREE;

    effectRef.current = WAVES({
      el: container,
      THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200,
      minWidth: 200,
      scale: 1,
      scaleMobile: 1,
      color: 0x3d2200,
      backgroundColor: 0x07090c,
      shininess: 30,
      waveHeight: 18,
      waveSpeed: 0.7,
      zoom: 0.85,
    });

    const handleResize = () => {
      effectRef.current?.resize?.();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      try {
        effectRef.current?.destroy();
      } catch (_) {
        // Vanta removeChild race on unmount
      }
      effectRef.current = null;
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="absolute inset-0 [filter:brightness(0.9)_saturate(1.1)_contrast(1.0)]"
    />
  );
}

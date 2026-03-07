"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import WAVES from "vanta/dist/vanta.waves.min";

type VantaWaveEffect = {
  destroy: () => void;
  resize?: () => void;
};

type ThreeWindow = Window & {
  THREE?: typeof THREE;
};

export function HeroBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const effectRef = useRef<VantaWaveEffect | null>(null);

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
      color: 0x1d4ed8,
      backgroundColor: 0x020617,
      shininess: 28,
      waveHeight: 18,
      waveSpeed: 0.85,
      zoom: 0.82,
    });

    const handleResize = () => {
      effectRef.current?.resize?.();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      effectRef.current?.destroy();
      effectRef.current = null;
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="absolute inset-0 [filter:saturate(0.72)_brightness(0.58)_contrast(1.08)]"
    />
  );
}

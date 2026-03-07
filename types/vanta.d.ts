declare module "vanta/dist/vanta.globe.min" {
  import * as THREE from "three";
  interface VantaOptions { el: HTMLElement; THREE: typeof THREE; [key: string]: unknown; }
  interface VantaEffect { destroy: () => void; }
  export default function GLOBE(options: VantaOptions): VantaEffect;
}

declare module "vanta/dist/vanta.net.min" {
  import * as THREE from "three";
  interface VantaOptions { el: HTMLElement; THREE: typeof THREE; [key: string]: unknown; }
  interface VantaEffect { destroy: () => void; }
  export default function NET(options: VantaOptions): VantaEffect;
}

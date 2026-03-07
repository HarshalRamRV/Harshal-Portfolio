declare module "vanta/dist/vanta.waves.min" {
  import * as THREE from "three";

  interface VantaOptions {
    el: HTMLElement;
    THREE: typeof THREE;
    [key: string]: unknown;
  }

  interface VantaEffect {
    destroy: () => void;
    resize?: () => void;
  }

  export default function WAVES(options: VantaOptions): VantaEffect;
}

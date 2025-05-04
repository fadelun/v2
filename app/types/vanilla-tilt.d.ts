declare module "vanilla-tilt" {
  interface TiltOptions {
    max?: number;
    speed?: number;
    glare?: boolean;
    reverse?: boolean;
    "max-glare"?: number;
  }

  export default class VanillaTilt {
    static init(
      elements: HTMLElement | HTMLElement[],
      settings?: TiltOptions,
    ): void;
    destroy(): void;
  }
}

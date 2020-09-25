import * as THREE from "three";

interface AnimationCallback {
  (time: number, scene?: THREE.Scene, camera?: THREE.Camera): void;
}

export class CanvasRenderer {
  private canvasEl: HTMLCanvasElement;
  private renderer: THREE.Renderer;
  private scene: THREE.Scene;
  private camera: THREE.Camera;
  private animateCallback?: (
    time: number,
    scene: THREE.Scene,
    camera: THREE.Camera
  ) => void;

  constructor(
    scene: THREE.Scene,
    camera: THREE.Camera,
    animateCallback?: (
      time: number,
      scene: THREE.Scene,
      camera: THREE.Camera
    ) => void
  ) {
    this.canvasEl = document.querySelector("#c")! as HTMLCanvasElement;
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvasEl });
    this.scene = scene;
    this.camera = camera;
    this.animateCallback = animateCallback;
  }

  public animate(time: number) {
    time *= 0.001;
    if (this.animateCallback) {
      this.animateCallback(time, this.scene, this.camera);
    }
    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame(this.animate.bind(this));
  }

  public render() {
    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame(this.animate.bind(this));
  }
}

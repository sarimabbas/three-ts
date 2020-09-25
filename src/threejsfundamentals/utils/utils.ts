import * as THREE from "three";

export class CanvasRenderer {
  private canvasEl: HTMLCanvasElement;
  private renderer: THREE.Renderer;

  constructor() {
    this.canvasEl = document.querySelector("#c")! as HTMLCanvasElement;
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvasEl });
  }

  public render(scene: THREE.Scene, camera: THREE.Camera) {
    this.renderer.render(scene, camera);
  }
}

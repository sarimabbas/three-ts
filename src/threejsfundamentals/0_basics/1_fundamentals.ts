import * as THREE from "three";

// hook up to the canvas
const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById("c")! as HTMLCanvasElement,
});

// create camera
const fov = 75;
const aspect = 2; // the canvas default
const near = 0.1;
const far = 5;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 2;

// create scene
const scene = new THREE.Scene();

// create scene geometry
const boxWidth = 1;
const boxHeight = 1;
const boxDepth = 1;
const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

function makeInstance(geometry: THREE.Geometry, color: number, x: number) {
  const material = new THREE.MeshPhongMaterial({ color });
  const cube = new THREE.Mesh(geometry, material);
  cube.position.x = x;
  return cube;
}

const cubes = [
  makeInstance(geometry, 0x44aa88, 0),
  makeInstance(geometry, 0x8844aa, -2),
  makeInstance(geometry, 0xaa8844, 2),
];

cubes.forEach((c) => scene.add(c));

// add light
{
  const color = 0xffffff;
  const intensity = 1;
  const light = new THREE.DirectionalLight(color, intensity);
  light.position.set(-1, 2, 4);
  scene.add(light);
}

// animate things
function render(time: number) {
  time *= 0.001; // convert time to seconds

  cubes.forEach((cube) => {
    cube.rotation.x = time;
    cube.rotation.y = time;
  });

  renderer.render(scene, camera);

  requestAnimationFrame(render);
}
requestAnimationFrame(render);

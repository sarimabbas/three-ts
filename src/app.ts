import { CanvasRenderer } from "./threejsfundamentals/utils/utils";

import { scene, camera } from "./threejsfundamentals/0_basics/1_fundamentals";

const cr = new CanvasRenderer(scene, camera, (time, scene, camera) => {
  scene.children[0].rotation.x = time;
  scene.children[0].rotation.y = time;

  scene.children[1].rotation.x = time;
  scene.children[1].rotation.y = time;

  scene.children[2].rotation.x = time;
  scene.children[2].rotation.y = time;
});

console.log(scene);

cr.render();

console.log("it works");

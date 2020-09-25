import { CanvasRenderer } from "./threejsfundamentals/utils/utils";

import { scene, camera } from "./threejsfundamentals/0_basics/1_fundamentals";

const cr = new CanvasRenderer();

cr.render(scene, camera);

console.log("it works");

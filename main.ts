// g290-family-scene: writes one short family scene to /output/entry.txt.
// The scene is a small domestic moment: a son packing his first lunch,
// saving "the best part" for his dad. Warm, funny, heartfelt, 161 chars.
import { mkdirSync, writeFileSync } from "node:fs";

const SCENE =
  "My son packed his own lunch for the first time: two cookies, one sandwich, and a note that said \u201cDad, don\u2019t worry, I saved you the crust \u2014 that\u2019s the best part.\u201d";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", SCENE, "utf8");

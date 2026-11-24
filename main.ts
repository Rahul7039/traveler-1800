// One Sentence for a Traveler from 1800.
// Writes a single sentence (<=200 chars) explaining the modern internet to
// a time traveler from 1800, using only words and things they would know:
// a library, a post office, a printing press, a parlour.
import { mkdirSync, writeFileSync } from "node:fs";

// The sentence is assembled from its named parts: the institutions the
// traveler already knows, the scene of them gathered in his parlour, and
// the promise of an instant answer.
const INSTITUTIONS = "library, post office, and printing press";
const SCENE = `every ${INSTITUTIONS} on earth stood in your own parlour`;
const ENTRY =
  `It is as if ${SCENE}, answering your questions the moment you asked them.`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

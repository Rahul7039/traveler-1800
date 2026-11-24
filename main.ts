// One Sentence for a Traveler from 1800.
// Writes a single sentence (<=200 chars) explaining the modern internet to
// a time traveler from 1800, using only words and things they would know:
// a library, a post office, a printing press, a parlour.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "It is as if every library, post office, and printing press on earth stood in your own parlour, answering your questions the moment you asked them.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

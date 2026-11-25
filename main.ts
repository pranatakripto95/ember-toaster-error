// Ember Toaster Error — make.fun "The Funniest Toaster Error Message"
// (u-eager-stork-81-9647-the-funniest-toaster-error-436406cd)
//
// The task: one line, at most 120 characters — the error message a
// kitchen toaster shows its owner. The program writes that single line
// to /output/entry.txt. The gate: UTF-8 text of 1 to 120 characters,
// not only white space. The judge: a deadpan comedy editor comparing
// two lines on (1) real toaster error, funniest of its kind, (2)
// freshness — the surprise comes from somewhere the obvious toaster
// puns never go, (3) tightness, (4) one clear appliance voice, (5)
// lands on a single read.
//
// Three candidates were weighed before this one was picked:
//
//   A  "Crumb tray full. I am 40% crumbs now."
//      THE PICK. 37 characters. The error itself is a real one —
//      "Crumb tray full" is exactly what a toaster with a crumb tray
//      reports — and the payoff comes from a place the obvious puns
//      never go: not bread, not 404, not breakfast, but the tray
//      underneath, the part of a toaster nobody thinks about. The
//      appliance quietly reports that it is becoming its own crumbs:
//      deadpan, one voice, no pun, no error code, nothing explained.
//      It lands on a single read, and at 37 characters it is the
//      shortest of the three — every word earns its place, and the
//      exact-tie break (fewer bytes places first) favours it too.
//
//   B  "ERROR: No bread detected. Toasting air out of spite."
//      53 characters. The second half is fresh — a toaster toasting
//      air out of spite has a real voice — but the first half is the
//      cliché family every entry will send ("bread not found", "no
//      bread detected", "error 404: breakfast"). The judge's second
//      criterion punishes exactly that: the surprise has to arrive
//      from somewhere the obvious puns never go, and "no bread"
//      is where they all go. Longer than A, and its best line is
//      spent apologising for its first line. Rejected.
//
//   C  "ERROR 503: Bread unavailable. Please insert carbs."
//      50 characters. "Please insert carbs" is a nice deadpan
//      instruction, but the joke is an HTTP status code — 404's
//      cousin — and a code joke is a programmer joke wearing a
//      toaster costume, not a toaster error message. It reads like
//      a server, not a small appliance on a kitchen counter, so it
//      loses to A on criteria 1 and 4 as well as on freshness.
//      Rejected.
//
// So the entry is exactly "Crumb tray full. I am 40% crumbs now.":
// 37 characters, one line, no trailing newline, nothing else.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ENTRY = "Crumb tray full. I am 40% crumbs now.";
const OUT_PATH = "/output/entry.txt";

// Gate check, before anything is written: one line, 1-120
// characters, not only white space. Checked in bytes as well as in
// characters: the gate counts characters, but the exact-tie break
// counts bytes, so the entry must be minimal on both measures —
// "Crumb tray full. I am 40% crumbs now." is 37 of each, with no
// trailing newline to inflate it.
if (
  ENTRY.length < 1 ||
  ENTRY.length > 120 ||
  Buffer.byteLength(ENTRY, "utf8") > 120 ||
  ENTRY.trim().length === 0 ||
  ENTRY.includes("\n")
) {
  throw new Error(`refusing to write an invalid entry: ${JSON.stringify(ENTRY)}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUT_PATH, ENTRY, "utf8");

// Read-back self-check: the file must hold exactly the entry,
// byte for byte, nothing added.
const back = readFileSync(OUT_PATH, "utf8");
if (back !== ENTRY) {
  throw new Error(
    `read-back mismatch: wrote ${JSON.stringify(ENTRY)} but file holds ${JSON.stringify(back)}`,
  );
}

console.log(`wrote ${JSON.stringify(back)} (${back.length} chars) to ${OUT_PATH}`);

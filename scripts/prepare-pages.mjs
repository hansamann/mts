import { access, cp, readFile, rm } from "node:fs/promises";

const source = new URL("../dist/client/", import.meta.url);
const destination = new URL("../docs/", import.meta.url);

// A successful JavaScript build alone is insufficient for GitHub Pages.
const html = await readFile(new URL("index.html", source), "utf8");
if (!html.includes("<h1") || !html.includes("STEP INTO")) {
  throw new Error("The homepage was not pre-rendered. Keeping the existing docs build.");
}
await access(new URL("CNAME", source));
await access(new URL(".nojekyll", source));
await rm(destination, { recursive: true, force: true });
await cp(source, destination, { recursive: true });
console.log("GitHub Pages build ready in docs/ (www.techsauna.dev).");

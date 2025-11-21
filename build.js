const fs = require("fs");
const path = require("path");

const rootDir = __dirname;
const docsDir = path.join(rootDir, "docs");

const sourceOrder = [
  "src/data/modules.js",
  "src/utils/summary.js",
  "src/components/QuestionField.jsx",
  "src/components/PageContent.jsx",
  "src/components/Navigation.jsx",
  "src/components/ProgressHeader.jsx",
  "src/components/SummaryView.jsx",
  "src/main.jsx"
];

function stripModules(code) {
  return code
    .replace(/^import .*$/gm, "")
    .replace(/^export default /gm, "")
    .replace(/^export const /gm, "const ")
    .replace(/^export function /gm, "function ")
    .replace(/^export {.*}$/gm, "")
    .trim();
}

const banner = `// Auto-generated. Run npm run build to regenerate.\nconst React = window.React;\nconst ReactDOM = window.ReactDOM;\nconst { useEffect, useState } = React;\nconst { createRoot } = ReactDOM;\n\n`;

const combined =
  banner +
  sourceOrder
    .map((file) => {
      const fullPath = path.join(rootDir, file);
      const content = fs.readFileSync(fullPath, "utf8");
      return stripModules(content);
    })
    .join("\n\n") +
  "\n";

fs.writeFileSync(path.join(rootDir, "main.jsx"), combined);
fs.copyFileSync(path.join(rootDir, "index.html"), path.join(docsDir, "index.html"));
fs.copyFileSync(path.join(rootDir, "main.jsx"), path.join(docsDir, "main.jsx"));

console.log("Build complete. Synced main.jsx and index.html to docs/.");

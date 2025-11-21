import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import Navigation from "./components/Navigation";
import PageContent from "./components/PageContent";
import ProgressHeader from "./components/ProgressHeader";
import SummaryView from "./components/SummaryView";
import { ALL_QUESTIONS, FLAT_PROGRESSION, MODULES, pageKey } from "./data/modules";
import { buildSummaryText, computeBadges } from "./utils/summary";
import { loadPersistedState, persistState, resetPersistedState, storageMetadata } from "./utils/storage";

function App() {
  const [currentModuleId, setCurrentModuleId] = useState("m1");
  const [currentPageId, setCurrentPageId] = useState("p1");
  const [view, setView] = useState("univers");
  const [answers, setAnswers] = useState({});
  const [visited, setVisited] = useState({});
  const [clipboardSupported, setClipboardSupported] = useState(false);

  useEffect(() => {
    const { answers: storedAnswers, visited: storedVisited } = loadPersistedState();
    if (storedAnswers) setAnswers(storedAnswers);
    if (storedVisited) setVisited(storedVisited);
    setClipboardSupported(!!navigator?.clipboard?.writeText);
  }, []);

  useEffect(() => {
    const pk = pageKey(currentModuleId, currentPageId);
    setVisited((prev) => (prev[pk] ? prev : { ...prev, [pk]: true }));
  }, [currentModuleId, currentPageId]);

  useEffect(() => {
    persistState({ answers, visited });
  }, [answers, visited]);

  const handleAnswerChange = (key, value) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  };

  const toggleCheckbox = (key, option) => {
    setAnswers((prev) => {
      const existing = Array.isArray(prev[key]) ? prev[key] : [];
      const exists = existing.includes(option);
      const next = exists ? existing.filter((o) => o !== option) : [...existing, option];
      return { ...prev, [key]: next };
    });
  };

  const goToPage = (moduleId, pageId) => {
    setCurrentModuleId(moduleId);
    setCurrentPageId(pageId);
    setView("univers");
  };

  const recommendedNext = () => {
    for (const step of FLAT_PROGRESSION) {
      const pk = pageKey(step.moduleId, step.pageId);
      if (!visited[pk]) return step;
    }
    return null;
  };

  const rec = recommendedNext();

  const completedPagesCount = Object.keys(visited).length;
  const totalPages = FLAT_PROGRESSION.length;
  const completionPct = totalPages ? Math.round((completedPagesCount / totalPages) * 100) : 0;

  const badges = computeBadges(visited, answers);
  const points = completedPagesCount * 10;

  const summaryText = buildSummaryText(answers, ALL_QUESTIONS);
  const storageInfo = storageMetadata();

  const copySummary = async () => {
    if (!navigator?.clipboard?.writeText) {
      alert(
        "Din browser understøtter ikke automatisk kopiering. Du kan markere og kopiere teksten manuelt."
      );
      return;
    }

    try {
      await navigator.clipboard.writeText(summaryText);
      alert("Opsummering kopieret til udklipsholder.");
    } catch {
      alert("Kunne ikke kopiere automatisk – du kan selv markere og kopiere teksten.");
    }
  };

  const downloadSummary = (format) => {
    const supportsBlob = typeof window !== "undefined" && !!window.Blob && !!window.URL?.createObjectURL;
    if (format === "txt") {
      if (!supportsBlob) {
        alert("Din browser understøtter ikke automatisk download. Kopiér teksten i stedet.");
        return;
      }
      const blob = new Blob([summaryText], { type: "text/plain" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "mit-diabetesliv-opsummering.txt";
      link.click();
      URL.revokeObjectURL(url);
      return;
    }

    if (format === "pdf") {
      if (!window?.print) {
        alert("Din browser understøtter ikke print til PDF. Prøv at downloade som tekst i stedet.");
        return;
      }

      const printable = window.open("", "_blank");
      if (!printable) {
        alert("Vinduet til PDF kunne ikke åbnes. Tillad popups eller brug tekst-download.");
        return;
      }

      printable.document.write(
        `<html><head><title>Opsummering</title></head><body><pre style="white-space: pre-wrap; font-family: inherit;">${summaryText.replaceAll(
          "&",
          "&amp;"
        ).replaceAll("<", "&lt;")}</pre></body></html>`
      );
      printable.document.close();
      printable.focus();
      printable.print();
      printable.close();
    }
  };

  const resetData = () => {
    const confirmReset = window.confirm(
      "Vil du nulstille dine svar og din fremdrift? Dette kan ikke fortrydes."
    );
    if (!confirmReset) return;
    resetPersistedState();
    setAnswers({});
    setVisited({});
    setCurrentModuleId("m1");
    setCurrentPageId("p1");
    setView("univers");
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      <ProgressHeader
        completionPct={completionPct}
        points={points}
        view={view}
        onViewChange={setView}
      />

      <main className="flex-1 w-full max-w-5xl mx-auto px-4 py-4 pb-16">
        {view === "univers" ? (
          <section
            id="univers-view"
            className="flex flex-col md:flex-row gap-4"
            role="region"
            aria-label="Læringsunivers"
          >
            <Navigation
              modules={MODULES}
              currentModuleId={currentModuleId}
              visited={visited}
              rec={rec}
              goToPage={goToPage}
              badges={badges}
            />

            <div className="flex-1">
              <PageContent
                currentModuleId={currentModuleId}
                currentPageId={currentPageId}
                onNavigate={goToPage}
                answers={answers}
                onAnswerChange={handleAnswerChange}
                onToggleCheckbox={toggleCheckbox}
              />
            </div>
          </section>
        ) : (
          <section id="summary-view" role="region" aria-label="Opsummering">
            <SummaryView
              completionPct={completionPct}
              points={points}
              badges={badges}
              summaryText={summaryText}
              onCopy={copySummary}
              onDownloadText={() => downloadSummary("txt")}
              onDownloadPdf={() => downloadSummary("pdf")}
              onReset={resetData}
              clipboardSupported={clipboardSupported}
              storageInfo={storageInfo}
            />
          </section>
        )}
      </main>
    </div>
  );
}

function _runBasicTests() {
  console.assert(MODULES.length === 5, "Forventer 5 moduler i denne version");
  console.assert(
    FLAT_PROGRESSION.length === MODULES.reduce((acc, m) => acc + m.pages.length, 0),
    "Progressionslængde skal svare til antal sider"
  );
}

_runBasicTests();

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
}

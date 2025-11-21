import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import Navigation from "./components/Navigation";
import PageContent from "./components/PageContent";
import ProgressHeader from "./components/ProgressHeader";
import SummaryView from "./components/SummaryView";
import { ALL_QUESTIONS, FLAT_PROGRESSION, MODULES, pageKey } from "./data/modules";
import { buildSummaryText, computeBadges } from "./utils/summary";

function App() {
  const [currentModuleId, setCurrentModuleId] = useState("m1");
  const [currentPageId, setCurrentPageId] = useState("p1");
  const [view, setView] = useState("univers");
  const [answers, setAnswers] = useState({});
  const [visited, setVisited] = useState({});

  useEffect(() => {
    const pk = pageKey(currentModuleId, currentPageId);
    setVisited((prev) => (prev[pk] ? prev : { ...prev, [pk]: true }));
  }, [currentModuleId, currentPageId]);

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

  const copySummary = async () => {
    try {
      await navigator.clipboard.writeText(summaryText);
      alert("Opsummering kopieret til udklipsholder.");
    } catch {
      alert("Kunne ikke kopiere automatisk – du kan selv markere og kopiere teksten.");
    }
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
          <div className="flex flex-col md:flex-row gap-4">
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
          </div>
        ) : (
          <SummaryView
            completionPct={completionPct}
            points={points}
            badges={badges}
            summaryText={summaryText}
            onCopy={copySummary}
          />
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

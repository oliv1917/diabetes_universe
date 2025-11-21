import React from "react";
import QuestionField from "./QuestionField";
import { MODULES } from "../data/modules";

function PageContent({
  currentModuleId,
  currentPageId,
  onNavigate,
  answers,
  onAnswerChange,
  onToggleCheckbox
}) {
  const module = MODULES.find((m) => m.id === currentModuleId);
  if (!module) return <p>Der skete en fejl – modulet blev ikke fundet.</p>;

  const pageIndex = module.pages.findIndex((p) => p.id === currentPageId);
  const page = pageIndex >= 0 ? module.pages[pageIndex] : undefined;
  const moduleIndex = MODULES.findIndex((m) => m.id === module.id);
  const prevModule = moduleIndex > 0 ? MODULES[moduleIndex - 1] : null;
  const nextModule = moduleIndex < MODULES.length - 1 ? MODULES[moduleIndex + 1] : null;
  const pageHeadingId = `${module.id}-${currentPageId}-title`;
  const formHelperId = `${pageHeadingId}-helper`;

  const goPrev = () => {
    if (pageIndex > 0) {
      onNavigate(module.id, module.pages[pageIndex - 1].id);
    } else {
      if (prevModule) {
        onNavigate(prevModule.id, prevModule.pages[prevModule.pages.length - 1].id);
      }
    }
  };

  const goNext = () => {
    if (pageIndex < module.pages.length - 1 && pageIndex >= 0) {
      onNavigate(module.id, module.pages[pageIndex + 1].id);
    } else {
      if (nextModule) {
        onNavigate(nextModule.id, nextModule.pages[0].id);
      }
    }
  };

  if (!page) {
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-2">
          <div>
            <p className="text-xs uppercase tracking-wide text-slate-500 font-semibold">
              {module.title}
            </p>
            <h2 className="text-xl font-bold mt-1">Side ikke fundet</h2>
          </div>
        </div>
        <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm text-sm">
          <p>Der skete en fejl – siden blev ikke fundet.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-2">
        <div>
          <p className="text-xs uppercase tracking-wide text-slate-500 font-semibold">
            {module.title}
          </p>
          <h2 id={pageHeadingId} className="text-xl font-bold mt-1">
            {page.label}
          </h2>
        </div>
        <div className="flex gap-2 text-xs" role="navigation" aria-label="Sidekontrol">
          <button
            className="px-3 py-1 rounded-full border border-slate-200 bg-white hover:bg-slate-100"
            aria-label={
              pageIndex > 0
                ? `Gå til forrige side: ${module.pages[pageIndex - 1].label}`
                : prevModule
                  ? `Gå til forrige modul: ${prevModule.pages[prevModule.pages.length - 1].label}`
                  : "Der er ingen forrige side"
            }
            onClick={goPrev}
            disabled={pageIndex === 0 && !prevModule}
            aria-disabled={pageIndex === 0 && !prevModule}
          >
            ← Forrige
          </button>
          <button
            className="px-3 py-1 rounded-full border border-slate-900 bg-slate-900 text-white hover:bg-slate-800"
            aria-label={
              pageIndex < module.pages.length - 1
                ? `Gå til næste side: ${module.pages[pageIndex + 1].label}`
                : nextModule
                  ? `Gå til næste modul: ${nextModule.pages[0].label}`
                  : "Ingen flere sider"
            }
            onClick={goNext}
            disabled={!nextModule && pageIndex >= module.pages.length - 1}
            aria-disabled={!nextModule && pageIndex >= module.pages.length - 1}
          >
            Næste →
          </button>
        </div>
      </div>

      <form
        className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4 text-sm leading-relaxed"
        role="form"
        aria-labelledby={pageHeadingId}
        aria-describedby={formHelperId}
      >
        <p id={formHelperId} className="sr-only">
          Besvar spørgsmålene på siden for at gemme dine refleksioner. Brug tabulator til at gå mellem felter.
        </p>
        {page.body.map((para, idx) => (
          <p key={idx}>{para}</p>
        ))}

        {page.questions.map((q) => (
          <QuestionField
            key={q.key}
            q={q}
            answers={answers}
            onAnswerChange={onAnswerChange}
            onToggleCheckbox={onToggleCheckbox}
          />
        ))}
      </form>
    </div>
  );
}

export default PageContent;

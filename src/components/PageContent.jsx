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

  const goPrev = () => {
    if (pageIndex > 0) {
      onNavigate(module.id, module.pages[pageIndex - 1].id);
    } else {
      const moduleIndex = MODULES.findIndex((m) => m.id === module.id);
      if (moduleIndex > 0) {
        const prevModule = MODULES[moduleIndex - 1];
        onNavigate(prevModule.id, prevModule.pages[prevModule.pages.length - 1].id);
      }
    }
  };

  const goNext = () => {
    if (pageIndex < module.pages.length - 1 && pageIndex >= 0) {
      onNavigate(module.id, module.pages[pageIndex + 1].id);
    } else {
      const moduleIndex = MODULES.findIndex((m) => m.id === module.id);
      if (moduleIndex < MODULES.length - 1 && moduleIndex >= 0) {
        const nextModule = MODULES[moduleIndex + 1];
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
          <h2 className="text-xl font-bold mt-1">{page.label}</h2>
        </div>
        <div className="flex gap-2 text-xs">
          <button
            className="px-3 py-1 rounded-full border border-slate-200 bg-white hover:bg-slate-100"
            onClick={goPrev}
          >
            ← Forrige
          </button>
          <button
            className="px-3 py-1 rounded-full border border-slate-900 bg-slate-900 text-white hover:bg-slate-800"
            onClick={goNext}
          >
            Næste →
          </button>
        </div>
      </div>

      <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4 text-sm leading-relaxed">
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
      </div>
    </div>
  );
}

export default PageContent;

import React from "react";

function ProgressHeader({ completionPct, points, view, onViewChange }) {
  return (
    <header className="w-full border-b bg-white/80 backdrop-blur sticky top-0 z-20">
      <div className="max-w-5xl mx-auto px-4 py-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Mit Diabetesliv – mental trivsel</h1>
          <p className="text-sm text-slate-600">Et lille selvhjælpsunivers til dig med type 1-diabetes.</p>
        </div>
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <div className="px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100">
            Fremdrift: <span className="font-semibold">{completionPct}%</span>
          </div>
          <div className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100">
            Point: <span className="font-semibold">{points}</span>
          </div>
        </div>
      </div>
      <div
        className="max-w-5xl mx-auto px-4 pb-2 flex gap-2 text-sm"
        role="group"
        aria-label="Skift mellem univers og opsummering"
      >
        <button
          className={`px-3 py-2 rounded-full border transition ${
            view === "univers"
              ? "bg-slate-900 text-white border-slate-900"
              : "bg-white text-slate-700 border-slate-200 hover:bg-slate-100"
          }`}
          onClick={() => onViewChange("univers")}
          aria-pressed={view === "univers"}
          aria-controls="univers-view"
        >
          Univers
        </button>
        <button
          className={`px-3 py-2 rounded-full border transition ${
            view === "summary"
              ? "bg-slate-900 text-white border-slate-900"
              : "bg-white text-slate-700 border-slate-200 hover:bg-slate-100"
          }`}
          onClick={() => onViewChange("summary")}
          aria-pressed={view === "summary"}
          aria-controls="summary-view"
        >
          Min opsummering
        </button>
      </div>
    </header>
  );
}

export default ProgressHeader;

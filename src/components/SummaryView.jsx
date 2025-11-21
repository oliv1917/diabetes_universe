import React from "react";

function SummaryView({
  completionPct,
  points,
  badges,
  summaryText,
  onCopy,
  onDownloadText,
  onDownloadPdf,
  onReset,
  clipboardSupported,
  storageInfo
}) {
  return (
    <div className="space-y-4">
      <section
        className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm"
        role="region"
        aria-labelledby="summary-overview-title"
      >
        <h2 id="summary-overview-title" className="text-lg font-bold mb-1">
          Min opsummering
        </h2>
        <p className="text-sm text-slate-600 mb-3">
          Her kan du samle det vigtigste fra dit arbejde i appen. Du kan kopiere teksten og gemme
          den til dig selv eller dele den med dit behandlerteam, hvis du har lyst.
        </p>
        <div className="grid gap-3 sm:grid-cols-3 text-xs">
          <div className="p-2 rounded-xl bg-slate-50 border border-slate-200">
            <p className="font-semibold">Fremdrift</p>
            <p>{completionPct}% af siderne besøgt</p>
          </div>
          <div className="p-2 rounded-xl bg-slate-50 border border-slate-200">
            <p className="font-semibold">Point</p>
            <p>{points} point optjent</p>
          </div>
          <div className="p-2 rounded-xl bg-slate-50 border border-slate-200">
            <p className="font-semibold">Badges</p>
            {badges.length === 0 ? <p>Ingen badges endnu</p> : <p>{badges.join(", ")}</p>}
          </div>
        </div>
      </section>

      <section
        className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm"
        role="form"
        aria-labelledby="summary-actions-title"
        aria-describedby="summary-actions-desc"
      >
        <div className="flex items-center justify-between gap-2 mb-2">
          <h3 id="summary-actions-title" className="font-semibold">
            Tekst-opsummering
          </h3>
          <div className="flex flex-wrap gap-2 justify-end" aria-label="Handlinger for opsummering">
            <button
              className="px-3 py-1 text-xs rounded-full border border-slate-900 bg-slate-900 text-white hover:bg-slate-800"
              onClick={onCopy}
            >
              Kopiér opsummering
            </button>
            <button
              className="px-3 py-1 text-xs rounded-full border border-slate-200 bg-white hover:bg-slate-100"
              onClick={onDownloadText}
            >
              Download .txt
            </button>
            <button
              className="px-3 py-1 text-xs rounded-full border border-slate-200 bg-white hover:bg-slate-100"
              onClick={onDownloadPdf}
            >
              Download som PDF
            </button>
            <button
              className="px-3 py-1 text-xs rounded-full border border-rose-200 bg-rose-50 text-rose-700 hover:bg-rose-100"
              onClick={onReset}
            >
              Nulstil data
            </button>
          </div>
        </div>
        <p id="summary-actions-desc" className="text-xs text-slate-500 mb-2">
          {clipboardSupported
            ? "Du kan kopiere eller eksportere teksten. PDF-download bruger browserens print-til-PDF."
            : "Din browser understøtter måske ikke automatisk kopiering – du kan markere og kopiere manuelt."}
        </p>
        <p className="text-[11px] text-slate-400 mb-2">
          Data gemmes lokalt på din enhed ({storageInfo.version}). Brug "Nulstil data" hvis du vil starte forfra.
        </p>
        <label className="sr-only" htmlFor="summary-textarea">
          Opsummeringstekst
        </label>
        <textarea
          id="summary-textarea"
          className="w-full min-h-[220px] px-3 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 resize-y"
          value={summaryText}
          readOnly
        />
      </section>
    </div>
  );
}

export default SummaryView;

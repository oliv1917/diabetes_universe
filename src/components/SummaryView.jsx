import React from "react";

function SummaryView({ completionPct, points, badges, summaryText, onCopy }) {
  return (
    <div className="space-y-4">
      <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
        <h2 className="text-lg font-bold mb-1">Min opsummering</h2>
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
      </div>

      <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
        <div className="flex items-center justify-between gap-2 mb-2">
          <h3 className="font-semibold">Tekst-opsummering</h3>
          <button
            className="px-3 py-1 text-xs rounded-full border border-slate-900 bg-slate-900 text-white hover:bg-slate-800"
            onClick={onCopy}
          >
            Kopiér opsummering
          </button>
        </div>
        <p className="text-xs text-slate-500 mb-2">
          Du kan markere og kopiere teksten manuelt, hvis knappen ikke virker på din enhed.
        </p>
        <textarea
          className="w-full min-h-[220px] px-3 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 resize-y"
          value={summaryText}
          readOnly
        />
      </div>
    </div>
  );
}

export default SummaryView;

import React from "react";

function QuestionField({ q, answers, onAnswerChange, onToggleCheckbox }) {
  const value = answers[q.key];

  if (q.type === "text") {
    return (
      <div className="space-y-1">
        <label className="block text-xs font-medium text-slate-700">{q.label}</label>
        <input
          className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900"
          value={typeof value === "string" ? value : ""}
          onChange={(e) => onAnswerChange(q.key, e.target.value)}
        />
      </div>
    );
  }

  if (q.type === "textarea") {
    return (
      <div className="space-y-1">
        <label className="block text-xs font-medium text-slate-700">{q.label}</label>
        <textarea
          className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 resize-y"
          rows={4}
          value={typeof value === "string" ? value : ""}
          onChange={(e) => onAnswerChange(q.key, e.target.value)}
        />
      </div>
    );
  }

  if (q.type === "radio" && q.options) {
    return (
      <div className="space-y-1">
        <p className="text-xs font-medium text-slate-700">{q.label}</p>
        <div className="flex flex-wrap gap-2">
          {q.options.map((opt) => (
            <button
              type="button"
              key={opt}
              className={`px-3 py-1 rounded-full border text-xs transition ${
                value === opt
                  ? "bg-slate-900 text-white border-slate-900"
                  : "bg-slate-50 text-slate-800 border-slate-200 hover:bg-slate-100"
              }`}
              onClick={() => onAnswerChange(q.key, opt)}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (q.type === "checkbox" && q.options) {
    const selected = Array.isArray(value) ? value : [];
    return (
      <div className="space-y-1">
        <p className="text-xs font-medium text-slate-700">{q.label}</p>
        <div className="flex flex-col gap-1">
          {q.options.map((opt) => (
            <label key={opt} className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                className="rounded border-slate-300"
                checked={selected.includes(opt)}
                onChange={() => onToggleCheckbox(q.key, opt)}
              />
              <span>{opt}</span>
            </label>
          ))}
        </div>
      </div>
    );
  }

  return null;
}

export default QuestionField;

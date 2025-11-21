import React from "react";
import { pageKey } from "../data/modules";

function Navigation({ modules, currentModuleId, visited, rec, goToPage, badges }) {
  return (
    <aside className="md:w-72 shrink-0 space-y-3">
      <div className="p-3 rounded-2xl bg-white border border-slate-200 shadow-sm">
        <h2 className="font-semibold mb-1 text-sm uppercase tracking-wide text-slate-500">
          Forslået progression
        </h2>
        {rec ? (
          <NextStepCard rec={rec} modules={modules} goToPage={goToPage} />
        ) : (
          <p className="text-sm text-emerald-700">
            Du har besøgt alle sider. Du kan altid gå tilbage eller bruge "Min opsummering"
            til at samle dit arbejde.
          </p>
        )}
      </div>

      <div className="space-y-2">
        {modules.map((m) => (
          <ModuleCard
            key={m.id}
            module={m}
            currentModuleId={currentModuleId}
            visited={visited}
            goToPage={goToPage}
          />
        ))}
      </div>

      <div className="p-3 rounded-2xl bg-white border border-slate-200 shadow-sm">
        <h2 className="font-semibold mb-1 text-sm uppercase tracking-wide text-slate-500">Badges</h2>
        {badges.length === 0 ? (
          <p className="text-xs text-slate-500">
            Du låser badges op, når du arbejder med sider og øvelser.
          </p>
        ) : (
          <ul className="flex flex-wrap gap-1">
            {badges.map((b) => (
              <li
                key={b}
                className="px-2 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-[11px]"
              >
                {b}
              </li>
            ))}
          </ul>
        )}
      </div>
    </aside>
  );
}

function NextStepCard({ rec, modules, goToPage }) {
  const module = modulesLookup(rec, "module", modules);
  const page = modulesLookup(rec, "page", modules);

  if (!module) return null;

  return (
    <div>
      <p className="text-sm mb-2">Næste foreslåede side er:</p>
      <button
        className="w-full text-left px-3 py-2 rounded-xl bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition"
        onClick={() => goToPage(rec.moduleId, rec.pageId)}
      >
        {module.title}
        <br />
        <span className="text-xs text-indigo-100">{page ? page.label : null}</span>
      </button>
    </div>
  );
}

function ModuleCard({ module, currentModuleId, visited, goToPage }) {
  return (
    <div
      className={`p-3 rounded-2xl border shadow-sm cursor-pointer transition ${
        module.id === currentModuleId
          ? "bg-slate-900 text-white border-slate-900"
          : "bg-white text-slate-900 border-slate-200 hover:bg-slate-50"
      }`}
      onClick={() => goToPage(module.id, module.pages[0].id)}
    >
      <h3 className="font-semibold text-sm mb-1">{module.title}</h3>
      <p className="text-xs opacity-80">{module.description}</p>
      <div className="mt-2 flex flex-wrap gap-1 text-[10px]">
        {module.pages.map((p) => {
          const pk = pageKey(module.id, p.id);
          const done = !!visited[pk];
          return (
            <span
              key={p.id}
              className={`px-2 py-1 rounded-full border ${
                done
                  ? "bg-emerald-50 border-emerald-200 text-emerald-800"
                  : "bg-slate-50 border-slate-200 text-slate-600"
              }`}
            >
              {p.label.split("–")[0].trim()} {done ? "✓" : ""}
            </span>
          );
        })}
      </div>
    </div>
  );
}

function modulesLookup(rec, level, modules) {
  const module = modules.find((m) => m.id === rec.moduleId);
  if (level === "module") return module;
  if (!module) return null;
  return module.pages.find((p) => p.id === rec.pageId);
}

export default Navigation;

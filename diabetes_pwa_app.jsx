import React, { useState, useEffect } from "react";

// Kompakt, data-drevet version af appen så den kan køre i canvas

type QuestionType = "text" | "textarea" | "radio" | "checkbox";

type Question = {
  key: string;
  label: string;
  type: QuestionType;
  options?: string[]; // bruges til radio/checkbox
};

type Page = {
  id: string;
  label: string;
  body: string[]; // korte brødtekster
  questions: Question[];
};

type ModuleType = {
  id: string;
  title: string;
  description: string;
  pages: Page[];
};

const MODULES: ModuleType[] = [
  {
    id: "m1",
    title: "Modul 1: Velkommen & overblik",
    description: "Kort intro, forventninger og personlige mål.",
    pages: [
      {
        id: "p1",
        label: "Side 1.1 – Velkommen",
        body: [
          "Velkommen til \"Mit Diabetesliv – mental trivsel\".",
          "Appen er til dig, der lever med type 1-diabetes og gerne vil passe lidt bedre på din mentale trivsel.",
          "Du bestemmer tempoet selv. Der er en foreslået rækkefølge, men du kan frit hoppe rundt."
        ],
        questions: [
          {
            key: "m1_p1_udgangspunkt",
            label:
              "Hvad fylder mest for dig lige nu i forhold til at leve med diabetes?",
            type: "textarea"
          }
        ]
      },
      {
        id: "p2",
        label: "Side 1.2 – Sådan bruger du appen",
        body: [
          "Du kan bruge appen som et lille selvhjælpsforløb.",
          "Vi anbefaler at tage 1–2 sider ad gangen, gerne med lidt ro omkring dig.",
          "Du kan til sidst lave en opsummering, som du kan vælge at dele med en behandler."
        ],
        questions: [
          {
            key: "m1_p2_brugerstil",
            label: "Hvordan vil du helst bruge appen?",
            type: "radio",
            options: [
              "Følge anbefalet rækkefølge",
              "Hoppe rundt efter behov",
              "Lidt af begge dele"
            ]
          }
        ]
      },
      {
        id: "p3",
        label: "Side 1.3 – Dine personlige mål",
        body: [
          "Små, konkrete mål gør det lettere at mærke, om appen hjælper dig.",
          "Målene må gerne være realistiske og hverdagsnære."
        ],
        questions: [
          { key: "m1_p3_maal1", label: "Mit vigtigste mål", type: "text" },
          {
            key: "m1_p3_maal2",
            label: "Et ekstra mål (valgfrit)",
            type: "text"
          }
        ]
      }
    ]
  },
  {
    id: "m2",
    title: "Modul 2: Følelser, stress og diabetes-distress",
    description: "Kort viden om følelser og stress.",
    pages: [
      {
        id: "p1",
        label: "Side 2.1 – Følelser og diabetes",
        body: [
          "Det er normalt, at diabetes påvirker følelser som uro, skyld, træthed eller frustration.",
          "Målet er ikke at fjerne følelserne, men at forstå dem og passe bedre på dig selv."
        ],
        questions: [
          {
            key: "m2_p1_folelser",
            label: "Hvilke følelser genkender du mest i forhold til din diabetes?",
            type: "checkbox",
            options: [
              "Frustration",
              "Skyld",
              "Træthed",
              "Angst/uro",
              "Stolthed",
              "Noget andet"
            ]
          }
        ]
      },
      {
        id: "p2",
        label: "Side 2.2 – Hvad er diabetes-distress?",
        body: [
          "Diabetes-distress er et ord for den følelsesmæssige belastning ved at leve med diabetes hver dag.",
          "Det er ikke det samme som en depression, men kan føles tungt og drænende.",
          "Hvis du får det meget svært psykisk, skal du altid kontakte en læge eller anden professionel hjælp."
        ],
        questions: [
          {
            key: "m2_p2_belastning",
            label:
              "Hvor belastet føler du dig lige nu af kravene i din diabetes?",
            type: "radio",
            options: ["Slet ikke", "Lidt", "Nogenlunde", "En del", "Meget"]
          }
        ]
      }
    ]
  },
  {
    id: "m3",
    title: "Modul 3: Tanker og handlemuligheder",
    description: "Fokus på tanker og små ændringer i hverdagen.",
    pages: [
      {
        id: "p1",
        label: "Side 3.1 – Tanker og følelser",
        body: [
          "Tanker påvirker følelser og handlinger. En hård indre dialog kan gøre hverdagen tungere.",
          "Vi kan øve os i at opdage tanker og justere dem lidt, så de bliver mere hjælpsomme."
        ],
        questions: [
          {
            key: "m3_p1_tanke",
            label: "Skriv én tanke om din diabetes, der ofte dukker op.",
            type: "textarea"
          }
        ]
      },
      {
        id: "p2",
        label: "Side 3.2 – En lille handleplan",
        body: [
          "Små handlinger kan gøre en stor forskel over tid.",
          "Tænk i 1 lille ting, du vil prøve i den næste uge."
        ],
        questions: [
          {
            key: "m3_p2_handling",
            label:
              "Hvilken lille ting vil du gerne prøve at gøre anderledes i denne uge?",
            type: "textarea"
          }
        ]
      }
    ]
  }
];

const FLAT_PROGRESSION = MODULES.flatMap((m) =>
  m.pages.map((p) => ({ moduleId: m.id, pageId: p.id }))
);

const ALL_QUESTIONS = MODULES.flatMap((m) =>
  m.pages.flatMap((p) =>
    p.questions.map((q) => ({
      moduleId: m.id,
      pageId: p.id,
      moduleTitle: m.title,
      pageLabel: p.label,
      question: q
    }))
  )
);

const pageKey = (moduleId: string, pageId: string) => `${moduleId}_${pageId}`;

type Answers = Record<string, string | string[]>;

type VisitMap = Record<string, boolean>;

export default function App() {
  const [currentModuleId, setCurrentModuleId] = useState("m1");
  const [currentPageId, setCurrentPageId] = useState("p1");
  const [view, setView] = useState<"univers" | "summary">("univers");
  const [answers, setAnswers] = useState<Answers>({});
  const [visited, setVisited] = useState<VisitMap>({});

  useEffect(() => {
    const pk = pageKey(currentModuleId, currentPageId);
    setVisited((prev) => (prev[pk] ? prev : { ...prev, [pk]: true }));
  }, [currentModuleId, currentPageId]);

  const handleAnswerChange = (key: string, value: string | string[]) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  };

  const toggleCheckbox = (key: string, option: string) => {
    setAnswers((prev) => {
      const existing = Array.isArray(prev[key]) ? prev[key] : [];
      const exists = existing.includes(option);
      const next = exists
        ? existing.filter((o) => o !== option)
        : [...existing, option];
      return { ...prev, [key]: next };
    });
  };

  const goToPage = (moduleId: string, pageId: string) => {
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
  const completionPct = totalPages
    ? Math.round((completedPagesCount / totalPages) * 100)
    : 0;

  const badges = computeBadges(visited, answers);
  const points = completedPagesCount * 10;

  const copySummary = async () => {
    try {
      await navigator.clipboard.writeText(buildSummaryText(answers));
      alert("Opsummering kopieret til udklipsholder.");
    } catch {
      alert(
        "Kunne ikke kopiere automatisk – du kan selv markere og kopiere teksten."
      );
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      <header className="w-full border-b bg-white/80 backdrop-blur sticky top-0 z-20">
        <div className="max-w-5xl mx-auto px-4 py-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">
              Mit Diabetesliv – mental trivsel
            </h1>
            <p className="text-sm text-slate-600">
              Et lille selvhjælpsunivers til dig med type 1-diabetes.
            </p>
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
        <div className="max-w-5xl mx-auto px-4 pb-2 flex gap-2 text-sm">
          <button
            className={`px-3 py-2 rounded-full border transition ${
              view === "univers"
                ? "bg-slate-900 text-white border-slate-900"
                : "bg-white text-slate-700 border-slate-200 hover:bg-slate-100"
            }`}
            onClick={() => setView("univers")}
          >
            Univers
          </button>
          <button
            className={`px-3 py-2 rounded-full border transition ${
              view === "summary"
                ? "bg-slate-900 text-white border-slate-900"
                : "bg-white text-slate-700 border-slate-200 hover:bg-slate-100"
            }`}
            onClick={() => setView("summary")}
          >
            Min opsummering
          </button>
        </div>
      </header>

      <main className="flex-1 w-full max-w-5xl mx-auto px-4 py-4 pb-16">
        {view === "univers" ? (
          <div className="flex flex-col md:flex-row gap-4">
            <aside className="md:w-72 shrink-0 space-y-3">
              <div className="p-3 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <h2 className="font-semibold mb-1 text-sm uppercase tracking-wide text-slate-500">
                  Forslået progression
                </h2>
                {rec ? (
                  <NextStepCard rec={rec} goToPage={goToPage} />
                ) : (
                  <p className="text-sm text-emerald-700">
                    Du har besøgt alle sider. Du kan altid gå tilbage eller bruge
                    "Min opsummering" til at samle dit arbejde.
                  </p>
                )}
              </div>

              <div className="space-y-2">
                {MODULES.map((m) => (
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
                <h2 className="font-semibold mb-1 text-sm uppercase tracking-wide text-slate-500">
                  Badges
                </h2>
                {badges.length === 0 ? (
                  <p className="text-xs text-slate-500">
                    Du låser badges op, når du arbejder med sider og øvelser.
                  </p>
                ) : (
                  <ul className="flex flex-wrap gap-1">
                    {badges.map((b) => (
                      <li
                        key={b}
                        className="px-2 py-1 text-[11px] rounded-full bg-amber-50 border border-amber-200 text-amber-900"
                      >
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </aside>

            <section className="flex-1">
              <PageContent
                currentModuleId={currentModuleId}
                currentPageId={currentPageId}
                onNavigate={goToPage}
                answers={answers}
                onAnswerChange={handleAnswerChange}
                onToggleCheckbox={toggleCheckbox}
              />
            </section>
          </div>
        ) : (
          <SummaryView
            answers={answers}
            completionPct={completionPct}
            points={points}
            badges={badges}
            onCopy={copySummary}
          />
        )}
      </main>
    </div>
  );
}

type NextStep = { moduleId: string; pageId: string };

function NextStepCard({
  rec,
  goToPage
}: {
  rec: NextStep;
  goToPage: (m: string, p: string) => void;
}) {
  const module = MODULES.find((m) => m.id === rec.moduleId);
  if (!module) return null;
  const page = module.pages.find((p) => p.id === rec.pageId);

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

function ModuleCard({
  module,
  currentModuleId,
  visited,
  goToPage
}: {
  module: ModuleType;
  currentModuleId: string;
  visited: VisitMap;
  goToPage: (m: string, p: string) => void;
}) {
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

function PageContent({
  currentModuleId,
  currentPageId,
  onNavigate,
  answers,
  onAnswerChange,
  onToggleCheckbox
}: {
  currentModuleId: string;
  currentPageId: string;
  onNavigate: (m: string, p: string) => void;
  answers: Answers;
  onAnswerChange: (key: string, value: string | string[]) => void;
  onToggleCheckbox: (key: string, option: string) => void;
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

function QuestionField({
  q,
  answers,
  onAnswerChange,
  onToggleCheckbox
}: {
  q: Question;
  answers: Answers;
  onAnswerChange: (key: string, value: string | string[]) => void;
  onToggleCheckbox: (key: string, option: string) => void;
}) {
  const value = answers[q.key];

  if (q.type === "text") {
    return (
      <div className="space-y-1">
        <label className="block text-xs font-medium text-slate-700">{q.label}</label>
        <input
          className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900"
          value={(value as string) || ""}
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
          value={(value as string) || ""}
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

function computeBadges(visited: VisitMap, answers: Answers): string[] {
  const badges: string[] = [];
  const visitedCount = Object.keys(visited).length;

  if (visitedCount >= 1) badges.push("Jeg er i gang");
  if (visitedCount >= 3) badges.push("God fremdrift");
  if (Object.keys(answers).length >= 3) badges.push("Refleksiv bruger");

  return Array.from(new Set(badges));
}

function SummaryView({
  answers,
  completionPct,
  points,
  badges,
  onCopy
}: {
  answers: Answers;
  completionPct: number;
  points: number;
  badges: string[];
  onCopy: () => void;
}) {
  const summaryText = buildSummaryText(answers);

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

function buildSummaryText(answers: Answers): string {
  if (Object.keys(answers).length === 0) {
    return (
      "Her vil din personlige opsummering stå, når du har udfyldt nogle af øvelserne i appen." +
      "\n\nDu kan frit vælge, hvad du vil dele, hvis du viser det til en behandler."
    );
  }

  const lines: string[] = [];

  ALL_QUESTIONS.forEach((entry) => {
    const v = answers[entry.question.key];
    if (v === undefined || v === "" || (Array.isArray(v) && v.length === 0)) return;
    lines.push(`${entry.moduleTitle} – ${entry.pageLabel}`);
    lines.push(`Spørgsmål: ${entry.question.label}`);
    if (Array.isArray(v)) {
      lines.push(`Svar: ${v.join(", ")}`);
    } else {
      lines.push(`Svar: ${v}`);
    }
    lines.push("");
  });

  lines.push(
    "---",
    "Denne tekst er genereret ud fra mit arbejde i appen 'Mit Diabetesliv – mental trivsel'.",
    "Jeg bestemmer selv, hvem jeg vil dele den med, og hvad vi skal fokusere på."
  );

  return lines.join("\n");
}

// Enkle selvtjek for at sikre, at strukturen hænger sammen
function _runBasicTests() {
  console.assert(MODULES.length === 3, "Forventer 3 moduler i denne kompakte version");
  console.assert(
    FLAT_PROGRESSION.length === MODULES.reduce(
      (acc, m) => acc + m.pages.length,
      0
    ),
    "Progressionslængde skal svare til antal sider"
  );
}

_runBasicTests();

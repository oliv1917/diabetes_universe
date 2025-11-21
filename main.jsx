// Auto-generated. Run npm run build to regenerate.
const React = window.React;
const ReactDOM = window.ReactDOM;
const { useEffect, useState } = React;
const { createRoot } = ReactDOM;

const MODULES = [
  {
    id: "m1",
    title: "Modul 1: Velkommen & overblik",
    description: "Tryg start, forventninger og personlige mål for forløbet.",
    pages: [
      {
        id: "p1",
        label: "Side 1.1 – Velkommen til Mit Diabetesliv",
        body: [
          "Denne app er lavet til dig, der lever med type 1-diabetes – og som gerne vil have det lidt lettere mentalt i hverdagen.",
          "Her handler det ikke om perfektion, men om at finde måder at være menneske med diabetes. Du kan hoppe frit rundt eller følge et foreslået forløb.",
          "Appen erstatter ikke din behandling. Hvis du er i tvivl om insulin eller medicin, skal du altid kontakte dit behandlerteam."
        ],
        questions: [
          {
            key: "m1_p1_udgangspunkt",
            label:
              "Interaktiv øvelse – Dit udgangspunkt: Skriv 3 ting, der fylder mest for dig lige nu i forhold til at leve med diabetes.",
            type: "textarea"
          }
        ]
      },
      {
        id: "p2",
        label: "Side 1.2 – Sådan bruger du appen",
        body: [
          "Du kan se alle moduler og sider på forsiden og hoppe direkte til det, der giver mening i dag.",
          "Hvis du vil have en rød tråd, kan du bruge knappen 'Anbefalet næste skridt'. Forløbet følger en klassisk CBT-struktur fra forståelse til vedligeholdelse.",
          "Du kan samle dine svar som en opsummering og eksportere dem som tekst eller PDF, hvis du vil dele med en behandler."
        ],
        questions: [
          {
            key: "m1_p2_brugerstil",
            label: "Hvordan vil du helst bruge appen?",
            type: "radio",
            options: [
              "Jeg vil helst følge et foreslået forløb.",
              "Jeg vil helst vælge frit fra gang til gang.",
              "Jeg er ikke sikker endnu."
            ]
          }
        ]
      },
      {
        id: "p3",
        label: "Side 1.3 – Dine personlige mål",
        body: [
          "Små, konkrete mål gør det lettere at mærke, om appen hjælper dig. De må gerne være realistiske og hverdagsnære.",
          "Eksempler: 'Jeg vil være mindre bange for lave blodsukre', eller 'Jeg vil tænke mindre på diabetes om aftenen'."
        ],
        questions: [
          { key: "m1_p3_goal1", label: "Mål 1", type: "text" },
          { key: "m1_p3_goal2", label: "Mål 2", type: "text" },
          { key: "m1_p3_goal3", label: "Mål 3", type: "text" },
          {
            key: "m1_p3_baseline1",
            label: "Baseline trivsel: Jeg har følt mig glad og i godt humør (0-5)",
            type: "radio",
            options: ["0", "1", "2", "3", "4", "5"]
          },
          {
            key: "m1_p3_baseline2",
            label: "Baseline trivsel: Jeg har følt mig rolig og afslappet (0-5)",
            type: "radio",
            options: ["0", "1", "2", "3", "4", "5"]
          },
          {
            key: "m1_p3_baseline3",
            label: "Baseline trivsel: Jeg har følt mig aktiv og energisk (0-5)",
            type: "radio",
            options: ["0", "1", "2", "3", "4", "5"]
          },
          {
            key: "m1_p3_baseline4",
            label: "Baseline trivsel: Jeg vågnede frisk og udhvilet (0-5)",
            type: "radio",
            options: ["0", "1", "2", "3", "4", "5"]
          },
          {
            key: "m1_p3_baseline5",
            label: "Baseline trivsel: Min daglige tilværelse har været fyldt med ting, der interesserer mig (0-5)",
            type: "radio",
            options: ["0", "1", "2", "3", "4", "5"]
          }
        ]
      }
    ]
  },
  {
    id: "m2",
    title: "Modul 2: Følelser, stress og diabetes-distress",
    description: "Normalisering af følelser, distress og stress-signaler.",
    pages: [
      {
        id: "p1",
        label: "Side 2.1 – Følelser og diabetes: Du er ikke alene",
        body: [
          "Diabetes påvirker ikke kun kroppen – den påvirker også følelser, tanker, relationer og energi.",
          "Mange oplever irritation, dårlig samvittighed, frygt for lave eller høje blodsukre og træthed af alarmer.",
          "Det betyder ikke, at der er noget galt med dig – det betyder, at du er et menneske med en krævende sygdom."
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
          "Diabetes-distress beskriver stressen og følelsesmæssige belastning ved at leve med diabetes hver dag – fx bekymringer, skyld eller overvældelse.",
          "Det er ikke det samme som en depression, selvom symptomer kan ligne hinanden. Ved længerevarende tristhed eller selvmordstanker skal du kontakte professionel hjælp.",
          "Her bruger vi et kort refleksionstjek inspireret af DDS-2 for at se, hvor meget diabetes fylder lige nu."
        ],
        questions: [
          {
            key: "m2_p2_belastning",
            label:
              "Mini-Distress: Hvor belastet føler du dig af kravene i din diabetes lige nu?",
            type: "radio",
            options: ["Slet ikke", "Lidt", "Nogenlunde", "En del", "Meget", "Meget meget"]
          },
          {
            key: "m2_p2_bekymring",
            label: "Mini-Distress: Hvor bekymret er du for, om du gør 'nok' for din diabetes?",
            type: "radio",
            options: ["Slet ikke", "Lidt", "Nogenlunde", "En del", "Meget", "Meget meget"]
          }
        ]
      },
      {
        id: "p3",
        label: "Side 2.3 – Stress og kroppen",
        body: [
          "Stress kan mærkes i kroppen via fx hjertebanken, spændinger eller uro, og hormoner kan påvirke blodsukkeret.",
          "Stress er ikke din skyld – og det kan ændres gennem opmærksomhed på tanker, følelser og vaner.",
          "Her kortlægger du dine egne stress-signaler, så du kan spotte dem tidligere."
        ],
        questions: [
          {
            key: "m2_p3_signaler",
            label:
              "Interaktiv øvelse – Mine stress-signaler: Skriv 3 ting, der viser dig, at du er ved at blive stresset.",
            type: "textarea"
          }
        ]
      }
    ]
  },
  {
    id: "m3",
    title: "Modul 3: Tanker, bekymringer og katastrofetanker",
    description: "CBT-model, tanke-fælder og tanke-ark.",
    pages: [
      {
        id: "p1",
        label: "Side 3.1 – CBT-modellen",
        body: [
          "I kognitiv adfærdsterapi ser vi på sammenhængen mellem situation, tanke, følelse og handling.",
          "Vi kan ikke styre alle situationer eller følelser, men vi kan opdage og arbejde med tankerne, så de bliver mere hjælpsomme.",
          "Udfyld din egen situation for at se mønstrene."
        ],
        questions: [
          { key: "m3_p1_situation", label: "Situation", type: "text" },
          { key: "m3_p1_tanke", label: "Tanke", type: "text" },
          { key: "m3_p1_folelse", label: "Følelse/krop", type: "text" },
          { key: "m3_p1_handling", label: "Handling", type: "text" }
        ]
      },
      {
        id: "p2",
        label: "Side 3.2 – Typiske tanke-fælder",
        body: [
          "Mange oplever tanke-fælder som alt-eller-intet, katastrofetanker, tankelæsning eller overansvarlighed.",
          "Tanke-fælder er mønstre – ikke sandheder. Når du genkender dem, er du allerede i gang med at løsne grebet.",
          "Marker de tanke-fælder, du kender."
        ],
        questions: [
          {
            key: "m3_p2_faelder",
            label: "Hvilke tanke-fælder kender du?",
            type: "checkbox",
            options: [
              "Alt-eller-intet",
              "Katastrofetanker",
              "Tankelæsning",
              "Overansvarlighed",
              "Generalisation",
              "Andet – skriv selv"
            ]
          }
        ]
      },
      {
        id: "p3",
        label: "Side 3.3 – Sådan udfordrer du en tanke",
        body: [
          "Her får du et tanke-ark til at udfordre en tanke trin for trin: vælg tanke, vurder troen, find beviser for og imod, skab en ny tanke og vurder den igen.",
          "Målet er ikke at blive kunstigt positiv, men mere realistisk og hjælpsom.",
          "Du kan bruge tanke-arket flere gange og følge din udvikling."
        ],
        questions: [
          { key: "m3_p3_problem", label: "Problem-tanke", type: "text" },
          {
            key: "m3_p3_tro_før",
            label: "Hvor meget tror du på tanken? (0–100%)",
            type: "radio",
            options: ["0", "25", "50", "75", "100"]
          },
          { key: "m3_p3_for", label: "Beviser FOR", type: "textarea" },
          { key: "m3_p3_imod", label: "Beviser IMOD", type: "textarea" },
          {
            key: "m3_p3_ny",
            label: "Ny, mere hjælpsom tanke",
            type: "textarea"
          },
          {
            key: "m3_p3_tro_efter",
            label: "Hvor meget tror du på den nye tanke? (0–100%)",
            type: "radio",
            options: ["0", "25", "50", "75", "100"]
          }
        ]
      }
    ]
  },
  {
    id: "m4",
    title: "Modul 4: Hverdag, vaner og egenomsorg",
    description: "Energi-budget, alarm-dagbog og diabetes-frie lommer.",
    pages: [
      {
        id: "p1",
        label: "Side 4.1 – Din hverdag som energi-budget",
        body: [
          "At leve med diabetes koster ekstra mental energi. Her ser vi på, hvad der dræner og fylder dig op.",
          "Små justeringer kan lette presset. Kortlæg dine drænere og fyldere.",
          "Vælg om du vil prøve én lille ændring i denne uge."
        ],
        questions: [
          {
            key: "m4_p1_drain",
            label: "3 ting i min hverdag, der dræner mig",
            type: "textarea"
          },
          {
            key: "m4_p1_fill",
            label: "3 ting, der giver mig energi eller ro",
            type: "textarea"
          },
          {
            key: "m4_p1_change",
            label: "Vil du prøve én lille ændring i dit energi-budget denne uge?",
            type: "radio",
            options: ["Ja", "Nej", "Måske"]
          }
        ]
      },
      {
        id: "p2",
        label: "Side 4.2 – Alarmer, data og diabetes-støj",
        body: [
          "Sensorer og alarmer kan både hjælpe og stresse. Her undersøger du, hvordan de påvirker dine tanker og følelser.",
          "Dette handler ikke om at ændre medicinske indstillinger – tal altid med dit behandlerteam, hvis du er i tvivl.",
          "Brug alarm-dagbogen til at se mønstre."
        ],
        questions: [
          { key: "m4_p2_tid", label: "Hvornår gik alarmen?", type: "text" },
          { key: "m4_p2_tanke", label: "Hvad tænkte jeg?", type: "textarea" },
          { key: "m4_p2_folelse", label: "Hvad følte jeg?", type: "textarea" },
          { key: "m4_p2_handling", label: "Hvad gjorde jeg?", type: "textarea" },
          {
            key: "m4_p2_hjalp",
            label: "Hjalp min reaktion mig?",
            type: "radio",
            options: ["Ja", "Nej", "Delvist"]
          }
        ]
      },
      {
        id: "p3",
        label: "Side 4.3 – Søvn, pauser og diabetes-frie lommer",
        body: [
          "Søvn og pauser er vigtige for både blodsukker og mental trivsel. Du kan skabe korte 'diabetes-frie lommer', hvor du giver dig selv lov til ikke at tænke på tal.",
          "Sikkerhed kommer altid først – ved risiko for lave blodsukre kan det være nødvendigt at holde ekstra øje.",
          "Beskriv en situation, hvor du vil øve en 10-minutters diabetes-fri lomme."
        ],
        questions: [
          {
            key: "m4_p3_lomme",
            label:
              "Interaktiv øvelse – Min diabetes-frie lomme: Beskriv en konkret situation, hvor du vil øve en 10-minutters pause.",
            type: "textarea"
          },
          {
            key: "m4_p3_markering",
            label: "Marker når du har gennemført en diabetes-fri lomme",
            type: "checkbox",
            options: ["Jeg har gennemført en lomme i dag"]
          }
        ]
      }
    ]
  },
  {
    id: "m5",
    title: "Modul 5: Relationer, identitet og fremtidsblik",
    description: "Kommunikation, spørgsmål til behandler og personlig plan.",
    pages: [
      {
        id: "p1",
        label: "Side 5.1 – At tale med pårørende og kolleger",
        body: [
          "Du behøver ikke klare det hele alene. Forbered korte sætninger, der forklarer, hvad du har brug for – og hvad der ikke hjælper.",
          "Målet er at gøre det lettere at involvere andre på en måde, der støtter dig.",
          "Skriv 2–3 sætninger, du kunne bruge i en samtale."
        ],
        questions: [
          {
            key: "m5_p1_budskab",
            label: "Mit budskab til andre",
            type: "textarea"
          }
        ]
      },
      {
        id: "p2",
        label: "Side 5.2 – Samtale med behandler",
        body: [
          "Appen kan hjælpe dig med at forberede samtaler med dit behandlerteam – ikke kun om tal, men også om, hvordan du har det.",
          "Du kan vælge, hvad du vil dele fra opsummeringen.",
          "Skriv tre spørgsmål, du gerne vil tage op."
        ],
        questions: [
          { key: "m5_p2_spm1", label: "Spørgsmål 1", type: "text" },
          { key: "m5_p2_spm2", label: "Spørgsmål 2", type: "text" },
          { key: "m5_p2_spm3", label: "Spørgsmål 3", type: "text" }
        ]
      },
      {
        id: "p3",
        label: "Side 5.3 – Personlig plan og afslutning",
        body: [
          "Nu samler du, hvad du har lært om dig selv, og hvilke strategier du vil fortsætte med.",
          "Du kan også lave en afsluttende måling for at se forskelle fra modul 1 og 2.",
          "Sikkerhed først: Kontakt altid dit behandlerteam, hvis du er i tvivl om fysisk behandling."
        ],
        questions: [
          {
            key: "m5_p3_pointer",
            label: "Mine vigtigste 3 pointer fra appen",
            type: "textarea"
          },
          {
            key: "m5_p3_strategier",
            label: "Mine 3 vigtigste strategier",
            type: "textarea"
          },
          {
            key: "m5_p3_plan",
            label: "Hvad vil jeg gøre, hvis jeg mærker, at det bliver svært igen?",
            type: "textarea"
          },
          {
            key: "m5_p3_trivsel1",
            label: "Afsluttende trivsel: Jeg har følt mig glad og i godt humør (0-5)",
            type: "radio",
            options: ["0", "1", "2", "3", "4", "5"]
          },
          {
            key: "m5_p3_trivsel2",
            label: "Afsluttende trivsel: Jeg har følt mig rolig og afslappet (0-5)",
            type: "radio",
            options: ["0", "1", "2", "3", "4", "5"]
          },
          {
            key: "m5_p3_trivsel3",
            label: "Afsluttende trivsel: Jeg har følt mig aktiv og energisk (0-5)",
            type: "radio",
            options: ["0", "1", "2", "3", "4", "5"]
          },
          {
            key: "m5_p3_trivsel4",
            label: "Afsluttende trivsel: Jeg vågnede frisk og udhvilet (0-5)",
            type: "radio",
            options: ["0", "1", "2", "3", "4", "5"]
          },
          {
            key: "m5_p3_trivsel5",
            label:
              "Afsluttende trivsel: Min daglige tilværelse har været fyldt med ting, der interesserer mig (0-5)",
            type: "radio",
            options: ["0", "1", "2", "3", "4", "5"]
          },
          {
            key: "m5_p3_distress1",
            label:
              "Mini-Distress afslutning: Hvor belastet føler du dig af kravene i din diabetes lige nu?",
            type: "radio",
            options: ["Slet ikke", "Lidt", "Nogenlunde", "En del", "Meget", "Meget meget"]
          },
          {
            key: "m5_p3_distress2",
            label:
              "Mini-Distress afslutning: Hvor bekymret er du for, om du gør 'nok' for din diabetes?",
            type: "radio",
            options: ["Slet ikke", "Lidt", "Nogenlunde", "En del", "Meget", "Meget meget"]
          }
        ]
      }
    ]
  }
];

const FLAT_PROGRESSION = MODULES.reduce((acc, module) => {
  module.pages.forEach((page) => {
    acc.push({ moduleId: module.id, pageId: page.id });
  });
  return acc;
}, []);

const ALL_QUESTIONS = MODULES.reduce((acc, module) => {
  module.pages.forEach((page) => {
    page.questions.forEach((question) => {
      acc.push({
        moduleId: module.id,
        pageId: page.id,
        moduleTitle: module.title,
        pageLabel: page.label,
        question
      });
    });
  });
  return acc;
}, []);

const pageKey = (moduleId, pageId) => `${moduleId}_${pageId}`;

const STORAGE_VERSION = "v1";
const STORAGE_PREFIX = `diabetes_universe_${STORAGE_VERSION}`;

const KEYS = {
  answers: `${STORAGE_PREFIX}_answers`,
  visited: `${STORAGE_PREFIX}_visited`
};

function storageAvailable() {
  try {
    if (typeof window === "undefined" || !window.localStorage) return false;
    const testKey = `${STORAGE_PREFIX}_test`;
    window.localStorage.setItem(testKey, "1");
    window.localStorage.removeItem(testKey);
    return true;
  } catch (err) {
    console.warn("Lokal lagring er ikke tilgængelig", err);
    return false;
  }
}

function parseJSON(value, fallback) {
  try {
    return value ? JSON.parse(value) : fallback;
  } catch (err) {
    console.warn("Kunne ikke læse gemte data", err);
    return fallback;
  }
}

function loadPersistedState() {
  if (!storageAvailable()) return { answers: undefined, visited: undefined };

  const answers = parseJSON(window.localStorage.getItem(KEYS.answers), undefined);
  const visited = parseJSON(window.localStorage.getItem(KEYS.visited), undefined);

  return { answers, visited };
}

function persistState({ answers, visited }) {
  if (!storageAvailable()) return;

  if (answers) {
    window.localStorage.setItem(KEYS.answers, JSON.stringify(answers));
  }

  if (visited) {
    window.localStorage.setItem(KEYS.visited, JSON.stringify(visited));
  }
}

function resetPersistedState() {
  if (!storageAvailable()) return;
  window.localStorage.removeItem(KEYS.answers);
  window.localStorage.removeItem(KEYS.visited);
}

function storageMetadata() {
  return {
    version: STORAGE_VERSION,
    keys: { ...KEYS }
  };
}

function computeBadges(visited, answers) {
  const badges = [];
  const visitedCount = Object.keys(visited).length;

  const toText = (value) => (typeof value === "string" ? value.trim() : "");

  const hasGoals =
    !!toText(answers["m1_p3_goal1"]) ||
    !!toText(answers["m1_p3_goal2"]) ||
    !!toText(answers["m1_p3_goal3"]);

  const emotionWork =
    Array.isArray(answers["m2_p1_folelser"]) && answers["m2_p1_folelser"].length > 0;

  const distressChecked =
    !!answers["m2_p2_belastning"] || !!answers["m2_p2_bekymring"]; // baseline distress

  const thoughtSheets =
    !!toText(answers["m3_p3_problem"]) &&
    (!!toText(answers["m3_p3_for"]) || !!toText(answers["m3_p3_imod"]));

  const habitsLogged =
    !!toText(answers["m4_p1_drain"]) ||
    !!toText(answers["m4_p1_fill"]) ||
    !!toText(answers["m4_p3_lomme"]);

  const finalPlan = !!toText(answers["m5_p3_plan"]);

  if (visitedCount >= 1) badges.push("Jeg er i gang");
  if (visitedCount >= 6) badges.push("God fremdrift");
  if (hasGoals) badges.push("Målsætter");
  if (emotionWork || distressChecked) badges.push("Følelsesdetektiv");
  if (thoughtSheets) badges.push("Tanketræner");
  if (habitsLogged) badges.push("Hverdagsarkitekt");
  if (finalPlan && visitedCount === FLAT_PROGRESSION.length) badges.push("Mit Diabetesliv-mester");
  if (Object.keys(answers).length >= 3) badges.push("Refleksiv bruger");

  return Array.from(new Set(badges));
}

function buildSummaryText(answers, allQuestions) {
  if (Object.keys(answers).length === 0) {
    return (
      "Her vil din personlige opsummering stå, når du har udfyldt nogle af øvelserne i appen." +
      "\n\nDu kan frit vælge, hvad du vil dele, hvis du viser det til en behandler."
    );
  }

  const lines = [];

  allQuestions.forEach((entry) => {
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

QuestionField;

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

PageContent;

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

Navigation;

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
      <div className="max-w-5xl mx-auto px-4 pb-2 flex gap-2 text-sm">
        <button
          className={`px-3 py-2 rounded-full border transition ${
            view === "univers"
              ? "bg-slate-900 text-white border-slate-900"
              : "bg-white text-slate-700 border-slate-200 hover:bg-slate-100"
          }`}
          onClick={() => onViewChange("univers")}
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
        >
          Min opsummering
        </button>
      </div>
    </header>
  );
}

ProgressHeader;

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
          <div className="flex flex-wrap gap-2 justify-end">
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
        <p className="text-xs text-slate-500 mb-2">
          {clipboardSupported
            ? "Du kan kopiere eller eksportere teksten. PDF-download bruger browserens print-til-PDF."
            : "Din browser understøtter måske ikke automatisk kopiering – du kan markere og kopiere manuelt."}
        </p>
        <p className="text-[11px] text-slate-400 mb-2">
          Data gemmes lokalt på din enhed ({storageInfo.version}). Brug "Nulstil data" hvis du vil starte forfra.
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

SummaryView;

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
            onDownloadText={() => downloadSummary("txt")}
            onDownloadPdf={() => downloadSummary("pdf")}
            onReset={resetData}
            clipboardSupported={clipboardSupported}
            storageInfo={storageInfo}
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

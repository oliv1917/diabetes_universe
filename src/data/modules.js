export const MODULES = [
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

export const FLAT_PROGRESSION = MODULES.reduce((acc, module) => {
  module.pages.forEach((page) => {
    acc.push({ moduleId: module.id, pageId: page.id });
  });
  return acc;
}, []);

export const ALL_QUESTIONS = MODULES.reduce((acc, module) => {
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

export const pageKey = (moduleId, pageId) => `${moduleId}_${pageId}`;
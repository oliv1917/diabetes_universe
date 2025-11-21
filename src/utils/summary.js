import { FLAT_PROGRESSION } from "../data/modules";

export function computeBadges(visited, answers) {
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

export function buildSummaryText(answers, allQuestions) {
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

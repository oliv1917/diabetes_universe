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

export function loadPersistedState() {
  if (!storageAvailable()) return { answers: undefined, visited: undefined };

  const answers = parseJSON(window.localStorage.getItem(KEYS.answers), undefined);
  const visited = parseJSON(window.localStorage.getItem(KEYS.visited), undefined);

  return { answers, visited };
}

export function persistState({ answers, visited }) {
  if (!storageAvailable()) return;

  if (answers) {
    window.localStorage.setItem(KEYS.answers, JSON.stringify(answers));
  }

  if (visited) {
    window.localStorage.setItem(KEYS.visited, JSON.stringify(visited));
  }
}

export function resetPersistedState() {
  if (!storageAvailable()) return;
  window.localStorage.removeItem(KEYS.answers);
  window.localStorage.removeItem(KEYS.visited);
}

export function storageMetadata() {
  return {
    version: STORAGE_VERSION,
    keys: { ...KEYS }
  };
}

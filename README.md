# Mit Diabetesliv – statisk hosting

Dette repository indeholder en statisk React-side uden build-step. For at undgå en hvid skærm på GitHub Pages skal selve siden ligge i den mappe, som Pages udstiller. GitHub bruger som standard `docs/`-mappen for projekt-sider, så en kopi af `index.html` og `diabetes_pwa_app.jsx` ligger nu i `docs/` sammen med en `.nojekyll`-fil.

## Sådan publicerer du på GitHub Pages
1. Push ændringerne til `main`.
2. Gå til **Settings → Pages** i repoet.
3. Vælg **Deploy from a branch** og sæt **Branch** til `main` og **Folder** til `/docs`.
4. Tryk **Save** og vent på byggeren (typisk under 1 minut).
5. Besøg den viste URL (`https://<brugernavn>.github.io/<repo>/`).

### Hvorfor `docs/`?
GitHub Pages serverer kun filer fra den valgte mappe. Hvis koden ligger i rodmappen, men Pages er sat til `docs/`, kan `index.html` og `.jsx` ikke hentes og siden bliver hvid. Ved at have en fuld kopi i `docs/` er alle aktiver tilgængelige for Pages, og `.nojekyll` sikrer, at filerne serveres uden Jekyll-omskrivninger.

Hvis du hellere vil bruge roden som kilde, kan du ændre **Folder** til `/ (root)` og fjerne `docs/`-mappen – så længe du opdaterer Pages-indstillingen til at matche placeringen af `index.html`.

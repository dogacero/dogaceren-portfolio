# Deployment: Domain & Azure Static Web Apps

Anleitung für Domain-Kauf und Hosting von Portfolio und Lebenslauf-App auf Azure.

---

## Phase 3: Domain kaufen

1. **Registrar wählen** (z. B. IONOS, Namecheap, Cloudflare, Google Domains).
2. **Domain registrieren** (z. B. `dogacerbozkurt.de` oder dein Wunschname).
3. **DNS-Verwaltung** bleibt beim Registrar – die nötigen Einträge (CNAME bzw. A/AAAA) trägst du dort ein, sobald die Azure Static Web Apps erstellt sind (Phase 4).

---

## Phase 4: Statische Web-Apps auf Azure hosten

### 4.1 Portfolio (Hauptseite)

1. **Azure Static Web App anlegen**
   - Im [Azure Portal](https://portal.azure.com): **Static Web App** erstellen, Quelle **GitHub**, Repository und Branch (z. B. `main`) wählen.
   - **Build-Konfiguration:**
     - **App location:** Ordner des Portfolio-Projekts (z. B. `/` wenn das Repo nur den Portfolio-Ordner enthält, oder `/Portfolio` bei Monorepo).
     - **Output location:** `dist`
     - Build-Befehl: `npm run build` (ggf. zuerst `cd Portfolio` bzw. im richtigen Ordner `npm ci`).

2. **Base-Pfad für eigene Domain**
   - Sobald du nur noch auf Azure hostest (nicht mehr GitHub Pages), in [vite.config.js](vite.config.js) `base` von `'/dogaceren-portfolio/'` auf `'/'` ändern.

3. **Custom Domain**
   - In der Static Web App: **Custom domains** → Domain hinzufügen (z. B. `www.deinedomain.de` und/oder Apex `deinedomain.de`).
   - Azure zeigt die nötigen DNS-Einträge (CNAME oder A/AAAA). Diese beim Domain-Registrar eintragen.

### 4.2 Lebenslauf (CV)-App

1. **Zweite Static Web App** für die CV-App (Create React App im Workspace-Root) anlegen.
2. **Build-Konfiguration:**
   - **App location:** Root des CV-Projekts (z. B. `/` oder Ordner des CV-Projekts im Repo).
   - **Output location:** `build`
   - Build: `npm run build` (ggf. mit `cd` in den CV-Ordner).
3. **Subdomain (optional):** In der CV-SWA unter **Custom domains** eine Subdomain eintragen (z. B. `cv.deinedomain.de`). Beim Registrar einen CNAME für diese Subdomain auf die Azure-SWA-URL setzen.

### 4.3 Nach dem Go-Live

- In [src/components/LandingPage.jsx](src/components/LandingPage.jsx) die Konstante `LEBENSLAUF_LIVE_URL` auf die echte CV-URL setzen (z. B. `https://cv.deinedomain.de`).

### Kurzüberblick

| Thema        | Portfolio       | CV (Lebenslauf)   |
| ------------ | --------------- | ----------------- |
| Build-Output | `dist` (Vite)   | `build` (CRA)     |
| `base`       | `'/'` (nach Umzug) | CRA default `'/'` |
| Domain       | z. B. `deinedomain.de` | z. B. `cv.deinedomain.de` |

---

## Reihenfolge

1. Domain kaufen (Phase 3).
2. Zwei Static Web Apps in Azure anlegen und mit GitHub verbinden (Phase 4.1 + 4.2).
3. Custom Domain für Portfolio (und optional Subdomain für CV) konfigurieren.
4. `LEBENSLAUF_LIVE_URL` in der Portfolio-App auf die gehostete CV-URL setzen (Phase 4.3).

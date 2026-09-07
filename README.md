# FitHub – Mobil Web-App

Velkommen til **FitHub**-projektet. Dette er en fuldt funktionel, mobiloptimeret web-applikation udviklet i React (Vite) mod en Node.js/Express REST-backend med en SQLite-database.

---

## Eksamensdokumentation & Rapport
Den fulde, formaterede projektrapport og tekniske dokumentation er afleveret i en separat fil i dette repository i overensstemmelse med kravspecifikationen.

**Du kan læse hele rapporten direkte her:** [Klik her for at åbne rapporten](./viktoriia_kulyk_fithub.md)
*(Husk at rette teksten i de sidste parenteser ovenfor, så det matcher det præcise filnavn, du har givet din rapport-fil!)*

---

## Hurtig opstart af projektet

For at køre applikationen lokalt på din computer, skal du åbne to terminaler og køre følgende kommandoer:

### 1. Start backend-serveren (Port 3000):
```bash
cd backend
npm install
npm run generate
npm run seed
npm run dev
```

### 2. Start frontend-klienten (Port 5173):
```bash
cd frontend
npm install
npm run dev
```

Appen vil herefter være tilgængelig i din browser på: `http://localhost:5173/`
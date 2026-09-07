# 🏋️‍♂️ FitHub – Mobil Web-App

Dette projekt er en fuldt funktionel, mobiloptimeret web-applikation udviklet til fitnesskæden **FitHub**. Appen er designet til at give kunderne en flydende, digital oplevelse, hvor de nemt kan finde fitnesshold, søge blandt aktiviteter og trænere, samt tilmelde sig hold live.

---

## 🎨 Component Library (Komponent-bibliotek)
Applikationen er bygget ud fra princippet om "Atomic Design", hvor brugerfladen er splittet op i atomare, genanvendelige komponenter, hvilket sikrer ensartet styling og minimal kode-gentagelse:

* **`SignUpBtn` (Atom):** En uafhængig, semantisk knap-komponent. Den modtager `onClick` og `text` som props. Styles dynamisk med en hvidlig baggrund og mørk tekst ud fra Figma-kravene.
* **`WorkoutCard` (Molekyle):** Et genanvendeligt kort, der præsenterer et fitnesshold med billede, holdnavn, tidsplan og deltagerantal. Bruges både på forsiden i slideren og på søgesiden.
* **`GridContainer` (Organisme):** En strukturel layout-komponent, der tvinger elementer ind i et ensartet, lodret mobil-grid med kontrolleret luft (gap).
* **`Navigation` (Organisme):** En fuldskærms menu-overlay, der fungerer dynamisk baseret på brugerens login-tilstand (viser login-formular før login, og skifter til personlige links samt logout-knap efter login).

---

## 📱 Projektets Omfang & Funktionalitet

Applikationen opfylder alle de obligatoriske krav i kravspecifikationen og er struktureret med følgende kernesider:
* **Splash Screen (Velkomstskærm):** En sporty introduktionsskærm med motiverende grafik og en central "*Train like a pro*"-knap, der fører brugeren sikkert ind til appen.
* **Frontpage (Forside):** Indeholder sektionen *Popular Classes* (et fremhævet, statisk topkort) samt *Classes for you*, som er opbygget som en vandret, swipebar karrusel optimeret til mobilskærme.
* **Search (Søgeside):** En interaktiv side med live-søgefunktionalitet, der filtrerer hold i realtid, mens brugeren taster. Siden indeholder desuden en oversigt over *Popular trainers*.
* **Class Details (Hold-detaljer):** Visning af specifikke holdoplysninger (skema, varighed, max deltagere) samt trænerprofil. Herfra kan loggede brugere tilmelde sig holdet via en dedikeret *Sign up*-komponent.
* **My Schedule (Mit Skema):** En personlig profilside for den loggede bruger, der trækker en live-oversigt over alle de hold, brugeren aktuelt er tilmeldt.
* **Navigation Overlay:** En fuldskærmsmenu styret af et burger-ikon, der dynamisk tilpasser sig brugerens status (viser login-formular før login, og skifter til personlige links samt *Log out*-knap efter login).

---

## 🛠️ Teknologisk Stack

Projektet er opbygget som en moderne Fullstack-applikation med en klar adskillelse mellem klient (frontend) og server (backend):

### Frontend:
* **React (Vite):** Valgt som udviklingsmiljø og build-tool for at sikre lynhurtig Hot Module Replacement (HMR) under kodning og optimal kompilering.
* **React Router Dom:** Håndterer applikationens single-page routing og dynamiske parametre (f.eks. hold-ID på detaljesiden).
* **SASS / SCSS Modules:** Al styling er struktureret semantisk med `@use`-syntaks og CSS Modules for at forhindre global naming-pollution og sikre genanvendelige styling-variabler.

### Backend & Database:
* **Node.js / Express:** API-server, der leverer data i JSON-format og håndterer statiske filer på port 3000.
* **SQLite & Prisma ORM:** SQLite fungerer som den lokale relationelle database, mens Prisma fungerer som en ORM-bro (Object-Relational Mapping), der gør det muligt for serveren at tilgå databasens relationer (mellem brugere, hold, billeder og bookinger) uden rå SQL-kode.

---

## ⚙️ Tekniske Løsninger & Udfordringer

### 1. Tvungen Mobilskalering via CSS
Da FitHub er bestilt som en mobil web-app, er der implementeret en global constraint i `globals.scss`. Applikationen er låst til en maksimal bredde på `430px` (svarende til en moderne smartphone) og centreret på skærmen med en blød skygge. Dette sikrer en ensartet app-oplevelse, uanset om der testes på en computer eller en fysisk telefon.

### 2. Live-synkronisering med Sessionshåndtering (`localStorage`)
For at imødekomme kravet om holdtilmelding og personlige skemaer, er der oprettet en global `AuthContext`. Ved succesfuldt login gemmes brugerens *Bearer Token* sikkert i browserens `localStorage`. Dette sikrer, at applikationen forbliver logget ind ved genindlæsning af browseren, og tokens sendes automatisk med i headeren på alle beskyttede `POST`- og `GET`-kald (fx ved oprettelse af bookinger).

### 3. API-Billedopdatering og Datastruktur
Under udviklingen opstod der en udfordring med billedstierne fra SQLite-databasen, da backenden serverer statiske filer via et `/images/`-endpoint. For at løse dette blev der udviklet en central hjælpefunktion (`getImageUrl`), som tager højde for relationsobjekter i Prisma-skemaet og automatisk genererer den korrekte, absolutte URL til serveren på port 3000. Dette sikrede, at alle hold- og trænerbilleder indlæses fejlfrit i React.

### 4. Filtrering af Systemdata
Ved udtræk af alle brugere fra `/api/users` til trænerlisten, returnerede databasen også systemets standard *Admin*-profil. For at bevare et rent design i overensstemmelse med Figma, blev der implementeret en JavaScript `.filter()`-metode i frontend-loopet, som frasorterer administrative brugere, så listen udelukkende præsenterer reelle fitnessinstruktører.

---

## 🚀 Installation & Opstart

Følg disse trin for at køre projektet lokalt:

### 1. Start Backenden:
```bash
cd backend
npm install
npm run generate
npm run seed
npm run dev
```

### 2. Start Frontenden:
```bash
cd frontend
npm install
npm run dev
```
Frontenden vil herefter køre på `http://localhost:5173`.
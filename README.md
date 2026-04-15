<div align="center">
  <img src="./assets/gimi.jpg" alt="Gimi 🐾" width="200" style="border-radius: 50%;">

  <h3>🐾 In loving memory of Gimi — the goodest boy.</h3>
  <p><em>This app exists because of you.</em></p>
</div>

---

<div align="center">

# SafePaw 🐾
### A free, offline-first PWA to keep your dog safe

![Build](https://img.shields.io/badge/build-passing-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)
![PWA](https://img.shields.io/badge/PWA-offline--ready-orange)
![React](https://img.shields.io/badge/made%20with-React-61DAFB)
![Vercel](https://img.shields.io/badge/deploy-Vercel-black)

[🌐 Open Web App](#) &nbsp;&nbsp; [⭐ Star this repo](#)

<!-- add screenshot here -->

</div>

---

## Why SafePaw?

Every dog owner knows that moment of panic. You turn around and your dog is eating something off the floor — a grape, a piece of chocolate, a plant from the garden — and you have no idea if it's dangerous. You start searching frantically, but you're on a hiking trail with no signal, or it's 2am and you're half asleep, or you just can't find a clear answer fast enough.

Gimi was a good boy. He was curious and trusting and he'd eat just about anything if you let him. He inspired this app not through a crisis, but through love — the kind of love that makes you want to be prepared, to have the right information ready before you need it.

SafePaw exists so that the next time you panic, you don't have to. It loads instantly, works without internet, and gives you clear, vetted information about what's dangerous and what to do — because when it matters, every second counts.

It's free. It always will be. For Gimi, and for every dog like him.

---

## Features

- 🍫 **25+ toxic foods** with danger levels, symptoms, and what to do
- 🌿 **19+ toxic plants** with scientific names and toxic parts
- ⚖️ **Toxicity dose calculator** — estimate risk by dog weight and amount ingested
- 🚨 **Emergency vet contacts** for Italy, USA, UK, Germany, France, Spain, and Australia
- 📴 **Works 100% offline** after first load — no signal, no problem
- 📱 **Installable on iPhone and Android** — no app store needed, just "Add to Home Screen"
- 🌙 **Dark mode / light mode** — follows your system preference, or toggle manually
- 🔍 **Instant search and danger-level filters** on every list

---

## Screenshots

<div align="center">

| Toxic Foods | Food Detail | Dose Calculator | Emergency Contacts |
|:-----------:|:-----------:|:---------------:|:------------------:|
| ![Toxic Foods list](./assets/screenshot-foods.png) | ![Food detail](./assets/screenshot-detail.png) | ![Dose Calculator](./assets/screenshot-calculator.png) | ![Emergency Contacts](./assets/screenshot-emergency.png) |
| Browse and search 25+ foods with danger ratings | Expand any item for symptoms and first-aid steps | Enter dog weight and amount eaten for a risk estimate | One-tap calling for poison control lines worldwide |

</div>

---

## Getting Started

```bash
git clone https://github.com/yourusername/safepaw
cd safepaw
npm install
npm run dev
```

The app starts at `http://localhost:5173`. The service worker is active in dev mode, so you can test offline behaviour immediately.

**Build and preview a production bundle:**

```bash
npm run build
npm run preview
```

**Lint and format:**

```bash
npm run lint
npm run format
```

---

## Deploy to Vercel

SafePaw is a static Vite app — zero backend, zero database. Deploying takes about 60 seconds.

1. Push the repo to GitHub
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**
3. Import your GitHub repository — Vercel detects Vite automatically, no configuration needed
4. Click **Deploy**
5. Your app is live at `yourapp.vercel.app` — share it with the world
6. Every future `git push` to `main` auto-deploys

> The PWA service worker and Web Manifest work correctly on Vercel out of the box. Users can install the app directly from the deployed URL on both Android and iOS.

---

## Project Structure

```
src/
├── components/          # Shared UI components
│   └── ui/              # Primitive components (button, badge, card, input)
├── data/                # All hardcoded data — edit these to add entries
│   ├── foods.ts         # Toxic foods
│   ├── plants.ts        # Toxic plants
│   ├── toxicity.ts      # Calculator substances and dose thresholds
│   └── emergency.ts     # Emergency contacts by country
├── hooks/               # Custom React hooks
│   ├── useSearch.ts             # Fuzzy search + danger-level filter
│   ├── useToxicityCalculator.ts # Dose calculator logic
│   ├── useTheme.ts              # Dark / light mode
│   └── usePWAInstall.ts         # Install prompt management
├── i18n/
│   └── en.ts            # Every user-visible string — ready for translation
├── pages/               # Route-level pages
│   ├── Foods.tsx
│   ├── Plants.tsx
│   ├── Calculator.tsx
│   └── Emergency.tsx
├── schemas/
│   └── index.ts         # Zod schemas and TypeScript types for all data
└── lib/
    └── utils.ts         # cn() Tailwind class utility
```

---

## Data Sources

The toxicological data in SafePaw is consistent with or derived from:

- [ASPCA Animal Poison Control Center](https://www.aspca.org/pet-care/animal-poison-control) — the most comprehensive publicly available database of animal toxicology
- [Pet Poison Helpline](https://www.petpoisonhelpline.com/poisons/) — clinical toxin profiles
- [CNITV](https://www.cnitv.fr) — Centre National d'Informations Toxicologiques Vétérinaires (France)
- Osweiler, G.D. — *Toxicology* (1996) — theobromine and methylxanthine thresholds
- Cortinovis, C. & Caloni, F. — *Household Food Items Toxic to Dogs and Cats* (2016)
- Gwaltney-Brant, S. — *Veterinary Toxicology: Basic and Clinical Principles* (2012)

> ⚠️ **Disclaimer:** The information in SafePaw is for educational and informational purposes only.
> It is **not** a substitute for professional veterinary advice, diagnosis, or treatment.
> Always contact a veterinarian or animal poison control center in any emergency.
> If in doubt, call a vet — not an app.

---

## Emergency Numbers

Quick reference for when every second counts.

| Country | Service | Number | Notes |
|---------|---------|--------|-------|
| 🇮🇹 Italy | Pronto Soccorso Veterinario | 112 / local vet ER | No national hotline — go to nearest 24h vet |
| 🇺🇸 USA | ASPCA Poison Control | (888) 426-4435 | 24/7 · consultation fee applies |
| 🇺🇸 USA | Pet Poison Helpline | (855) 764-7661 | 24/7 · consultation fee applies |
| 🇬🇧 UK | Animal Poison Line | 01202 509000 | 24/7 · fee applies |
| 🇩🇪 Germany | Tiergiftzentrale | +49 (0)89 19240 | Emergency toxicology line |
| 🇫🇷 France | CAPAE-Ouest | +33 2 40 68 77 40 | Centre Anti-Poisons Animal |
| 🇪🇸 Spain | SECIVAC | +34 900 200 099 | Toxicology information |
| 🇦🇺 Australia | Animal Poisons Helpline | 1300 869 738 | 24/7 · free for pet owners |

The in-app Emergency page auto-detects your country from your browser locale and includes tap-to-call buttons.

---

## Contributing

SafePaw is an open project and contributions are warmly welcome — whether that's a new food entry, a translation, a bug fix, or a better explanation of a symptom. If you're a vet or a veterinary student, your expertise would mean the world.

Everything you add might be the thing that saves someone's dog. That's not a small thing.

**Adding a new toxic food:**
Edit [`src/data/foods.ts`](./src/data/foods.ts) and follow the existing entry structure. The Zod schema in [`src/schemas/index.ts`](./src/schemas/index.ts) will catch any missing or mistyped fields at build time.

**Adding a new toxic plant:**
Edit [`src/data/plants.ts`](./src/data/plants.ts) — same pattern. Include `scientificName` and `toxicParts` where known.

**Adding a new language:**
Duplicate [`src/i18n/en.ts`](./src/i18n/en.ts), translate the strings, and open a PR. All user-visible text lives in that one file by design.

**Standard flow:**
1. Fork the repository
2. Create a branch: `git checkout -b feat/your-improvement`
3. Make your changes and run `npm run lint && npm run build`
4. Open a pull request with a short description of what you changed and why

---

## License

MIT — free to use, fork, and deploy.

*Free forever. Open source forever. For Gimi. 🐾*

---

<div align="center">
  <p><em>SafePaw was created in memory of Gimi 🐾</em></p>
  <p><em>May this help every dog and every owner who needs it.</em></p>
  <img src="./assets/gimi.jpg" alt="Gimi" width="80" style="border-radius: 50%; opacity: 0.7;">
</div>

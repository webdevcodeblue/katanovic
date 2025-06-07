# Autoservis Katanović

Moderan web sajt za autoservis kompaniju, kreiran sa Next.js 15, React 19, TypeScript i Tailwind CSS.

## Tehnologije

- **Next.js 15** - React framework sa App Router
- **React 19** - Najnovija verzija React biblioteke
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/ui** - Komponente za React
- **Lucide React** - Ikone
- **Next Themes** - Dark/Light mode

## Pokretanje u razvoju

1. Instaliraj dependencies:

```bash
npm install --legacy-peer-deps
# ili koristi custom script
npm run install:legacy
# ili
yarn install
# ili
pnpm install
```

**Napomena:** Koristi `--legacy-peer-deps` flag zbog kompatibilnosti između `date-fns` verzija.

2. Pokreni development server:

```bash
npm run dev
# ili
yarn dev
# ili
pnpm dev
```

3. Otvori [http://localhost:3000](http://localhost:3000) u browser-u.

## Build za produkciju

```bash
npm run build
npm run start
```

## Struktura projekta

```
├── app/                  # Next.js App Router
│   ├── globals.css      # Globalni stilovi
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Glavna stranica
├── components/          # React komponente
│   ├── ui/             # Shadcn/ui komponente
│   └── ...             # Ostale komponente
├── hooks/              # Custom React hooks
├── lib/                # Utility funkcije
├── public/             # Statički fajlovi
└── styles/             # Dodatni stilovi
```

## Funkcionalnosti

- 🎨 Moderni, responzivni dizajn
- 🌙 Dark/Light mode
- 📱 Mobile-first pristup
- ⚡ Optimizovane performanse
- 🔧 TypeScript podrška
- 🎯 SEO optimizacija
- 📧 Kontakt forma (ready za integraciju sa vanjskim servisima)

## Deployment

### GitHub Pages (preporučeno za ovaj setup)

Ovaj projekat je konfigurisan za automatski deployment na GitHub Pages:

1. **Upload projekta na GitHub:**

   - Kreiraj novi repository na GitHub
   - Upload sve fajlove iz ovog foldera
   - Pushuj na `main` branch

2. **Automatski deployment:**

   - GitHub Actions će automatski pokrenuti build i deployment
   - Web stranica će biti dostupna na: `https://your-username.github.io/repository-name`

3. **Aktiviranje GitHub Pages:**
   - Idi u GitHub repository settings
   - Scroll down do "Pages" sekcije
   - Pod "Source" odaberi "GitHub Actions"

### Ostali deployment opcije

Projekat može biti deploy-ovan i na:

- Vercel
- Netlify
- Firebase Hosting
- Bilo koja platforma koja podržava statičke sajtove

### Manuelni build za GitHub Pages

```bash
npm run build
# Statički fajlovi se kreiraju u 'out' folderu
```

## Konfiguracija

Sve konfiguracije se nalaze u:

- `next.config.mjs` - Next.js konfiguracija
- `tailwind.config.ts` - Tailwind CSS konfiguracija
- `tsconfig.json` - TypeScript konfiguracija

## Kontakt forma

Kontakt forma trenutno samo prikazuje poruku o uspešnom slanju. Za produkciju možete integrisati:

- **Formspree** - Jednostavna integracija sa vanjskim servisom
- **Netlify Forms** - Ako hostujete na Netlify
- **EmailJS** - Client-side email sending
- **Custom API** - Vaš vlastiti backend

## Kontakt

Za pitanja ili podršku, kontaktiraj nas.

# Instrukcije za upload na GitHub

## Korak 1: Kreiraj GitHub repository

1. Idi na https://github.com
2. Klikni "New repository"
3. Daj ime (npr. "autoservis-katanovic")
4. Ostavi public
5. NE dodavaj README, .gitignore ili license (već imamo)
6. Klikni "Create repository"

## Korak 2: Upload fajlova

1. Na novom repo stranici, klikni "uploading an existing file"
2. Drag & drop SVE fajlove iz ovog foldera
3. Ili koristi "choose your files" i odaberi sve
4. Dodaj commit message: "Initial commit - Autoservis Katanović website"
5. Klikni "Commit changes"

## Korak 3: Aktiviraj GitHub Pages

1. Idi u Settings tab na GitHub repo
2. Scroll down do "Pages" sekcije
3. Pod "Source" odaberi "GitHub Actions"
4. Sačekaj 2-3 minuta da se build završi

## Korak 4: Pristup web stranici

- Stranica će biti dostupna na: `https://your-username.github.io/repository-name`
- Link ćeš videti u Pages sekciji kada se build završi

## Napomene

- Svaki put kada pushujеš promene na main branch, stranica se automatski ažurira
- Build proces traje 2-3 minuta
- Možeš pratiti progress u "Actions" tab-u na GitHub-u

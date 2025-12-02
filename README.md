# DLS Invigo - Wielerploeg Website

Officiële website van wielerploeg DLS Invigo, gebouwd met Next.js 15 en Decap CMS.

## 🚀 Snel starten

```bash
# Installeer dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in je browser.

## 📁 Projectstructuur

```
├── content/                # Alle CMS content (markdown bestanden)
│   ├── banners/           # Homepage slider afbeeldingen
│   ├── nieuws/            # Nieuwsberichten
│   ├── renners/           # Team leden
│   ├── partners/          # Sponsor logo's
│   ├── fotoalbums/        # Fotoalbums
│   └── homepage/          # Homepage instellingen
├── public/
│   ├── admin/             # Decap CMS configuratie
│   └── uploads/           # Geüploade afbeeldingen
├── src/
│   ├── app/               # Next.js App Router pagina's
│   ├── components/        # Herbruikbare componenten
│   └── lib/               # Utility functies
└── ...config files
```

## 🎨 Branding

- **Hoofdkleuren:** Oranje (#FF6600) en Zwart (#000000)
- **Tekstkleur:** Wit
- **Font:** Inter / Montserrat

---

# 📝 Handleiding Content Beheer (voor niet-technische gebruikers)

## Hoe kom ik bij het CMS?

1. Ga naar: `https://jouw-website.vercel.app/admin`
2. Log in met je GitHub account
3. Je ziet nu het contentbeheer scherm

## Hoe voeg ik een nieuwsbericht toe?

1. Klik links op **"📰 Nieuws"**
2. Klik op **"New Nieuwsbericht"** (rechtsboven)
3. Vul de velden in:
   - **Titel**: De kop van je artikel
   - **Datum**: Wanneer is het bericht
   - **Afbeelding**: Klik op "Choose an image" → "Upload" → selecteer een foto
   - **Korte samenvatting**: 1-2 zinnen voor het overzicht
   - **Inhoud**: De volledige tekst van je artikel
4. Klik op **"Publish"** (rechtsboven)
5. Wacht 1-2 minuten, dan staat het online

## Hoe wijzig ik een nieuwsbericht?

1. Klik op **"📰 Nieuws"**
2. Klik op het bericht dat je wilt aanpassen
3. Maak je wijzigingen
4. Klik op **"Publish"**

## Hoe verwijder ik een nieuwsbericht?

1. Klik op **"📰 Nieuws"**
2. Klik op het bericht dat je wilt verwijderen
3. Klik op **"Delete"** (rode knop)
4. Bevestig

## Hoe voeg ik een nieuwe renner toe?

1. Klik op **"🚴 Renners"**
2. Klik op **"New Renner"**
3. Vul in:
   - **Naam**: Volledige naam
   - **Foto**: Upload een foto
   - **Leeftijd**: Getal
   - **Categorie**: Kies uit de lijst (Elite, Beloften, etc.)
   - **Beschrijving**: Korte bio of palmares
4. Klik op **"Publish"**

## Hoe voeg ik een fotoalbum toe?

1. Klik op **"📷 Fotoalbums"**
2. Klik op **"New Fotoalbum"**
3. Vul in:
   - **Titel**: Naam van het evenement
   - **Datum**: Datum van het evenement
   - **Beschrijving**: Korte beschrijving
   - **Foto's**: Klik op "Add image" voor elke foto die je wilt toevoegen
4. Klik op **"Publish"**

## Hoe wijzig ik de homepage slider?

1. Klik op **"🖼️ Banners (Slider)"**
2. Voeg nieuwe banners toe of wijzig bestaande
3. Elke banner heeft:
   - **Titel**: Grote tekst op de banner
   - **Afbeelding**: De achtergrond foto (gebruik grote foto's, min 1920x1080)
   - **Beschrijving**: Kleinere tekst onder de titel
   - **Link**: Waar de knop naartoe gaat

## Hoe voeg ik een partner/sponsor toe?

1. Klik op **"🤝 Partners"**
2. Klik op **"New Partner"**
3. Vul in:
   - **Naam**: Naam van het bedrijf
   - **Logo**: Upload het logo (liefst op witte achtergrond)
   - **Beschrijving**: Korte beschrijving
   - **Website**: Link naar hun website
4. Klik op **"Publish"**

## Tips voor afbeeldingen

- **Banners**: Minimaal 1920x1080 pixels (liggende foto's)
- **Nieuws afbeeldingen**: Minimaal 800x600 pixels
- **Renner foto's**: Staande foto's werken het beste
- **Partner logo's**: PNG met transparante achtergrond of witte achtergrond
- **Formaten**: JPG, PNG of WebP

## Veelgestelde vragen

**Waarom zie ik mijn wijziging niet meteen?**
De website herlaadt elke 60 seconden. Wacht even en ververs de pagina.

**Kan ik een fout ongedaan maken?**
Ja! Alle wijzigingen worden opgeslagen in GitHub. Neem contact op met de beheerder om iets terug te draaien.

**Hoe groot mogen foto's zijn?**
Probeer foto's onder de 2MB te houden voor snelle laadtijden.

---

## 🚀 Deployment naar Vercel

### Stap 1: GitHub repository klaarzetten
Zorg dat alle code in je GitHub repository staat.

### Stap 2: Vercel account aanmaken
1. Ga naar [vercel.com](https://vercel.com)
2. Klik op "Sign Up"
3. Log in met je GitHub account

### Stap 3: Project importeren
1. Klik op "New Project"
2. Selecteer de repository `DLS-Invigo/dls_invigo-website`
3. Klik op "Deploy"
4. Wacht tot de build klaar is

### Stap 4: Decap CMS configureren
1. Ga naar je GitHub repository
2. Ga naar Settings → OAuth Apps → New OAuth App
3. Vul in:
   - Application name: `DLS Invigo CMS`
   - Homepage URL: `https://jouw-website.vercel.app`
   - Authorization callback URL: `https://jouw-website.vercel.app/admin/`
4. Kopieer de Client ID en Client Secret

### Stap 5: Netlify Identity (voor authenticatie)
Optie A: Gebruik Netlify Identity (aanbevolen)
1. Maak een Netlify account
2. Maak een nieuwe site aan (hoeft niet gehost te worden)
3. Enable Identity
4. Voeg gebruikers toe

Optie B: Gebruik git-gateway met een andere provider

---

## 🛠️ Technische details

- **Framework:** Next.js 15 met App Router
- **Styling:** TailwindCSS
- **CMS:** Decap CMS (voorheen Netlify CMS)
- **Content:** Markdown bestanden in `/content`
- **Hosting:** Vercel
- **Taal:** TypeScript

### Scripts

```bash
npm run dev      # Development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Lint code
```

### Environment Variables

Geen environment variables nodig voor basis functionaliteit.

---

## 📞 Support

Vragen? Neem contact op met de ontwikkelaar.

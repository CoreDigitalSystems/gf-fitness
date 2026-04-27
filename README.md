# GF Fitness Gyms — Website

Modern React rebuild of [gffitnessgyms.com](https://gffitnessgyms.com/).

## Tech Stack

- **React 19** + TypeScript
- **Vite 8**
- **Tailwind CSS v4** (via `@tailwindcss/vite`)
- **React Router v7**
- **Vercel** deployment (SPA rewrite in `vercel.json`)
- **Google Fonts**: Roboto Flex (headings), Albert Sans (body), JetBrains Mono (labels)

## Getting Started

```bash
npm install
npm run dev      # http://localhost:8200
```

Build for production:

```bash
npm run build    # tsc --noEmit && vite build
npm run preview
```

## Project Structure

```
src/
  components/
    TopBar.tsx          # Utility bar (Corporate Wellness, Contact, Coming Soon, Franchise)
    Navbar.tsx          # Main nav with Locations + Group Classes dropdowns
    Footer.tsx          # Site footer
    ScrollToTop.tsx     # Resets scroll on route change
    Hero.tsx            # Homepage hero with rotating background
    PageHero.tsx        # Reusable hero for inner pages
    FreeTrialForm.tsx   # Lead capture (GoHighLevel embed point)
    Amenities.tsx       # Amenity grid
    GroupFitness.tsx    # Group classes feature
    TwoColumnFeatures.tsx
    CorporateWellnessPromo.tsx
    Reviews.tsx
    CTABanner.tsx
    LocationDetail.tsx  # Reusable per-location page body
    Primitives.tsx      # BtnFilled, BtnOutline, SectionLabel, useInView
    Icons.tsx
  pages/
    HomePage.tsx
    AboutPage.tsx
    AmenitiesPage.tsx
    ContactPage.tsx
    CorporateWellnessPage.tsx
    FranchisePage.tsx
    FreeTrialPage.tsx
    GroupFitnessPage.tsx
    LocationsPage.tsx
    TrainingPage.tsx
    TermsPage.tsx
    NotFoundPage.tsx
    locations/
      AcworthPage.tsx
      BristolPage.tsx
      SugarHillPage.tsx
      ComingSoonPage.tsx   # Reused for Augusta, Covington, Huntsville, Newington, Vegas, Phoenix
  App.tsx               # Layout shell + <Routes>
  main.tsx              # Entry + <BrowserRouter>
  index.css             # Tailwind import + @theme tokens (brand colors, fonts)
public/
  assets/               # Hero photos, logo, favicon
index.html              # Document head, fonts, OG tags, favicon
vercel.json             # SPA rewrite for client-side routing
BRANDING.md             # Single source of truth for visual identity
```

## Routes

| Path | Page |
|---|---|
| `/` | HomePage |
| `/about-us` | AboutPage |
| `/amenities` | AmenitiesPage |
| `/contact-us` | ContactPage |
| `/corporate-wellness` | CorporateWellnessPage |
| `/franchise` | FranchisePage |
| `/free-trial` | FreeTrialPage |
| `/group-fitness` | GroupFitnessPage |
| `/locations` | LocationsPage |
| `/training` | TrainingPage |
| `/terms` | TermsPage |
| `/location/acworth` | Acworth, GA |
| `/location/bristol` | Bristol, CT |
| `/location/sugarhill` | Sugar Hill, GA |
| `/location/{augusta\|covington\|huntsville\|newington\|vegas\|phoenix}` | Coming Soon |
| `*` | NotFoundPage |

Adding a new permanent location: create `src/pages/locations/<City>Page.tsx` wrapping `<LocationDetail>`, then register the route in `App.tsx`.

Adding a new "coming soon" location: append a `{ slug, city, state }` entry to the `comingSoonLocations` array in `App.tsx` and to the matching dropdowns in `Navbar.tsx` / `TopBar.tsx`.

## Brand Tokens

All brand colors and fonts are defined in `src/index.css` `@theme` block per [BRANDING.md](BRANDING.md). Use Tailwind utilities like `bg-gf-blue`, `text-gf-dark`, `border-gf-light-gray`, `font-[family-name:var(--font-heading)]`. Do **not** hardcode hex values — extend the theme instead.

## GoHighLevel Integration

Lead capture and booking flows are designed to integrate with GoHighLevel (GHL):

1. **`FreeTrialForm.tsx`** — currently a placeholder `<form>` that `console.log`s. Replace the form body with the GHL embedded form snippet (iframe or script), or wire it to the GHL API.
2. **`/free-trial`** route — a full page using `FreeTrialForm`, suitable as a landing page for GHL campaigns and ads.
3. **Navbar "JOIN NOW"** and CTA banners — link to `https://join.gffitnessgyms.com/` (external GHL-hosted join flow).

## Deployment (Vercel)

This project deploys to Vercel as a static SPA.

- `vercel.json` rewrites all paths to `/` so client-side routes work on hard refresh and direct links.
- Build command: `npm run build`
- Output directory: `dist`
- Push to `main` → Vercel auto-deploys.

## Environment

- All photographic assets live under `/public/assets/` and are served from the same origin.
- Favicon: `/public/assets/new-GF-logo.webp`
- OG image: `/public/assets/hero-1.jpeg`
- Responsive breakpoints: mobile (default), `md:` (768px+), `lg:` (1024px+).
- No backend dependencies — pure static SPA.

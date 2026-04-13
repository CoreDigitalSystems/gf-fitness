# GF Fitness Gyms - Website

React + Vite + Tailwind CSS rebuild of [gffitnessgyms.com](https://gffitnessgyms.com/).

## Tech Stack

- **React 19** (via Vite)
- **Tailwind CSS v4** (via `@tailwindcss/vite`)
- **Google Fonts**: Roboto Flex, Albert Sans

## Getting Started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
  components/
    TopBar.jsx          # Top utility bar (Corporate Wellness, Contact, Coming Soon, Franchise)
    Navbar.jsx          # Main navigation with dropdowns, sticky on scroll
    Hero.jsx            # Full-width image slider with auto-rotation
    FreeTrialForm.jsx   # Lead capture form (GoHighLevel integration point)
    Amenities.jsx       # Horizontally scrolling amenity cards
    GroupFitness.jsx     # Group classes feature section
    TwoColumnFeatures.jsx # Corporate Wellness + Change Your Life cards
    Reviews.jsx         # Customer reviews/testimonials section
    CTABanner.jsx       # "Become a Member" call-to-action banner
    Footer.jsx          # Site footer with links, social, franchise info
  pages/
    HomePage.jsx        # Homepage assembling all sections
  App.jsx              # Root layout (TopBar + Navbar + Pages + Footer)
  main.jsx             # React entry point
  index.css            # Tailwind imports + custom theme + animations
```

## GoHighLevel Integration Points

The following components are structured for GoHighLevel (GHL) form/widget embeds:

1. **FreeTrialForm.jsx** (`#ghl-free-trial-form`)
   - Currently a placeholder React form
   - Replace the `<form>` inside the `.ghl-form-placeholder` div with a GHL embedded form snippet
   - Fields: First Name, Last Name, Email, Phone, Location, Zip Code

2. **CTABanner.jsx**
   - "Become a Member" and "Get a Free Trial" buttons link to `/join` and `/free-trial`
   - These routes can host GHL booking/lead capture pages

3. **Navbar.jsx**
   - "JOIN NOW" and "FREE TRIAL" CTA buttons in the nav
   - Can link directly to GHL booking pages or trigger GHL modals

### How to embed a GHL form

Replace the placeholder form in `FreeTrialForm.jsx`:

```jsx
{/* Remove the <form> element and replace with: */}
<div
  id="ghl-free-trial-form"
  dangerouslySetInnerHTML={{
    __html: `<iframe src="YOUR_GHL_FORM_URL" style="width:100%;height:500px;border:none;"></iframe>`
  }}
/>
```

## Google Cloud Deployment

This project is structured for deployment to Google Cloud. Recommended options:

### Option 1: Firebase Hosting (simplest)

```bash
npm install -g firebase-tools
firebase init hosting   # Set public dir to "dist"
npm run build
firebase deploy
```

### Option 2: Cloud Run (containerized)

Create a `Dockerfile`:

```dockerfile
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
```

### Option 3: Cloud Storage + CDN

```bash
npm run build
gsutil rsync -r dist/ gs://YOUR_BUCKET_NAME
```

## Environment Notes

- All images are sourced from the live gffitnessgyms.com site
- Fonts loaded from Google Fonts CDN
- No backend dependencies - pure static SPA
- Responsive breakpoints: mobile (<768px), tablet (768-1024px), desktop (>1024px)

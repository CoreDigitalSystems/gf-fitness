# GF Fitness - Branding Rules

> Single source of truth for all visual identity, voice, and implementation standards.

---

## 1. Brand Name & Usage

| Form | Usage |
|---|---|
| **GF Fitness** | Primary brand name - all marketing, headings, UI |
| **GF Fitness Gyms** | Full legal / SEO form - page titles, metadata |
| **gffitness** | Social handles (Facebook, Instagram, YouTube) |
| **gf-fitness** | Repository / project slug |

**Rules:**
- Always capitalize "GF" - never "Gf", "gf", or "gF"
- Always capitalize "Fitness" - never "fitness" when used as the brand name
- Never abbreviate to just "GF" in user-facing copy

---

## 2. Color Palette

### Primary Colors

| Token | Hex | RGB | Usage |
|---|---|---|---|
| `--color-gf-blue` | `#0066ff` | 0, 102, 255 | Primary CTA buttons, accent links, highlights |
| `--color-gf-dark-blue` | `#0035d6` | 0, 53, 214 | Hover states, secondary accents |
| `--color-gf-black` | `#000000` | 0, 0, 0 | Navbar, footer backgrounds, primary text on light |
| `--color-gf-dark` | `#111111` | 17, 17, 17 | Dark section backgrounds |

### Neutral Colors

| Token | Hex | RGB | Usage |
|---|---|---|---|
| `--color-gf-gray` | `#f5f5f5` | 245, 245, 245 | Light section backgrounds, card backgrounds |
| `--color-gf-light-gray` | `#e5e5e5` | 229, 229, 229 | Borders, dividers |
| `--color-gf-muted` | `#f0f0f0` | 240, 240, 240 | TopBar / utility bar background |
| `--color-gf-body` | `#333333` | 51, 51, 51 | Default paragraph text |
| White `#ffffff` | - | - | Page background, text on dark |

### Color Rules

- **CTA buttons** always use `gf-blue` with `gf-dark-blue` on hover
- **Dark sections** use `gf-black` or `gf-dark` background with white text
- **Light sections** use `gf-gray` or white background with dark text
- **Never** use a third accent color - blue is the only brand accent
- **Overlays** on images use black at 60-70% opacity
- **CTA banner overlays** use dark blue at 70% opacity
- **Star ratings** use `#facc15` (Tailwind yellow-400)

---

## 3. Typography

### Font Families

| Role | Font | Variable | Weights | Source |
|---|---|---|---|---|
| **Headings** | Roboto Flex | `--font-heading` | 100-1000 (variable) | Google Fonts |
| **Body** | Albert Sans | `--font-body` | 100-900 + italics | Google Fonts |

### Type Scale (Tailwind classes)

| Element | Size (mobile) | Size (desktop) | Weight | Font |
|---|---|---|---|---|
| Hero H1 | `text-4xl` | `text-5xl` / `text-6xl` | `font-bold` | Heading |
| Section Title (H2) | `text-3xl` | `text-4xl` | `font-bold` | Heading |
| Card Title (H3) | `text-xl` | `text-2xl` | `font-bold` / `font-semibold` | Heading |
| Subtitle / Label | `text-sm` | `text-sm` | `font-semibold` | Body |
| Body Text | `text-base` | `text-lg` | `font-normal` | Body |
| Small / Caption | `text-xs` | `text-sm` | `font-normal` | Body |
| Button Text | `text-sm` | `text-base` | `font-bold` | Body |

### Typography Rules

- Headings (h1-h6) always use `font-[family-name:var(--font-heading)]` or the CSS rule
- Body text always uses Albert Sans (set on `body`)
- Section subtitles (e.g. "Something For Everyone") are `text-sm font-semibold uppercase tracking-widest text-gf-blue`
- Button text is always **uppercase** and **bold** with `tracking-wide`
- Never mix heading and body fonts within the same element
- Line height: headings use `leading-tight`, body uses default or `leading-relaxed`

---

## 4. Logo

| Asset | URL | Format |
|---|---|---|
| Primary Logo | `gffitnessgyms.com/.../new-GF-logo.png` | PNG (transparent) |
| Favicon | `gffitnessgyms.com/.../cropped-GA-Fitness-fvaicon.png` | PNG |

### Logo Rules

- Display at `h-12 w-auto` (48px height) in navigation
- Always display on dark backgrounds (logo is white/light)
- Maintain aspect ratio - never stretch or distort
- Minimum clear space: 16px on all sides
- **TODO:** Host logo locally in `/public` for reliability

---

## 5. Buttons & Interactive Elements

### Button Styles

| Type | Background | Text | Border | Example |
|---|---|---|---|---|
| **Primary CTA** | `bg-gf-blue` | White, bold, uppercase | None | "JOIN NOW", "SUBMIT" |
| **Primary Hover** | `bg-gf-dark-blue` | White | None | - |
| **Outlined** | Transparent | White, bold, uppercase | `border-2 border-white` | "FREE TRIAL" |
| **Outlined Hover** | White | `text-gf-blue` | White | - |
| **Banner Secondary** | Transparent | White | `border-2 border-white` | "Get a Free Trial" |
| **Banner Primary** | White | `text-blue-900` | None | "become a member" |

### Button Rules

- Shape: `rounded-full` (pill shape) for all buttons
- Padding: `px-6 py-3` minimum (larger CTAs use `px-8 py-4`)
- Text: Always `font-bold uppercase tracking-wide`
- Transitions: `transition-colors duration-200`
- All buttons must have visible hover state changes
- Never use sharp corners (rounded-none) on buttons
- Icon arrows (right chevron) on hero CTA buttons only

---

## 6. Cards & Containers

### Card Styles

| Type | Background | Border | Radius | Shadow |
|---|---|---|---|---|
| **Amenity Card** | `bg-gf-gray` | None | `rounded-2xl` | None (shadow on hover) |
| **Review Card** | White | `border border-gray-100` | `rounded-2xl` | `shadow-sm` |
| **Testimonial Card** | White | None | `rounded-2xl` | `shadow-lg` |
| **Feature Card** | Image + overlay | None | `rounded-2xl` | None |
| **Form Card** | White | None | `rounded-2xl` | `shadow-lg` |

### Container Rules

- All cards use `rounded-2xl` (16px border radius)
- Content sections use `max-w-7xl mx-auto` for centering
- Section padding: `py-16 px-4` mobile, `py-20 px-6` desktop
- Image cards use `overflow-hidden` with hover scale effect (`hover:scale-105`)

---

## 7. Layout & Spacing

### Breakpoints

| Prefix | Min Width | Usage |
|---|---|---|
| (none) | 0px | Mobile-first base styles |
| `md:` | 768px | Tablet and up |
| `lg:` | 1024px | Desktop and up |

### Grid Patterns

- **Two-column feature:** `grid md:grid-cols-2` with equal columns
- **Three-column cards:** `grid md:grid-cols-3 gap-8`
- **Form layout:** `grid md:grid-cols-2 gap-12` (form + testimonial)
- **Footer:** `grid md:grid-cols-2 lg:grid-cols-4 gap-8`

### Spacing Rules

- Section vertical padding: `py-16` to `py-20`
- Gap between cards: `gap-6` to `gap-8`
- Content max width: `max-w-7xl` (1280px)
- Inner padding: `p-6` to `p-8` on cards
- Hero minimum height: `min-h-[500px]` / `85vh`

---

## 8. Imagery

### Image Guidelines

- **Hero images:** Full-width, high-quality gym/fitness photography
- **Feature cards:** Action shots of members using facilities
- **Overlays:** Always apply dark overlay for text readability
  - Standard: `bg-black/60` to `bg-black/70`
  - CTA Banner: `from-blue-900/90 to-black/70`
- **Hover effects:** `group-hover:scale-110 transition-transform duration-700`
- All decorative images use `object-cover` for consistent framing

### Image Sources

- Currently served from `gffitnessgyms.com` WordPress CDN
- **TODO:** Optimize and host critical images locally
- Formats: JPG for photos, WebP for optimized versions, PNG for logos

---

## 9. Voice & Tone

### Brand Voice

| Attribute | Description |
|---|---|
| **Motivational** | Inspire action - "Change Your Body. Change Your Life." |
| **Inclusive** | Everyone belongs - "Something For Everyone" |
| **Community-focused** | Emphasize togetherness - "community with a passion" |
| **Confident** | Lead with certainty - "We're so confident you'll love..." |
| **Action-oriented** | Strong verbs - "Crush", "Become", "Explore", "Join" |

### Copy Rules

- **Headings:** Short, punchy, motivational. Title case.
- **CTAs:** Always uppercase. Action verb first. ("JOIN NOW", "BECOME A MEMBER", "EXPLORE ALL AMENITIES")
- **Body copy:** Conversational but professional. Second person ("you", "your").
- **Avoid:** Jargon, passive voice, negative framing, discount-heavy language
- **Primary tagline:** "Change Your Body. Change Your Life." - use consistently
- **Free trial messaging** is a key conversion driver - always prominent

### Content Hierarchy

1. **Motivational hook** (headline)
2. **Value proposition** (subhead/body)
3. **Social proof** (reviews, testimonials)
4. **Call to action** (button)

---

## 10. Animations & Interactions

| Animation | Duration | Easing | Usage |
|---|---|---|---|
| `scroll-left` | 30s | linear, infinite | Amenities carousel |
| `fade-in` | 1s | ease-in-out | Hero slide transitions |
| Button hover | 200ms | `transition-colors` | All buttons |
| Card hover scale | 700ms | `transition-transform` | Feature image cards |
| Icon hover scale | 300ms | `transition-transform` | Amenity icons |
| Dropdown menu | 200ms | `transition-all` | Nav dropdowns |

### Animation Rules

- Carousel pauses on hover (`animation-play-state: paused`)
- Hero auto-rotates every 5 seconds
- Never use jarring or excessive animations
- All hover effects must have smooth transitions (min 200ms)
- Mobile: reduce or disable non-essential animations

---

## 11. Form Design

### Input Styles

- Background: White
- Border: `border border-gray-300` (default), `border-gf-blue` (focus)
- Radius: `rounded-lg`
- Padding: `px-4 py-3`
- Focus ring: `ring-2 ring-gf-blue/20`
- Label: Above input, `text-sm font-medium text-gray-700`

### Form Rules

- Always include privacy/consent checkbox
- Submit button spans full width on mobile
- Group related fields side-by-side on desktop (`grid grid-cols-2 gap-4`)
- Location selector uses native `<select>` element
- Placeholder for GoHighLevel integration: `id="ghl-free-trial-form"`

---

## 12. Social Media & External Links

| Platform | Handle | URL Pattern |
|---|---|---|
| Facebook | gffitness | `facebook.com/gffitness` |
| Instagram | gffitness | `instagram.com/gffitness` |
| YouTube | @gffitness | `youtube.com/@gffitness` |

- Social icons in footer use `w-10 h-10` circles with `bg-white/10` background
- Hover: `bg-gf-blue` transition
- All external links open in `_blank` with `rel="noopener noreferrer"`

---

## 13. Tailwind Token Reference

All brand tokens are defined in `src/index.css` under `@theme`:

```css
@theme {
  --color-gf-blue: #0066ff;
  --color-gf-dark-blue: #0035d6;
  --color-gf-black: #000000;
  --color-gf-dark: #111111;
  --color-gf-gray: #f5f5f5;
  --color-gf-light-gray: #e5e5e5;
  --color-gf-muted: #f0f0f0;
  --color-gf-body: #333333;
  --font-heading: "Roboto Flex", sans-serif;
  --font-body: "Albert Sans", sans-serif;
}
```

Usage in Tailwind classes: `bg-gf-blue`, `text-gf-dark`, `border-gf-light-gray`, `font-[family-name:var(--font-heading)]`

---

*Last updated: 2026-04-14*

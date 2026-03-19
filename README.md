# Ocean Blue 🌊

A modern, fully responsive tourism website for **Ocean Blue** — a Zanzibar-based agency specializing in sea excursions, beach experiences, and island transportation.

---

## Tech Stack

- **React 19** + **TypeScript** — strict mode, fully typed
- **Tailwind CSS v4** — utility-first styling with dark mode support
- **Motion** — smooth page transitions and scroll animations
- **React Router v7** — client-side routing with lazy loading
- **React Hook Form** + **Zod** — multi-step booking form with validation
- **TanStack Query** + **Axios** — async state management and API calls
- **Lucide React** — icon library
- **next-themes** — dark/light mode toggle
- **Biome** — linting and formatting

---

## Pages

- **Home** — hero, featured excursions, why choose us, testimonials
- **Excursions** — filterable grid with detail modal
- **Transportation** — transfer services
- **About** — story, stats, core values
- **Gallery** — filterable photo grid with lightbox
- **Contact** — contact info and map
- **Booking** — dedicated multi-step booking form
- **Privacy Policy** + **Terms & Conditions**

---

## Features

- Multi-step booking form with Zod validation (on blur)
- Excursion detail modal with included/not included breakdown
- Gallery lightbox with keyboard navigation
- Smooth page transitions with Motion
- Scroll-triggered animations
- Dark / light mode with CSS-only theme switching
- Fully responsive — mobile first
- Lazy loaded pages for fast initial load
- Sticky frosted glass navbar
- Scroll to top on navigation

---

## Project Structure
```
src/
├── api/          # Axios instance and API functions
├── components/   # Reusable UI, layout, booking, and section components
├── data/         # Static content for excursions and transportation
├── hooks/        # Custom React hooks
├── pages/        # Page components organized by route
├── providers/    # App-level providers (theme, query)
├── routes/       # Centralized route definitions
├── schemas/      # Zod validation schemas
├── types/        # TypeScript type definitions
└── utils/        # Helper and formatter functions
```

---

## Getting Started
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

---

## Images

Place all images in the `public/images/` folder following this structure:
```
public/images/
├── hero/
├── excursions/
├── transportation/
└── gallery/
```
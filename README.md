# The Benedicta College — LMS Website

React + TypeScript + Vite frontend for the Benedicta College Learning Management
System website, built page by page from the brochure and page-map you provided.

## Run it

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Stack

- **React 18 + TypeScript + Vite**
- **React Router v6** for page routing
- **Tailwind CSS** for styling, with a custom design token set (`tailwind.config.js`)
- **Framer Motion** for scroll reveals, hover motion, and the animated stat counters
- **lucide-react** for icons

## What's built so far

- ✅ **Home** (`/`) — fully built: hero with animated stat counters, vision & mission,
  news & announcements, upcoming events, academic programs, gallery + testimonials
  carousels, and closing call-to-action.
- ✅ **About** (`/about`) — fully built: page hero, school history, vision & mission
  (shared with Home), core values grid, leadership message, and accreditation &
  affiliations.
- 🚧 **Contact, Login, and the 4 dashboards** — routed and reachable, but currently
  placeholder pages, so the app runs and every link works today.

## Build order (from your page map)

1. **Home** ✅
2. **About** ✅
3. **Contact** — address, phone, email, map, enquiry form, social links
4. **Login** — role-based auth routing to the 4 dashboards, password recovery,
   "remember me"
5. **Super Admin Dashboard**
6. **Teacher Dashboard**
7. **Student Dashboard**
8. **Parent Dashboard**

Just tell me "build the About page" (or whichever is next) and I'll fill in that
page and hand you an updated project.

## Project structure

```
src/
  components/
    layout/     Navbar, Footer, PageHero (interior page banner), ComingSoon (placeholder)
    sections/   VisionMission (shared between Home and About)
    ui/          Button, Reveal (scroll animation), Counter, Carousel
  data/
    content.ts  All editable site copy (news, events, programs, testimonials,
                stats, history, core values, leadership, accreditation)
  pages/
    Home/        Hero, NewsEvents, AcademicPrograms, GalleryTestimonials, CTASection
    About/       History, CoreValues, LeadershipMessage, Accreditation
    Contact/
    Login/
    dashboards/  SuperAdminDashboard, TeacherDashboard, StudentDashboard,
                 ParentDashboard
  App.tsx        Routes + shared layout
  main.tsx       Entry point
```

## Notes

- Gallery images are currently styled placeholder blocks (no real photos were
  provided) — swap them for real photography in
  `src/pages/Home/sections/GalleryTestimonials.tsx` and `src/data/content.ts`
  whenever you have assets.
- All copy lives in `src/data/content.ts` so you can edit news, events, stats,
  and programs without touching component code.

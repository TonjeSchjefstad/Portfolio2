# Portfolio 2 — Tonje Schjefstad

## Description
This is my portfolio website, built as part of my second year of Frontend Development studies at Noroff. The site showcases three projects I've worked on during my studies, Alera Online Shop, Pulse Social Media App, and Maison Ardéne Auction House. Each project has a teaser card on the home page, and a dedicated article page with full details, links to the live site and GitHub repository.

The portfolio is built with React, TypeScript, Tailwind CSS, and Vite, using React Router for client-side navigation. It is deployed on Vercel.

Live Demo: https://tonje-schjefstad.vercel.app/ 

## Getting Started

### Installing

1. Clone the repository:
```bash
git clone https://github.com/TonjeSchjefstad/Portfolio2.git
```

2. Install dependencies:
```bash
npm install
```

### Running

Start the development server with:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

## Project Structure

```bash
├── public/
│   └── favicon.png
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   ├── projects/
│   │   │   └── ProjectCard.tsx
│   │   └── ScrollToTop.tsx
│   ├── data/
│   │   └── projects.ts
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── ProjectDetail.tsx
│   │   └── NotFound.tsx
│   ├── types/
│   │   └── project.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── README.md
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Folder Highlights

- src/assets/ - Images and static files
- src/components/ - Reusable UI components
- src/data/ - Project data
- src/pages/ - Page components
- src/types/ - TypeScript interfaces

## Tech Stack
- React
- TypeScript
- Tailwind CSS
- Vite
- React Router
- Vercel

## Projects Featured

- **Alera Online Shop** - Next.js, TypeScript, Tailwind → [Live Demo](https://alera-online-shop.vercel.app/)
- **Pulse Social Media App** - JavaScript, Tailwind → [Live Demo](https://pulse-social-media-app.netlify.app/#/)
- **Maison Ardéne Auction House** - JavaScript, Tailwind → [Live Demo](https://maison-ardene.netlify.app/)

## Site Features
- Hero section
- About Me section with background and tech skills
- Project cards with filtering by technology
- Project detail pages with live and GitHub links
- Responsive design for mobile and desktop
- Smooth scroll navigation

## Contact

### Tonje Schjefstad
Frontend Development Student
Noroff School of Technology and Digital Media

- LinkedIn: https://www.linkedin.com/in/tonjeschjefstad/
- GitHub: https://github.com/TonjeSchjefstad
- Student email: tonsch03841@stud.noroff.no
- Private email: Tonje_schjefen@hotmail.com

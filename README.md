# Course Navigator

An academic course planning application for B.Tech students to organize their degree requirements, select courses across categories, and manage credits — all in one place.

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white)

## Features

- **Category-based course selection** — Browse courses grouped by Programming, Technology, Basic Science, and Engineering Minor
- **Credit tracking** — Visual credit meter showing used vs. allowed credits per category
- **EduRev options** — Configure achievement details, upload documents, and track status for each course
- **Term-based organization** — Courses organized by year and semester with status indicators
- **Preview & finalize** — Review complete selections before locking them in
- **Persistent state** — Selections saved to localStorage across sessions

## Tech Stack

- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) — build tool
- [Tailwind CSS](https://tailwindcss.com/) — styling
- [shadcn/ui](https://ui.shadcn.com/) — component library
- [React Router](https://reactrouter.com/) — routing
- [React Query](https://tanstack.com/query) — state management
- [Framer Motion](https://www.framer.com/motion/) — animations

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- npm

### Installation

```sh
git clone https://github.com/<your-username>/course-navigator.git
cd course-navigator
npm install
```

### Development

```sh
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

```sh
npm run build
```

### Run Tests

```sh
npm test
```

## Project Structure

```
src/
├── components/       # UI components (layout, categories, shared, etc.)
├── context/          # React context providers
├── data/             # Mock data and type definitions
├── hooks/            # Custom React hooks
├── lib/              # Utility functions
├── pages/            # Route-level page components
└── test/             # Test setup and test files
```

## Deployment

Configured for [Netlify](https://www.netlify.com/) out of the box — see [netlify.toml](netlify.toml).

## License

[MIT](LICENSE)

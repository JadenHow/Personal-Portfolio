# Jaden How – Personal Portfolio

My personal portfolio site: an intro, about me and skills, resume, projects, a timeline of my work and projects, and a contact form. It supports light and dark mode and remembers your choice.

Built with React 18, styled-components and [Vite](https://vite.dev).

## Getting started

Requires Node.js 20.19+ or 22.12+.

```bash
npm install
npm run dev
```

The dev server runs at http://localhost:3000.

## Scripts

| Command           | What it does                                   |
| ----------------- | ---------------------------------------------- |
| `npm run dev`     | Start the dev server with hot reload           |
| `npm run build`   | Build the production site into `build/`        |
| `npm run preview` | Serve the production build locally             |
| `npm run lint`    | Run ESLint on `src/`                           |

## Project structure

```
index.html              Page shell, metadata, theme variables
src/
  App.jsx               Page sections in order
  data.js               Projects shown in the Projects section
  components/
    timeline/
      timelineData.js   Work, project and education entries
  contexts/             Theme and window-size providers
  assets/               Photos and icons
```

## Updating content

- **Projects:** edit `src/data.js`. Each entry has a title, GitHub link, icon, gradient and tech tagline.
- **Timeline:** edit `src/components/timeline/timelineData.js`. Entries are listed newest first.
- **Colours:** the light and dark theme colours are CSS variables in `index.html`.

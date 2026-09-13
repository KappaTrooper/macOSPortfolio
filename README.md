# macOS Portfolio

A personal portfolio site styled as a macOS desktop — complete with a menu bar, dock, and draggable app windows — built with React, Vite, and Tailwind CSS.

**Live site:** [ajaysingh.ca](https://ajaysingh.ca)

## Features

- **macOS-style desktop UI** — menu bar with clock and system icons, a dock, and app windows that open, close, and stack like a real OS
- **Light/dark appearance mode** — toggle from the menu bar's Appearance menu, backed by a persisted theme store
- **Finder** — browse folders and files, including inner folders
- **Safari** — renders blog posts and opens external links
- **Terminal** — a simple interactive terminal window
- **Text/Image file viewers** — open `.txt` files and images, with PDF support for the Resume window
- **Photos & Contact** apps
- **Responsive layout** — tailored behavior for tablet and mobile screens

## Tech Stack

- [React 19](https://react.dev/) + [Vite](https://vite.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Zustand](https://zustand-demo.pmnd.rs/) for window, location, and theme state
- [GSAP](https://gsap.com/) for animation
- [react-pdf](https://github.com/wojtekmaj/react-pdf) for the Resume viewer
- [Lucide](https://lucide.dev/) icons

## Getting Started

```bash
npm install
npm run dev
```

Other scripts:

```bash
npm run build    # production build
npm run preview  # preview the production build locally
npm run lint     # run ESLint
```

## Project Structure

```
src/
  components/   # Navbar, Dock, AppearanceMenu, window controls, welcome screen
  windows/      # App windows: Finder, Safari, Terminal, Contact, Photos, Resume, etc.
  store/        # Zustand stores (window, location, theme)
  hooks/        # Shared hooks (theme application, mobile detection)
  constants/    # Static content and configuration
```

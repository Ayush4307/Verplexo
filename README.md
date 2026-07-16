Verplexo

Verplexo is a full-stack React web application designed for a software development agency. It provides a public-facing corporate website alongside an interactive client portal and dynamic project estimation tools.

Table of Contents

Architecture Overview
Core Features
Technology Stack
Installation & Setup
Project Structure
Available Scripts

Architecture Overview

The application is a Single Page Application (SPA) built on React 18 and Vite. State management is handled natively via React Hooks (useState, useEffect), and client-side routing is managed via react-router-dom. The UI is constructed using modular, reusable functional components styled with Tailwind CSS utility classes.

Core Features

Interactive Project Estimator: A dynamic calculation engine that processes base service costs, timeline modifiers (e.g., rush fees), and optional add-ons to generate real-time budget estimates.
Client Dashboard Portal: A state-driven interface that filters active project datasets using multi-parameter queries (string matching and category array inclusion).
Automated Routing Behaviors: Implements a custom ScrollToTop hook injected at the Router context level to manually manage window scroll positioning during path mutations.
Form Handling: Controlled components for lead capture and contact requests, complete with mock API submission states and user feedback UI.

Technology Stack

Core: React 18, TypeScript
Build System: Vite
Routing: React Router v6
Styling: Tailwind CSS (v4)
Icons: Lucide React
Fonts: Google Fonts (Plus Jakarta Sans)

Project Structure
text

src/
├── components/          # Reusable UI components
│   ├── dashboard/       # Client portal components (DashboardSidebar, ServiceCard)
│   ├── home/            # Homepage sections (HeroSection, AboutSection, ServicesGrid, ContactForm)
│   ├── services/        # Logic-heavy dynamic components (ProjectEstimator)
│   ├── Footer.tsx       # Global footer
│   └── Navbar.tsx       # Global navigation (Includes Dark Mode Toggle)
├── pages/               # Top-level route components
│   ├── AboutPage.tsx
│   ├── CareersPage.tsx
│   ├── ContactPage.tsx
│   ├── DashboardPage.tsx
│   ├── HomePage.tsx
│   ├── PortfolioPage.tsx
│   ├── PrivacyPage.tsx
│   ├── ServicesPage.tsx
│   └── TermsPage.tsx
├── utils/               # Helper functions, hooks, and configuration
│   ├── motion.ts        # Framer Motion animation variants (fadeIn, slideIn, scaleUp)
│   ├── ScrollToTop.tsx  # Router scroll-to-top utility
│   └── ThemeContext.tsx # Dark mode state management and local storage persistence
├── App.tsx              # Root component, Router configuration, and ThemeProvider mount
├── index.css            # Global Tailwind CSS entry point & Dark Mode variable config
└── main.tsx             # React DOM rendering entry point

Available Scripts
In the project directory, you can run:

npm run dev: Starts the Vite development server.
npm run build: Compiles the TypeScript code and bundles the application for production.
npm run preview: Bootstraps a local static web server that serves the production bundle.
npm run lint: Runs ESLint to statically analyze the codebase for errors.

Author - Ayush Singh Pawar , Ayush4307 
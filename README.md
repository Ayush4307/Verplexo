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
│   ├── dashboard/       # Client portal components (Sidebar, Cards)
│   ├── home/            # Homepage sections (Hero, About, ServicesGrid)
│   ├── services/        # Logic-heavy components (ProjectEstimator)
│   ├── Footer.tsx       # Global footer
│   └── Navbar.tsx       # Global navigation
├── pages/               # Top-level route components
│   ├── AboutPage.tsx
│   ├── ContactPage.tsx
│   ├── DashboardPage.tsx
│   └── ...
├── utils/               # Helper functions and hooks (ScrollToTop)
├── App.tsx              # Root component and Router configuration
├── index.css            # Global Tailwind CSS entry point
└── main.tsx             # React DOM rendering entry point


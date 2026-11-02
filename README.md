<div align="center">

<img src="src/assets/img/logo-black.jpg" alt="AiLife logo" width="360" padding-left="10px"/>

# AiLife — AI SaaS Website

### A modern multi-page website template for AI and SaaS products

Built with React, Vite, and Bootstrap. Includes marketing pages, pricing, FAQs, blog layouts, and account screens.

<p>
  <img src="https://img.shields.io/badge/React-18-149ECA?logo=react&logoColor=white" alt="React 18" />
  <img src="https://img.shields.io/badge/Vite-4-646CFF?logo=vite&logoColor=white" alt="Vite 4" />
  <img src="https://img.shields.io/badge/Bootstrap-5-7952B3?logo=bootstrap&logoColor=white" alt="Bootstrap 5" />
  <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="MIT License" />
</p>

[Getting started](#getting-started) · [Features](#features) · [Pages](#pages) · [Deployment](#deployment) · [Author](#author)

</div>

> **Project scope:** This repository contains the website front end. Login, registration, contact forms, and pricing UI are presentation-only unless you connect them to a backend or service.

# Overview

AiLife is a React website starter for presenting an AI or SaaS product. It provides reusable page sections, responsive layouts, client-side navigation, and sample content that you can adapt to your own product.

# Features

- Multi-page navigation with React Router
- Homepage sections for product features, services, testimonials, pricing, and FAQs
- About, team, use-case, blog, contact, login, and registration pages
- Responsive layouts, carousels, and scroll animations
- Vercel rewrite configuration for direct navigation to client-side routes

# Built with

- [React](https://react.dev/) 18
- [Vite](https://vitejs.dev/) 4
- [React Router](https://reactrouter.com/) 6
- [Bootstrap](https://getbootstrap.com/) 5
- AOS, React Icons, React Multi Carousel, and React Type Animation

# Getting started

### Prerequisites

- Node.js 18 or later
- npm

### Installation

```bash
git clone https://github.com/HowdyMohsin/ailife-ai-saas-website.git
cd ailife-ai-saas-website
npm install
npm run dev
```

Open the local URL shown in your terminal (Vite usually starts at `http://localhost:5173`).

### Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create the production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

# Pages

| Route | Page |
| --- | --- |
| `/` | `Home` |
| `/about` | About |
| `/team` | Team |
| `/faq` | FAQ |
| `/usecase` | Use cases |
| `/usecase_details` | Use-case details |
| `/all_blog` | Blog listing |
| `/single_blog` | Blog post |
| `/pricing` | Pricing |
| `/contact` | Contact |
| `/login` | Login |
| `/register` | Registration |
| `/404` | Not found |

# Project structure

```text
src/
  Components/   Reusable sections and shared UI
  Layout/       Shared site layout
  Pages/        Route-level pages
  Route/        React Router configuration
  Utlits/       Sample content and data
  assets/       Images and other local assets
public/         Static files
```

# Run and deploy

Use **npm or Yarn**, not both for the same install. Run these commands from the project directory.

### Run locally

Install dependencies, then start the development server:

```bash
# npm
npm install
npm run dev
```

```bash
# Yarn
yarn
yarn dev
```

Open the local URL printed in your terminal (usually `http://localhost:5173`).

### Create a production build

Build the site and optionally preview it locally:

```bash
# npm
npm run build
npm run preview
```

```bash
# Yarn
yarn build
yarn preview
```

Vite writes the ready-to-deploy static files to **`dist/`** (not `public/`). Upload the contents of `dist/` to your static web host, or connect the repository to a deployment provider such as Vercel. The included `vercel.json` provides a rewrite so React Router routes can be opened directly on Vercel. For other hosts, configure a single-page application fallback to `index.html`.

# External resources

The site loads the Mulish font from Google Fonts and embeds a YouTube video. Visitors may connect to those providers when the relevant page loads. Review their terms and your privacy requirements before deploying.

# Author

**Mohsin Ali**  
MERN Stack Developer & JavaScript Specialist

- GitHub: [@HowdyMohsin](https://github.com/HowdyMohsin)
- Portfolio: [mohsin-ali--portfolio.vercel.app](https://mohsin-ali--portfolio.vercel.app)

# License

This project is licensed under the [MIT License](https://opensource.org/license/mit/). The license applies to the project's original materials; third-party images, fonts, and other assets may be subject to their own terms.

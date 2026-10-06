# LuvConvos - Communication Intelligence Platform

<p align="center">
  <picture>
    <source media="(prefers-reduced-motion: reduce)" srcset="assets/hero/hero-reduced.svg">
    <source media="(prefers-color-scheme: light)" srcset="assets/hero/hero-light.svg">
    <img src="assets/hero/hero-motion.svg" alt="luvconvos — animated project plate showing request &rarr; authenticate &rarr; authorise &rarr; record &rarr; reject. Motion depicts this project's real state transition." width="100%">
  </picture>
</p>

<p align="center">
  <picture>
    <source media="(prefers-reduced-motion: reduce)" srcset="assets/hero/computational-dark.svg">
    <source media="(prefers-color-scheme: light)" srcset="assets/hero/computational-light.svg">
    <img src="assets/hero/computational-motion.svg" alt="State machine: request &rarr; authenticate &rarr; authorise &rarr; record &rarr; reject." width="100%">
  </picture>
</p>

Practice the conversation before it matters.

## Features

- AI-powered conversation simulation
- Relationship profiling
- Communication analytics
- Voice-preserving message rewriting
- Privacy-first architecture

## Technologies

- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui
- Supabase
- Vercel AI SDK

## Development

First, install dependencies:

```bash
npm install
```

Set up your environment variables:

```bash
cp .env.example .env.local
```

Run the development server:

```bash
npm run dev
```

## Environment Variables

See `.env.example` for required variables.

## Deployment

The production environment is automatically deployed to Vercel on push to main.

## Architecture Decisions

- App Router for routing
- Server Components by default
- Edge runtime for AI routes
- Supabase for data persistence

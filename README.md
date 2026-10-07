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

<!-- TRILLIONX:presentation:begin -->

### Animated surfaces

Generated from this repository's own source tree: every count, route and module below was measured, not written by hand.

#### Identity

<picture>
  <source media="(prefers-reduced-motion: reduce)" srcset="https://raw.githubusercontent.com/M4G3LL4N0/luvconvos/main/.github-art/surfaces/hero-reduced.svg">
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/M4G3LL4N0/luvconvos/main/.github-art/surfaces/hero-light.svg">
  <img alt="Identity diagram for luvconvos" src="https://raw.githubusercontent.com/M4G3LL4N0/luvconvos/main/.github-art/surfaces/hero.svg">
</picture>

#### Entry points

<picture>
  <source media="(prefers-reduced-motion: reduce)" srcset="https://raw.githubusercontent.com/M4G3LL4N0/luvconvos/main/.github-art/surfaces/terminal-reduced.svg">
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/M4G3LL4N0/luvconvos/main/.github-art/surfaces/terminal-light.svg">
  <img alt="Entry points diagram for luvconvos" src="https://raw.githubusercontent.com/M4G3LL4N0/luvconvos/main/.github-art/surfaces/terminal.svg">
</picture>

#### Modules

<picture>
  <source media="(prefers-reduced-motion: reduce)" srcset="https://raw.githubusercontent.com/M4G3LL4N0/luvconvos/main/.github-art/surfaces/architecture-reduced.svg">
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/M4G3LL4N0/luvconvos/main/.github-art/surfaces/architecture-light.svg">
  <img alt="Modules diagram for luvconvos" src="https://raw.githubusercontent.com/M4G3LL4N0/luvconvos/main/.github-art/surfaces/architecture.svg">
</picture>

#### Routes

<picture>
  <source media="(prefers-reduced-motion: reduce)" srcset="https://raw.githubusercontent.com/M4G3LL4N0/luvconvos/main/.github-art/surfaces/data_flow-reduced.svg">
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/M4G3LL4N0/luvconvos/main/.github-art/surfaces/data_flow-light.svg">
  <img alt="Routes diagram for luvconvos" src="https://raw.githubusercontent.com/M4G3LL4N0/luvconvos/main/.github-art/surfaces/data_flow.svg">
</picture>

#### Primitives

<picture>
  <source media="(prefers-reduced-motion: reduce)" srcset="https://raw.githubusercontent.com/M4G3LL4N0/luvconvos/main/.github-art/surfaces/state_machine-reduced.svg">
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/M4G3LL4N0/luvconvos/main/.github-art/surfaces/state_machine-light.svg">
  <img alt="Primitives diagram for luvconvos" src="https://raw.githubusercontent.com/M4G3LL4N0/luvconvos/main/.github-art/surfaces/state_machine.svg">
</picture>

#### Composition

<picture>
  <source media="(prefers-reduced-motion: reduce)" srcset="https://raw.githubusercontent.com/M4G3LL4N0/luvconvos/main/.github-art/surfaces/component_map-reduced.svg">
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/M4G3LL4N0/luvconvos/main/.github-art/surfaces/component_map-light.svg">
  <img alt="Composition diagram for luvconvos" src="https://raw.githubusercontent.com/M4G3LL4N0/luvconvos/main/.github-art/surfaces/component_map.svg">
</picture>

#### Build and tests

<picture>
  <source media="(prefers-reduced-motion: reduce)" srcset="https://raw.githubusercontent.com/M4G3LL4N0/luvconvos/main/.github-art/surfaces/build-reduced.svg">
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/M4G3LL4N0/luvconvos/main/.github-art/surfaces/build-light.svg">
  <img alt="Build and tests diagram for luvconvos" src="https://raw.githubusercontent.com/M4G3LL4N0/luvconvos/main/.github-art/surfaces/build.svg">
</picture>

#### Workflow

<picture>
  <source media="(prefers-reduced-motion: reduce)" srcset="https://raw.githubusercontent.com/M4G3LL4N0/luvconvos/main/.github-art/surfaces/workflow-reduced.svg">
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/M4G3LL4N0/luvconvos/main/.github-art/surfaces/workflow-light.svg">
  <img alt="Workflow diagram for luvconvos" src="https://raw.githubusercontent.com/M4G3LL4N0/luvconvos/main/.github-art/surfaces/workflow.svg">
</picture>

#### Domain

<picture>
  <source media="(prefers-reduced-motion: reduce)" srcset="https://raw.githubusercontent.com/M4G3LL4N0/luvconvos/main/.github-art/surfaces/domain-reduced.svg">
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/M4G3LL4N0/luvconvos/main/.github-art/surfaces/domain-light.svg">
  <img alt="Domain diagram for luvconvos" src="https://raw.githubusercontent.com/M4G3LL4N0/luvconvos/main/.github-art/surfaces/domain.svg">
</picture>

#### Identity object

<picture>
  <source media="(prefers-reduced-motion: reduce)" srcset="https://raw.githubusercontent.com/M4G3LL4N0/luvconvos/main/.github-art/surfaces/footer-reduced.svg">
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/M4G3LL4N0/luvconvos/main/.github-art/surfaces/footer-light.svg">
  <img alt="Identity object diagram for luvconvos" src="https://raw.githubusercontent.com/M4G3LL4N0/luvconvos/main/.github-art/surfaces/footer.svg">
</picture>

<!-- TRILLIONX:presentation:end -->

<!-- TRILLIONX:evidence:begin -->

## What is measurable here

Generated by `.github-art` from the source tree at publish time.

| Signal | Value |
| --- | --- |
| HTTP routes | 24 |
| Entry points | 1 |
| Module roots | 4 |
| Test files | 0 |
| CI workflows | 0 |
| Distinctive stack | Supabase, Zod |
| Status | PROTOTYPE |
| Evidence confidence | E3 |
| Animated surfaces | 10 |

<!-- TRILLIONX:evidence:end -->

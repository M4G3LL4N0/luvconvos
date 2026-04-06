# LuvConvos - Communication Intelligence Platform

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

import { Button } from "@/components/ui/button";
import { ProductHonestyNote } from "@/components/ProductHonestyNote";
import { ArrowRight, Sparkles, Zap, Share2, MessageCircle, BarChart, Shield, Heart } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-gradient-to-b from-slate-950 via-indigo-950/95 to-slate-950 motion-fade-up">
      <section className="container relative flex flex-col items-center justify-center px-4 py-32 text-center md:py-40" data-reveal>
        <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/10 via-transparent to-transparent" />

        <div data-stagger className="z-20 mb-6 flex items-center gap-2 rounded-full border border-indigo-400/20 bg-gradient-to-r from-indigo-900/30 via-violet-900/30 to-pink-900/30 px-5 py-2.5 backdrop-blur-sm">
          <Sparkles className="h-4 w-4 text-indigo-300" />
          <span className="text-sm font-medium text-indigo-200">Relationship communication intelligence</span>
        </div>

        <h1 className="z-20 mx-auto max-w-5xl text-5xl font-semibold leading-[1.05] tracking-tight text-zinc-50 sm:text-6xl md:text-7xl">
          Practice the conversation{" "}
          <span className="bg-gradient-to-r from-amber-400 via-orange-300 to-pink-400 bg-clip-text text-transparent">
            before it matters.
          </span>
        </h1>

        <p className="z-20 mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-300 md:text-xl">
          Paste real threads, understand patterns, and simulate better drafts—without flattening your voice
          into generic AI texting advice.
        </p>

        <div data-stagger className="z-20 mt-10 flex flex-wrap justify-center gap-4">
          <Button size="lg" asChild variant="default">
            <Link href="/dashboard">
              Start practicing <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="secondary" size="lg" asChild className="border-white/15 bg-white/10 text-white hover:bg-white/15">
            <Link href="/how-it-works">
              <Zap className="mr-2 h-4 w-4" />
              How it works
            </Link>
          </Button>
        </div>

        <div className="pointer-events-none absolute inset-0 z-0 select-none">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
        </div>
      </section>

      <section className="container relative px-4 py-20" data-reveal>
        <div className="mx-auto max-w-5xl rounded-[32px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl">
          <div data-stagger className="grid gap-10 md:grid-cols-2 md:items-start">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-white/45">The problem</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-50">
                High-stakes texts are easy to mis-send.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-zinc-400">
                When someone matters, ambiguity hurts. Most tools optimize for fast replies—not how your
                message will land in their nervous system, attachment cues, and timing.
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-white/45">The solution</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-50">
                Person-specific intelligence from your own threads.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-zinc-400">
                LuvConvos models tone, attachment tendencies, and friction patterns from pasted history—then
                simulates safer drafts that still sound like you.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container relative px-4 py-24" data-reveal>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-zinc-300">
            Transform your communication in 4 simple steps
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="motion-card motion-hover-lift glass-panel p-6">
            <div className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-500/10">
                <MessageCircle className="h-6 w-6 text-indigo-400" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-zinc-100">Import Conversations</h3>
              <p className="mt-2 text-sm text-zinc-400">
                Bring in your chat history to analyze communication patterns
              </p>
            </div>
          </Card>

          <Card className="motion-card motion-hover-lift glass-panel p-6">
            <div className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/10">
                <BarChart className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-zinc-100">Understand Patterns</h3>
              <p className="mt-2 text-sm text-zinc-400">
                Discover emotional triggers, tone patterns, and response tendencies
              </p>
            </div>
          </Card>

          <Card className="motion-card motion-hover-lift glass-panel p-6">
            <div className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-500/10">
                <Heart className="h-6 w-6 text-pink-400" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-zinc-100">Simulate Responses</h3>
              <p className="mt-2 text-sm text-zinc-400">
                Test different approaches and see likely outcomes
              </p>
            </div>
          </Card>

          <Card className="motion-card motion-hover-lift glass-panel p-6">
            <div className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500/10">
                <Shield className="h-6 w-6 text-cyan-400" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-zinc-100">Improve Communication</h3>
              <p className="mt-2 text-sm text-zinc-400">
                Get personalized recommendations to strengthen your relationships
              </p>
            </div>
          </Card>
        </div>
      </section>

      <section className="container relative px-4 py-24 bg-gradient-to-b from-black/50 to-black/20" data-reveal>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl">
            What It Understands
          </h2>
          <p className="mt-4 text-lg text-zinc-300">
            Deep insights into the nuances of communication
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="motion-card motion-hover-lift glass-panel p-6">
            <h3 className="text-lg font-semibold text-zinc-100">Tone Analysis</h3>
            <p className="mt-2 text-sm text-zinc-400">
              Understand the emotional tone of messages and how it affects responses
            </p>
          </div>
          <div className="motion-card motion-hover-lift glass-panel p-6">
            <h3 className="text-lg font-semibold text-zinc-100">Emotional Signals</h3>
            <p className="mt-2 text-sm text-zinc-400">
              Detect subtle emotional cues and patterns in conversations
            </p>
          </div>
          <div className="motion-card motion-hover-lift glass-panel p-6">
            <h3 className="text-lg font-semibold text-zinc-100">Response Patterns</h3>
            <p className="mt-2 text-sm text-zinc-400">
              Identify how different approaches lead to different outcomes
            </p>
          </div>
          <div className="motion-card motion-hover-lift glass-panel p-6">
            <h3 className="text-lg font-semibold text-zinc-100">Clarity vs Ambiguity</h3>
            <p className="mt-2 text-sm text-zinc-400">
              Measure how clear your communication is and where misunderstandings occur
            </p>
          </div>
          <div className="motion-card motion-hover-lift glass-panel p-6">
            <h3 className="text-lg font-semibold text-zinc-100">Trigger Points</h3>
            <p className="mt-2 text-sm text-zinc-400">
              Discover what topics or approaches trigger positive or negative responses
            </p>
          </div>
          <div className="motion-card motion-hover-lift glass-panel p-6">
            <h3 className="text-lg font-semibold text-zinc-100">Responsiveness</h3>
            <p className="mt-2 text-sm text-zinc-400">
              Analyze how quickly and effectively communication flows between parties
            </p>
          </div>
        </div>
      </section>

      <section className="container relative px-4 py-24" data-reveal>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl">
            Why It&apos;s Different
          </h2>
          <p className="mt-4 text-lg text-zinc-300">
            A new approach to improving communication
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="motion-card motion-hover-lift glass-panel p-6">
            <h3 className="text-lg font-semibold text-zinc-100">Not a Chatbot</h3>
            <p className="mt-2 text-sm text-zinc-400">
              We analyze real conversations, not generate generic responses
            </p>
          </div>
          <div className="motion-card motion-hover-lift glass-panel p-6">
            <h3 className="text-lg font-semibold text-zinc-100">Personalized Insights</h3>
            <p className="mt-2 text-sm text-zinc-400">
              Tailored recommendations based on your unique communication style
            </p>
          </div>
          <div className="motion-card motion-hover-lift glass-panel p-6">
            <h3 className="text-lg font-semibold text-zinc-100">Preserves Your Voice</h3>
            <p className="mt-2 text-sm text-zinc-400">
              Helps you communicate better while staying true to yourself
            </p>
          </div>
        </div>
      </section>

      <section className="container relative px-4 py-24 bg-gradient-to-b from-black/50 to-black/20" data-reveal>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl">
            Privacy & Trust
          </h2>
          <p className="mt-4 text-lg text-zinc-300">
            Your conversations stay under your control
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="motion-card motion-hover-lift glass-panel p-6">
            <h3 className="text-lg font-semibold text-zinc-100">Private by Design</h3>
            <p className="mt-2 text-sm text-zinc-400">
              Built so sensitive threads stay user-controlled—share deliberately, store responsibly.
            </p>
          </div>
          <div className="motion-card motion-hover-lift glass-panel p-6">
            <h3 className="text-lg font-semibold text-zinc-100">User-Controlled Data</h3>
            <p className="mt-2 text-sm text-zinc-400">
              You decide what to share and what to keep private
            </p>
          </div>
          <div className="motion-card motion-hover-lift glass-panel p-6">
            <h3 className="text-lg font-semibold text-zinc-100">Built for Clarity</h3>
            <p className="mt-2 text-sm text-zinc-400">
              Our goal is to help you communicate better, not manipulate
            </p>
          </div>
        </div>
      </section>

      <section className="container relative px-4 py-24" data-reveal>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl">
            Practice the conversation before it matters
          </h2>
          <p className="mt-4 text-lg text-zinc-300">
            Built for emotionally important conversations—not disposable chatter.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild variant="default">
              <Link href="/dashboard">
                Start practicing <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="secondary" size="lg" asChild className="border-white/15 bg-white/10 text-white hover:bg-white/15">
              <Link href="/simulator">
                <Zap className="mr-2 h-4 w-4" />
                Open simulator
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container relative px-4 py-16" data-reveal>
        <div className="relative z-20 premium-card p-8">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">Example Analysis</h3>
              <p className="text-zinc-300">Sample worksheet of how a pasted thread can be labeled — not a measured score.</p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="text-zinc-400 hover:bg-zinc-700/50 hover:text-cyan-400"
              disabled
              aria-label="Share analysis"
              type="button"
            >
              <Share2 className="mr-2 h-4 w-4" /> Share
            </Button>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border border-zinc-700/50 p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-2 w-2 rounded-full bg-cyan-400" />
                <h4 className="font-medium text-zinc-100">Your Tone Profile</h4>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-xs text-zinc-400">Warmth (sample label)</span>
                    <span className="text-xs text-zinc-300">Illustrated bar</span>
                  </div>
                  <div className="h-1.5 w-full bg-zinc-700 rounded-full overflow-hidden">
                    <div className="h-full bg-cyan-400 rounded-full w-3/4" />
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-zinc-700/50 p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-2 w-2 rounded-full bg-amber-400" />
                <h4 className="font-medium text-zinc-100">What Works Best</h4>
              </div>
              <ul className="space-y-2 text-sm text-zinc-300">
                <li className="flex items-start gap-2">
                  <span className="text-amber-400">•</span> Asking open-ended questions
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400">•</span> Matching their response length
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400">•</span> Using positive reinforcement
                </li>
              </ul>
            </div>

            <div className="relative overflow-hidden rounded-lg border border-zinc-700/50 bg-gradient-to-b from-zinc-900/50 to-zinc-800/30 p-6">
              <div className="absolute top-0 right-0 px-2 py-1 bg-amber-900/50 text-xs text-amber-300 rounded-bl-lg">
                Deeper views
              </div>
              <div className="flex items-center gap-3 mb-3">
                <div className="h-2 w-2 rounded-full bg-violet-400" />
                <h4 className="font-medium text-zinc-100">Advanced Insights</h4>
              </div>
              <p className="text-sm text-zinc-400 mb-4">
                Open the simulator for pattern notes on a thread you paste. No customer counts or success rates are claimed here.
              </p>
              <Button size="sm" variant="secondary" className="w-full hover:bg-zinc-700" asChild>
                <Link href="/simulator">
                  <Zap className="mr-2 h-4 w-4" />
                  Open simulator
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <ProductHonestyNote status="demo" />
    </div>
  );
}

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Share2 } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-gradient-to-b from-blue-950/90 via-indigo-950/90 to-gray-950">
      {/* Hero Section */}
      <section className="container relative flex flex-col items-center justify-center px-4 py-40 text-center">
        <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/10 via-transparent to-transparent" />
        
        <div className="z-20 flex items-center gap-2 mb-6 px-5 py-2.5 bg-gradient-to-r from-indigo-900/30 via-violet-900/30 to-pink-900/30 rounded-full border border-indigo-400/20 backdrop-blur-sm">
          <Sparkles className="h-4 w-4 text-indigo-300" />
          <span className="text-sm font-medium text-indigo-200">Powered by real AI analysis</span>
        </div>

        <h1 className="z-20 mx-auto max-w-4xl text-6xl font-bold leading-[1.05] tracking-tight text-zinc-50 sm:text-7xl">
          Master important conversations <span className="bg-gradient-to-r from-amber-400 to-pink-400 bg-clip-text text-transparent">before</span> they happen
        </h1>
        
        <p className="z-20 mx-auto mt-6 max-w-xl text-lg leading-8 text-zinc-300">
          Get AI-powered insights into how people actually respond to your communication style, with personalized improvements and simulations.
        </p>

        <div className="z-20 mt-10 flex gap-4">
          <Button size="lg" asChild variant="default">
            <Link href="/sign-up">
              Try Free <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="secondary" size="lg" asChild>
            <Link href="/pricing">
              <Zap className="mr-2 h-4 w-4" />
              Get Pro
            </Link>
          </Button>
        </div>

        <div className="pointer-events-none absolute inset-0 z-0 select-none">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
        </div>
      </section>
      
      {/* Demo Insights */}
      <section className="container relative px-4 py-16">
        <div className="absolute inset-0 bg-gradient-to-r from-black from-10% via-black/40 via-50% to-black to-90% z-10" />
        <div className="relative z-20 premium-card p-8">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">Example Analysis</h3>
              <p className="text-zinc-300">See what our AI reveals about your communication:</p>
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
                    <span className="text-xs text-zinc-400">Warmth</span>
                    <span className="text-xs text-zinc-300">72/100</span>
                  </div>
                  <div className="h-1.5 w-full bg-zinc-700 rounded-full overflow-hidden">
                    <div className="h-full bg-cyan-400 rounded-full" style={{ width: '72%' }} />
                  </div>
                </div>
                {/* Additional metrics would go here */}
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

            <div className="rounded-lg border border-zinc-700 bs50 bg-gradient-to-b from-zinc-900/50 to-zinc-800/30 p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 px-2 py-1 bg-amber-900/50 text-xs text-amber-300 rounded-bl-lg">
                Pro Feature
              </div>
              <div className="flex items-center gap-3 mb-3">
                <div className="h-2 w-2 rounded-full bg-violet-400" />
                <h4 className="font-medium text-zinc-100">Advanced Insights</h4>
              </div>
              <p className="text-sm text-zinc-400 mb-4">
                Unlock deeper relationship patterns and communication analytics.
              </p>
              <Button size="sm" variant="secondary" className="w-full hover:bg-zinc-700">
                <Zap className="mr-2 h-4 w-4" />
                Upgrade Now
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

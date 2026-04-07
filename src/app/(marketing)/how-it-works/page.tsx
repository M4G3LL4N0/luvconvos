import { Card } from "@/components/ui/card";
import { MessageCircle, BarChart, Heart, Shield } from "lucide-react";

export default function HowItWorksPage() {
  return (
    <div className="container relative flex min-h-screen flex-col overflow-hidden bg-gradient-to-b from-blue-950/90 via-indigo-950/90 to-gray-950">
      <section className="container relative px-4 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-50 sm:text-5xl">
            How It Works
          </h1>
          <p className="mt-4 text-lg text-zinc-300">
            Transform your communication in 4 simple steps
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="glass-panel p-6">
            <div className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-500/10">
                <MessageCircle className="h-6 w-6 text-indigo-400" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-zinc-100">Import Conversations</h3>
              <p className="mt-2 text-sm text-zinc-400">
                Bring in your chat history from messaging apps to analyze communication patterns
              </p>
            </div>
          </Card>

          <Card className="glass-panel p-6">
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

          <Card className="glass-panel p-6">
            <div className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-500/10">
                <Heart className="h-6 w-6 text-pink-400" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-zinc-100">Simulate Responses</h3>
              <p className="mt-2 text-sm text-zinc-400">
                Test different approaches and see likely outcomes before you send
              </p>
            </div>
          </Card>

          <Card className="glass-panel p-6">
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
    </div>
  );
}

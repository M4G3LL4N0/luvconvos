import { Card } from "@/components/ui/card";
import { BrainCircuit, ShieldCheck, Sparkles } from "lucide-react";

export default function TechnologyPage() {
  return (
    <div className="container relative flex min-h-screen flex-col overflow-hidden bg-gradient-to-b from-blue-950/90 via-indigo-950/90 to-gray-950">
      <section className="container relative px-4 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-50 sm:text-5xl">
            Our Technology
          </h1>
          <p className="mt-4 text-lg text-zinc-300">
            Advanced AI for deeper understanding of human communication
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="glass-panel p-6">
            <div className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-500/10">
                <BrainCircuit className="h-6 w-6 text-indigo-400" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-zinc-100">Natural Language Processing</h3>
              <p className="mt-2 text-sm text-zinc-400">
                Advanced NLP models analyze conversation patterns and emotional cues
              </p>
            </div>
          </Card>

          <Card className="glass-panel p-6">
            <div className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/10">
                <Sparkles className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-zinc-100">Predictive Modeling</h3>
              <p className="mt-2 text-sm text-zinc-400">
                Machine learning predicts likely responses based on communication patterns
              </p>
            </div>
          </Card>

          <Card className="glass-panel p-6">
            <div className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500/10">
                <ShieldCheck className="h-6 w-6 text-cyan-400" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-zinc-100">Privacy First</h3>
              <p className="mt-2 text-sm text-zinc-400">
                End-to-end encryption ensures your conversations stay private
              </p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}

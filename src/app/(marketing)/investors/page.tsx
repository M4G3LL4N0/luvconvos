import { Card } from "@/components/ui/card";
import { TrendingUp, Rocket, PieChart, Globe } from "lucide-react";

export default function InvestorsPage() {
  return (
    <div className="container relative flex min-h-screen flex-col overflow-hidden bg-gradient-to-b from-blue-950/90 via-indigo-950/90 to-gray-950">
      <section className="container relative px-4 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-50 sm:text-5xl">
            For Investors
          </h1>
          <p className="mt-4 text-lg text-zinc-300">
            Building the future of human communication
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="glass-panel p-6">
            <div className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-500/10">
                <TrendingUp className="h-6 w-6 text-indigo-400" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-zinc-100">Market Opportunity</h3>
              <p className="mt-2 text-sm text-zinc-400">
                $10B+ market in communication improvement and relationship management
              </p>
            </div>
          </Card>

          <Card className="glass-panel p-6">
            <div className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/10">
                <Rocket className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-zinc-100">Product Vision</h3>
              <p className="mt-2 text-sm text-zinc-400">
                Become the essential tool for improving human relationships
              </p>
            </div>
          </Card>

          <Card className="glass-panel p-6">
            <div className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-500/10">
                <PieChart className="h-6 w-6 text-pink-400" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-zinc-100">Business Model</h3>
              <p className="mt-2 text-sm text-zinc-400">
                Freemium SaaS with premium features and enterprise offerings
              </p>
            </div>
          </Card>

          <Card className="glass-panel p-6">
            <div className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500/10">
                <Globe className="h-6 w-6 text-cyan-400" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-zinc-100">Global Potential</h3>
              <p className="mt-2 text-sm text-zinc-400">
                Universal need for better communication across cultures and languages
              </p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}

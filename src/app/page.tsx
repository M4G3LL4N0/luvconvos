import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-gradient-to-b from-black via-zinc-900 to-zinc-800">
      {/* Hero Section */}
      <section className="container relative flex flex-col items-center justify-center px-4 py-32 text-center">
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-zinc-900/60 to-zinc-900" />
        
        <h1 className="z-20 mx-auto max-w-4xl text-5xl font-bold leading-[1.1] tracking-tighter text-zinc-100 sm:text-6xl">
          Practice the conversation <span className="text-cyan-400">before</span> it matters.
        </h1>
        
        <p className="z-20 mx-auto mt-6 max-w-xl text-lg leading-8 text-zinc-300">
          LuvConvos helps you communicate better with people you care about by simulating real conversations while preserving your authentic voice.
        </p>

        <div className="z-20 mt-10 flex gap-4">
          <Button size="lg" asChild>
            <Link href="/sign-up">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/features">
              Learn More
            </Link>
          </Button>
        </div>

        <div className="pointer-events-none absolute inset-0 z-0 select-none">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
        </div>
      </section>
      
      {/* Value Props */}
      <section className="container grid grid-cols-1 gap-12 px-4 py-24 md:grid-cols-3">
        <div className="rounded-xl border border-zinc-700/50 bg-zinc-800/50 p-8 backdrop-blur-sm">
          <h3 className="mb-4 text-xl font-semibold text-cyan-400">Reduce Emotional Misfires</h3>
          <p className="text-zinc-400">
            Test different phrasing and see how someone might actually respond before sending.
          </p>
        </div>
        <div className="rounded-xl border border-zinc-700/50 bg-zinc-800/50 p-8 backdrop-blur-sm">
          <h3 className="mb-4 text-xl font-semibold text-cyan-400">Preserve Your Voice</h3>
          <p className="text-zinc-400">
            Our AI adapts to your unique communication style rather than replacing it.
          </p>
        </div>
        <div className="rounded-xl border border-zinc-700/50 bg-zinc-800/50 p-8 backdrop-blur-sm">
          <h3 className="mb-4 text-xl font-semibold text-cyan-400">Data Privacy First</h3>
          <p className="text-zinc-400">
            Your conversations stay private. We never train on your personal data.
          </p>
        </div>
      </section>
    </div>
  );
}

import Link from 'next/link'
import {
  Activity,
  BarChart2,
  MessageSquare,
  Plus,
  Sparkles,
  UploadCloud,
} from 'lucide-react'

import { RecentActivity } from '@/components/recent-activity'
import { RelationshipCard } from '@/components/relationship-card'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.18),transparent_30%),radial-gradient(circle_at_20%_20%,rgba(251,146,60,0.12),transparent_25%),linear-gradient(180deg,#020617_0%,#0f172a_100%)] px-6 py-10 text-white">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8">
        <section className="overflow-hidden rounded-[32px] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(251,146,60,0.24),transparent_28%),radial-gradient(circle_at_top_right,rgba(99,102,241,0.22),transparent_30%),rgba(15,23,42,0.72)] p-6 shadow-[0_24px_80px_rgba(2,6,23,0.45)] md:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <Badge className="border-white/10 bg-white/10 text-white hover:bg-white/10">
                LuvConvos Control Center
              </Badge>
              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
                Your communication intelligence dashboard
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70 md:text-base">
                Track relationship patterns, review simulations, and see what helps conversations
                land better over time.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                className="bg-gradient-to-r from-orange-400 via-pink-400 to-violet-500 text-white shadow-[0_10px_40px_rgba(244,114,182,0.25)] hover:opacity-95"
              >
                <Link href="/relationships">
                  <Plus className="mr-2 h-4 w-4" />
                  New relationship
                </Link>
              </Button>

              <Button
                variant="outline"
                className="border-white/15 bg-white/5 text-white hover:bg-white/10"
              >
                <UploadCloud className="mr-2 h-4 w-4" />
                Import conversation
              </Button>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-white">Your relationships</h2>
              <p className="mt-1 text-sm text-white/55">
                Open a workspace to simulate messages, review signals, and improve outcomes.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
              <RelationshipCard
                id="alex-morgan"
                name="Alex Morgan"
                status="active"
                lastContact="2 hours ago"
                communicationScore={88}
                relationshipType="Partner"
              />
              <RelationshipCard
                id="taylor-kim"
                name="Taylor Kim"
                status="needs follow up"
                lastContact="1 day ago"
                communicationScore={62}
                relationshipType="Dating"
              />
              <RelationshipCard
                id="jamie-rivera"
                name="Jamie Rivera"
                status="cooling"
                lastContact="3 days ago"
                communicationScore={54}
                relationshipType="Complicated"
              />
            </div>

            <Card className="border-white/10 bg-white/5 backdrop-blur-xl">
              <CardHeader>
                <CardTitle className="text-white">Today&apos;s Communication Insight</CardTitle>
                <p className="text-sm text-white/60">
                  Personalized guidance based on your recent interactions
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4 rounded-2xl border border-emerald-400/15 bg-emerald-400/5 p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-400/10 text-emerald-200">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Lead with clarity before emotion</h3>
                    <p className="mt-1 text-sm leading-7 text-white/70">
                      Your recent simulations suggest direct statements work better than long
                      explanations when tension is already present.
                    </p>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <p className="text-xs uppercase tracking-[0.18em] text-white/45">
                      Best Performing Strategy
                    </p>
                    <p className="mt-2 text-sm leading-7 text-white/70">
                      Short, direct questions with clear intent
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <p className="text-xs uppercase tracking-[0.18em] text-white/45">
                      What to Avoid
                    </p>
                    <p className="mt-2 text-sm leading-7 text-white/70">
                      Long explanations when tension is present
                    </p>
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-full border-white/15 bg-white/5 text-white hover:bg-white/10"
                >
                  <Sparkles className="mr-2 h-4 w-4" />
                  Generate New Insight
                </Button>
              </CardContent>
            </Card>

            <RecentActivity />
          </div>

          <div className="space-y-6">
            <Card className="border-white/10 bg-white/5 backdrop-blur-xl">
              <CardHeader>
                <CardTitle className="text-white">Quick actions</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4">
                <Button
                  variant="outline"
                  className="justify-start border-white/15 bg-white/5 text-white hover:bg-white/10"
                >
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Run a new simulation
                </Button>
                <Button
                  variant="outline"
                  className="justify-start border-white/15 bg-white/5 text-white hover:bg-white/10"
                >
                  <BarChart2 className="mr-2 h-4 w-4" />
                  Generate a fresh report
                </Button>
                <Button
                  variant="outline"
                  className="justify-start border-white/15 bg-white/5 text-white hover:bg-white/10"
                >
                  <Activity className="mr-2 h-4 w-4" />
                  Review pattern changes
                </Button>
              </CardContent>
            </Card>

            <Card className="border-white/10 bg-white/5 backdrop-blur-xl">
              <CardHeader>
                <CardTitle className="text-white">Workspace stats</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {[
                  {
                    label: 'Simulations this week',
                    value: '18',
                    hint: 'More comparisons create stronger pattern memory.',
                  },
                  {
                    label: 'Reports generated',
                    value: '7',
                    hint: 'Reports are building a richer understanding over time.',
                  },
                  {
                    label: 'Relationships tracked',
                    value: '3',
                    hint: 'Each workspace learns from its own message history.',
                  },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/10 bg-black/20 p-4"
                  >
                    <p className="text-xs uppercase tracking-[0.18em] text-white/45">
                      {stat.label}
                    </p>
                    <p className="mt-2 text-3xl font-semibold text-white">{stat.value}</p>
                    <p className="mt-2 text-sm text-white/60">{stat.hint}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </main>
  )
}

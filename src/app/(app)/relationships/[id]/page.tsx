import Link from 'next/link'
import {
  ArrowLeft,
  BarChart3,
  Clock3,
  MessageSquare,
  Sparkles,
  UploadCloud,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { RelationshipHeader } from '@/components/relationship-header'
import { ToneIndicator } from '@/components/tone-indicator'
import { InsightsPanel } from '@/components/insights-panel'

export default async function RelationshipPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.18),transparent_30%),radial-gradient(circle_at_20%_20%,rgba(251,146,60,0.12),transparent_25%),linear-gradient(180deg,#020617_0%,#0f172a_100%)] px-6 py-10 text-white">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8">
        <div className="flex items-center justify-between">
          <Button
            asChild
            variant="ghost"
            className="text-white/70 hover:bg-white/10 hover:text-white"
          >
            <Link href="/relationships">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to relationships
            </Link>
          </Button>

          <Badge className="border-white/10 bg-white/10 text-white hover:bg-white/10">
            Workspace ID: {id}
          </Badge>
        </div>

        <RelationshipHeader
          name="Ava"
          relationshipType="Girlfriend"
          status="Active"
          summary="See how tone, timing, and clarity shape the conversation. LuvConvos helps you understand what lands, what backfires, and how to respond without losing your voice."
        />

        <section className="grid gap-6 xl:grid-cols-[1.35fr_0.95fr]">
          <div className="space-y-6">
            <Card className="border-white/10 bg-white/5 backdrop-blur-xl">
              <CardHeader>
                <CardTitle className="text-white">Communication profile</CardTitle>
                <p className="text-sm text-white/60">
                  A living profile built from message history, response patterns, and simulation
                  behavior.
                </p>
              </CardHeader>

              <CardContent>
                <div className="grid gap-6 sm:grid-cols-2">
                  <ToneIndicator
                    title="Your Tone"
                    tone="neutral"
                    confidence={72}
                    highlights={[
                      'Usually clear and measured',
                      'Can become too dense under stress',
                      'Responds best when direct intent is stated early',
                    ]}
                  />

                  <ToneIndicator
                    title="Their Tone"
                    tone="warm"
                    confidence={81}
                    highlights={[
                      'Responds to warmth and grounded reassurance',
                      'Dislikes ambiguity when tension is present',
                      'Short follow-ups often work better than long explanations',
                    ]}
                  />
                </div>
              </CardContent>
            </Card>

            <InsightsPanel
              title="What the relationship responds to"
              summary="High-signal patterns derived from the current conversation memory."
              strengths={[
                'Warm clarity outperforms emotional over-explaining.',
                'Short questions create faster, cleaner replies.',
                'Affection plus directness tends to lower friction.',
              ]}
              risks={[
                'Long defensive paragraphs can raise distance.',
                'Unclear intent invites misinterpretation.',
                'Urgent wording can make the conversation feel heavier than needed.',
              ]}
            />

            <Card className="border-white/10 bg-white/5 backdrop-blur-xl">
              <CardHeader>
                <CardTitle className="text-white">Conversation history preview</CardTitle>
                <p className="text-sm text-white/60">
                  Recent imports and parsed message memory for this relationship.
                </p>
              </CardHeader>

              <CardContent className="space-y-4">
                {[
                  {
                    role: 'You',
                    body: 'I want to talk in a way that feels clearer and less reactive.',
                    time: 'Today · 8:42 PM',
                  },
                  {
                    role: 'Ava',
                    body: 'That helps. I just need you to be direct instead of making me guess what you mean.',
                    time: 'Today · 8:44 PM',
                  },
                  {
                    role: 'You',
                    body: 'Got it. I can do that better.',
                    time: 'Today · 8:45 PM',
                  },
                ].map((message, index) => (
                  <div
                    key={`${message.time}-${index}`}
                    className="rounded-2xl border border-white/10 bg-black/20 p-4"
                  >
                    <div className="mb-2 flex items-center justify-between gap-3">
                      <p className="text-sm font-semibold text-white">{message.role}</p>
                      <p className="text-xs text-white/45">{message.time}</p>
                    </div>
                    <p className="text-sm leading-7 text-white/70">{message.body}</p>
                  </div>
                ))}

                <div className="mt-6">
                  <Button
                    variant="outline"
                    className="w-full border-white/15 bg-white/5 text-white hover:bg-white/10"
                  >
                    <UploadCloud className="mr-2 h-4 w-4" />
                    Import More Conversations
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="border-white/10 bg-white/5 backdrop-blur-xl">
              <CardHeader>
                <CardTitle className="text-white">Relationship metrics</CardTitle>
              </CardHeader>

              <CardContent className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
                {[
                  {
                    label: 'Response alignment',
                    value: '84%',
                    icon: MessageSquare,
                    hint: 'Tone matches land more often when intent is explicit.',
                  },
                  {
                    label: 'Clarity score',
                    value: '76%',
                    icon: Sparkles,
                    hint: 'Clearer messages reduce unnecessary friction.',
                  },
                  {
                    label: 'Recovery speed',
                    value: '2.3x',
                    icon: Clock3,
                    hint: 'Short direct repair messages improve reset time.',
                  },
                  {
                    label: 'Insight depth',
                    value: '12',
                    icon: BarChart3,
                    hint: 'Saved reports and simulations are building richer context.',
                  },
                ].map((metric) => {
                  const Icon = metric.icon

                  return (
                    <div
                      key={metric.label}
                      className="rounded-2xl border border-white/10 bg-black/20 p-4"
                    >
                      <div className="mb-3 flex items-center justify-between">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white">
                          <Icon className="h-5 w-5" />
                        </div>
                        <span className="text-lg font-semibold text-white">{metric.value}</span>
                      </div>
                      <p className="text-sm font-medium text-white">{metric.label}</p>
                      <p className="mt-1 text-xs leading-6 text-white/50">{metric.hint}</p>
                    </div>
                  )
                })}
              </CardContent>
            </Card>

            <Card className="border-white/10 bg-white/5 backdrop-blur-xl">
              <CardHeader>
                <CardTitle className="text-white">Recommended next move</CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="rounded-2xl border border-orange-400/15 bg-orange-400/5 p-4">
                  <p className="text-sm font-semibold text-orange-200">Best-performing approach</p>
                  <p className="mt-2 text-sm leading-7 text-white/75">
                    Lead with a direct statement of intent, keep the emotional payload lighter,
                    then ask a simple grounded question. This profile responds best when clarity
                    comes before explanation.
                  </p>
                </div>

                <Button className="w-full bg-gradient-to-r from-orange-400 via-pink-400 to-violet-500 text-white shadow-[0_10px_40px_rgba(244,114,182,0.25)] hover:opacity-95">
                  Run a simulation
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </main>
  )
}

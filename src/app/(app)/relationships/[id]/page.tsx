import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  MessageSquare,
  AlertCircle,
  ChevronDown,
  Shield,
  Sparkles,
  Sliders,
  Plus 
} from "lucide-react"
import { RelationshipHeader } from "@/components/relationship-header"
import { ToneIndicator } from "@/components/tone-indicator"
import { InsightsPanel } from "@/components/insights-panel"

export default function RelationshipPage({
  params
}: {
  params: { id: string }
}) {
  // This would come from your data
  const relationshipName = params.id.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ')

  return (
    <div className="container space-y-6 py-6">
      <RelationshipHeader name={relationshipName} />

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Main Content */}
        <div className="space-y-6 lg:col-span-2">
          {/* Tone Overview */}
          <Card>
            <div className="p-6">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <Sliders className="h-5 w-5 text-indigo-400" />
                Communication Style
              </h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <ToneIndicator 
                  title="Your Tone" 
                  tone="neutral" 
                  confidence={72}
                  highlights={[
                    'Mostly clear and direct',
                    'Sometimes abrupt',
                    'Positive intent'
                  ]}
                />
                <ToneIndicator 
                  title="Their Tone" 
                  tone="engaged" 
                  confidence={88}
                  highlights={[
                    'Very responsive',
                    'Prefers questions',
                    'Likes emojis'
                  ]}
                />
              </div>
            </div>
          </Card>

          {/* What Works/Backfires */}
          <div className="grid gap-6 sm:grid-cols-2">
            <Card>
              <div className="p-6">
                <h3 className="font-semibold flex items-center gap-2 text-emerald-400">
                  <Sparkles className="h-5 w-5" />
                  What Works
                </h3>
                <ul className="mt-4 space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400">•</span>
                    Asking about their weekend plans
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400">•</span>
                    Matching their response length
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400">•</span>
                    Including 1-2 emojis per message
                  </li>
                </ul>
              </div>
            </Card>

            <Card>
              <div className="p-6">
                <h3 className="font-semibold flex items-center gap-2 text-amber-400">
                  <AlertCircle className="h-5 w-5" />
                  What Backfires
                </h3>
                <ul className="mt-4 space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400">•</span>
                    Long paragraphs without breaks
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400">•</span>
                    Direct questions late at night
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400">•</span>
                    Overuse of slang/colloquialisms
                  </li>
                </ul>
              </div>
            </Card>
          </div>

          {/* Recent Messages */}
          <Card>
            <div className="p-6">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Recent Conversations</h2>
                <Button variant="ghost" size="sm" className="text-muted-foreground">
                  <ChevronDown className="mr-2 h-4 w-4" />
                  View All
                </Button>
              </div>
              <div className="mt-6 space-y-6">
                {/* Message thread would go here */}
                <div className="p-4 rounded-lg bg-muted">
                  <p className="text-muted-foreground text-center">
                    Message history appears here when conversations are imported
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <Button variant="outline" className="w-full">
                  <Import className="mr-2 h-4 w-4" />
                  Import More Conversations
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Insights Panel */}
        <div className="space-y-6">
          <InsightsPanel 
            title={`Insights about ${relationshipName}`}
            insights={[
              'Responds best between 4-6pm',
              'Prefers text over calls',
              'Emotionally aware communicator',
              'Values direct questions'
            ]}
          />

          <Card>
            <div className="p-6">
              <h3 className="font-semibold">Quick Actions</h3>
              <div className="mt-4 space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  New Simulation
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Shield className="mr-2 h-4 w-4" />
                  Generate Report
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Note
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

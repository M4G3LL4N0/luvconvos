import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, MessageSquare, Import, BarChart2, Activity } from "lucide-react"
import { RecentActivity } from "@/components/recent-activity"
import { RelationshipCard } from "@/components/relationship-card"

export default function DashboardPage() {
  return (
    <div className="container space-y-6 py-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <div className="space-x-4">
          <Button size="sm" variant="outline">
            <Import className="mr-2 h-4 w-4" />
            Import Conversation
          </Button>
          <Button size="sm">
            <Plus className="mr-2 h-4 w-4" />
            New Simulation
          </Button>
        </div>
      </div>

      {/* Relationship Overview */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Your Relationships</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <RelationshipCard 
            name="Alex Morgan" 
            status="active" 
            lastContact="2 hours ago"
            communicationScore={84}
          />
          <RelationshipCard 
            name="Taylor Kim" 
            status="needs follow up" 
            lastContact="1 day ago"
            communicationScore={62}
          />
          <RelationshipCard 
            name="Jamie Chen" 
            status="active" 
            lastContact="3 days ago"
            communicationScore={91}
          />
        </div>
      </section>

      {/* Daily Insight */}
      <Card className="p-6 border-emerald-500/20 bg-emerald-500/5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-semibold">Today's Communication Insight</h3>
            <p className="text-sm text-muted-foreground">
              {relationship.optimalContactTimes?.includes('morning') 
                ? "They respond best to direct questions in the morning"
                : "Evening messages tend to get more thoughtful responses"}
            </p>
          </div>
        </div>
      </Card>

      {/* Analytics & Quick Actions */}
      <div className="grid gap-4 md:grid-cols-3">
        {/* Recent Simulations */}
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold flex items-center">
              <MessageSquare className="mr-2 h-5 w-5 text-indigo-400" />
              Recent Simulations
            </h3>
            <Button variant="ghost" className="text-sm text-muted-foreground">
              View All
            </Button>
          </div>
          <div className="mt-4 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Response to Alex</p>
                <p className="text-sm text-muted-foreground">2 hours ago</p>
              </div>
              <div className="rounded-full bg-green-500/10 px-3 py-1 text-xs text-green-400">
                +22%
              </div>
            </div>
          </div>
        </Card>

        {/* Recent Reports */}
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold flex items-center">
              <BarChart2 className="mr-2 h-5 w-5 text-amber-400" />
              Recent Reports
            </h3>
            <Button variant="ghost" className="text-sm text-muted-foreground">
              View All
            </Button>
          </div>
          <div className="mt-4 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Alex - Weekly Patterns</p>
                <p className="text-sm text-muted-foreground">Today</p>
              </div>
              <div className="text-xs text-muted-foreground">4 insights</div>
            </div>
          </div>
        </Card>

        {/* Communication Health */}
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold flex items-center">
              <Activity className="mr-2 h-5 w-5 text-emerald-400" />
              Communication Health
            </h3>
          </div>
          <div className="mt-4">
            <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
              <div 
                className="h-full bg-emerald-400 rounded-full" 
                style={{ width: '78%' }}
              />
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Better than 85% of users
            </p>
          </div>
        </Card>
      </div>

      {/* Recent Activity */}
      <section>
        <h2 className="text-xl font-semibold">Recent Activity</h2>
        <Card className="mt-4">
          <RecentActivity />
        </Card>
      </section>
    </div>
  )
}

import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { 
  MessageSquare,
  AlertCircle,
  TrendingUp,
  MoreHorizontal 
} from "lucide-react"

interface RelationshipCardProps {
  name: string
  status: 'active' | 'needs follow up' | 'at risk'
  lastContact: string
  communicationScore: number
}

export function RelationshipCard({ 
  name, 
  status, 
  lastContact, 
  communicationScore
}: RelationshipCardProps) {
  const statusMap = {
    'active': {
      icon: <TrendingUp className="h-4 w-4 text-emerald-400" />,
      bg: 'bg-emerald-500/10',
      text: 'text-emerald-400'
    },
    'needs follow up': {
      icon: <AlertCircle className="h-4 w-4 text-amber-400" />,
      bg: 'bg-amber-500/10',
      text: 'text-amber-400'
    },
    'at risk': {
      icon: <AlertCircle className="h-4 w-4 text-red-400" />,
      bg: 'bg-red-500/10',
      text: 'text-red-400'
    }
  }

  return (
    <Card className="group hover:border-primary/50 transition-colors">
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src={`/avatars/${name.toLowerCase().replace(' ', '-')}.jpg`} />
              <AvatarFallback>{name.slice(0, 2)}</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold">{name}</h3>
              <div className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs ${statusMap[status].bg} ${statusMap[status].text}`}>
                {statusMap[status].icon}
                <span className="ml-1 capitalize">{status}</span>
              </div>
            </div>
          </div>
          <Button 
            variant="ghost" 
            size="sm" 
            className="opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground"
          >
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-muted-foreground">Last Contact</p>
            <p className="font-medium">{lastContact}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Communication Score</p>
            <div className="flex items-center gap-2">
              <div className="relative h-2 flex-1 rounded-full bg-muted overflow-hidden">
                <div 
                  className="absolute h-full rounded-full bg-gradient-to-r from-indigo-400 to-blue-400"
                  style={{ width: `${communicationScore}%` }}
                />
              </div>
              <span className="text-sm font-medium">{communicationScore}</span>
            </div>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-border">
          <Button variant="outline" size="sm" className="w-full" asChild>
            <a href={`/relationships/${name.toLowerCase().replace(' ', '-')}`}>
              <MessageSquare className="mr-2 h-4 w-4" />
              View Relationship
            </a>
          </Button>
        </div>
      </div>
    </Card>
  )
}

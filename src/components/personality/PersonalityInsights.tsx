import { Card, CardContent, CardHeader } from "./ui/card"
import { Progress } from "./ui/progress"
import { Badge } from "./ui/badge"

interface PersonalityInsightsProps {
  attachmentStyle: string
  emotionalTriggers: string[]
  preferredTone: string
}

export function PersonalityInsights({ 
  attachmentStyle,
  emotionalTriggers,
  preferredTone
}: PersonalityInsightsProps) {
  return (
    <Card className="border-white/10 bg-white/5 backdrop-blur-xl">
      <CardHeader>
        <h3 className="text-lg font-semibold text-white">Personality Profile</h3>
        <p className="text-sm text-white/60">How they communicate</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-white/80">Attachment Style</h4>
          <Badge variant="outline" className="capitalize">
            {attachmentStyle}
          </Badge>
        </div>
        
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-white/80">Emotional Triggers</h4>
          <div className="flex flex-wrap gap-2">
            {emotionalTriggers.map(trigger => (
              <Badge key={trigger} variant="outline" className="capitalize">
                {trigger}
              </Badge>
            ))}
          </div>
        </div>
        
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-white/80">Preferred Tone</h4>
          <Badge variant="outline" className="capitalize">
            {preferredTone}
          </Badge>
        </div>
      </CardContent>
    </Card>
  )
}

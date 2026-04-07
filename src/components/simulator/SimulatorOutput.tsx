import { Card, CardContent, CardHeader } from "./ui/card"
import { Progress } from "./ui/progress"
import { Separator } from "./ui/separator"

interface SimulatorOutputProps {
  analysis: {
    thinking: string
    feeling: string
    whyItWorks: string
    potentialIssues: string
  }
}

export function SimulatorOutput({ analysis }: SimulatorOutputProps) {
  return (
    <Card className="border-white/10 bg-white/5 backdrop-blur-xl">
      <CardHeader>
        <h3 className="text-lg font-semibold text-white">Deep Analysis</h3>
        <p className="text-sm text-white/60">Psychological insights into their response</p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-white/80">What they're likely thinking</h4>
          <p className="text-sm text-white/60">{analysis.thinking}</p>
        </div>
        
        <Separator className="bg-white/10" />
        
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-white/80">What they're likely feeling</h4>
          <p className="text-sm text-white/60">{analysis.feeling}</p>
        </div>
        
        <Separator className="bg-white/10" />
        
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-white/80">Why this response works</h4>
          <p className="text-sm text-white/60">{analysis.whyItWorks}</p>
        </div>
        
        <Separator className="bg-white/10" />
        
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-white/80">What could go wrong</h4>
          <p className="text-sm text-white/60">{analysis.potentialIssues}</p>
        </div>
      </CardContent>
    </Card>
  )
}

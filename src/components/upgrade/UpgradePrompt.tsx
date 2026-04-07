import { Card, CardContent, CardHeader } from "./ui/card"
import { Button } from "./ui/button"
import { Sparkles } from "lucide-react"

export function UpgradePrompt() {
  return (
    <Card className="border-white/10 bg-white/5 backdrop-blur-xl">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-indigo-300" />
          <h3 className="text-lg font-semibold text-white">Upgrade for Unlimited Access</h3>
        </div>
        <p className="text-sm text-white/60">Unlock advanced features and unlimited simulations</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-white/80">Pro Features</h4>
          <ul className="text-sm text-white/60 list-disc list-inside">
            <li>Unlimited daily simulations</li>
            <li>Advanced personality analysis</li>
            <li>Detailed relationship reports</li>
            <li>Priority support</li>
          </ul>
        </div>
        
        <Button 
          className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white"
          onClick={() => window.location.href = '/pricing'}
        >
          Upgrade Now
        </Button>
      </CardContent>
    </Card>
  )
}

import { Card, CardContent, CardHeader } from "./ui/card"
import { Sparkles } from "lucide-react"
import { generateDailyInsight } from "@/lib/utils"
import { ShareButton } from "../share/ShareButton"

export function DailyInsight({ shareable = false }: { shareable?: boolean }) {
  const insight = generateDailyInsight([]) // TODO: Pass actual messages
  const shareProps = {
    title: "Today's Communication Insight",
    content: insight,
    type: "insight" as const
  }

  return (
    <Card className="border-white/10 bg-white/5 backdrop-blur-xl h-full">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-indigo-300" />
          <h3 className="text-lg font-semibold text-white">Today's Insight</h3>
        </div>
        <p className="text-sm text-white/60">Your personalized communication tip</p>
      </CardHeader>
      <CardContent className="relative">
        <div className="rounded-lg border border-white/10 bg-black/10 p-4">
          <p className="text-white/80">{insight}</p>
        </div>
        {shareable && (
          <div className="absolute top-4 right-4">
            <ShareButton {...shareProps} />
          </div>
        )}
      </CardContent>
    </Card>
  )
}

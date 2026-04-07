import { cn } from "@/lib/utils"
import { Download, Share2 } from "lucide-react"
import { Button } from "./ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card"

interface ShareCardProps {
  title: string
  content: string
  stats?: string[]
  relationshipName?: string
  className?: string
}

export function ShareCard({
  title,
  content,
  stats = [],
  relationshipName,
  className,
}: ShareCardProps) {
  return (
    <Card className={cn("border-white/10 bg-white/5 backdrop-blur-xl", className)}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="text-white/60 hover:text-white">
              <Download className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white/60 hover:text-white">
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
        {relationshipName && (
          <p className="text-sm text-white/60">From your relationship with {relationshipName}</p>
        )}
      </CardHeader>
      <CardContent>
        <div className="rounded-xl border border-white/10 bg-black/20 p-4">
          <p className="text-white/80">{content}</p>
          {stats.length > 0 && (
            <div className="mt-4 grid grid-cols-2 gap-2">
              {stats.map((stat, i) => (
                <div key={i} className="rounded-lg border border-white/10 p-2 text-center">
                  <p className="text-xs text-white/60">{stat.split(':')[0]}</p>
                  <p className="text-sm font-medium text-white">{stat.split(':')[1]}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="justify-center border-t border-white/10 py-3">
        <p className="text-xs text-white/40">Shared via LuvConvos</p>
      </CardFooter>
    </Card>
  )
}

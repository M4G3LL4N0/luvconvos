import React, { useRef, ReactNode } from "react"
import { cn } from "@/lib/utils"
import { Download, Share2, MessageCircle, HeartPulse, Sparkles } from "lucide-react"
import dynamic from "next/dynamic"
import { Badge, BadgeVariant } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card"
const html2canvas = dynamic(() => import("html2canvas"), { 
  ssr: false,
  loading: () => null
})

type StatusType = "active" | "cooling" | "new" | "paused"
type CardType = "insight" | "comparison" | "pattern" | "relationship"

type StatItem = {
  label: string
  value: string
}

type StatusType = "active" | "cooling" | "new" | "paused"
type CardType = "insight" | "comparison" | "pattern" | "relationship"

type ShareCardProps = {
  title: string
  content: string
  stats?: StatItem[]
  relationshipName?: string
  className?: string
  type?: CardType
  beforeText?: string
  afterText?: string
  status?: StatusType
  score?: number
}

export function ShareCard({
  title,
  content,
  stats = [],
  relationshipName,
  className,
  type = "insight",
  beforeText,
  afterText,
  status,
  score,
}: ShareCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleDownload = async () => {
    if (!cardRef.current) return
    
    const canvas = await html2canvas(cardRef.current, {
      backgroundColor: null,
      scale: 2,
    })
    const link = document.createElement('a')
    link.download = `luvconvos-${type}-${new Date().toISOString().slice(0, 10)}.png`
    link.href = canvas.toDataURL('image/png')
    link.click()
  }

  const getIcon = () => {
    switch(type) {
      case 'relationship': return <HeartPulse className="h-4 w-4 text-pink-300" />
      case 'comparison': return <MessageCircle className="h-4 w-4 text-blue-300" />
      default: return <Sparkles className="h-4 w-4 text-indigo-300" />
    }
  }

  return (
    <Card 
      ref={cardRef}
      className={cn(
        "border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl",
        "shadow-[0_8px_32px_rgba(0,0,0,0.2)] relative overflow-hidden",
        "group hover:shadow-[0_12px_48px_rgba(99,102,241,0.15)] transition-all duration-300",
        "premium-card",
        className
      )}
    >
      {status && (
        <div className="absolute top-4 right-4">
          <Badge variant={status === 'active' ? 'default' : 'secondary' as BadgeVariant}>
            {status}
          </Badge>
        </div>
      )}
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {getIcon()}
            <h3 className="text-lg font-semibold text-white">{title}</h3>
          </div>
          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-white/60 hover:text-white hover:bg-white/10 transition-colors"
              onClick={handleDownload}
            >
              <Download className="h-4 w-4" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-white/60 hover:text-white hover:bg-white/10"
            >
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
        {relationshipName && (
          <p className="text-sm text-white/60 mt-1">From your relationship with {relationshipName}</p>
        )}
      </CardHeader>
      <CardContent>
        <div className="rounded-xl border border-white/10 bg-gradient-to-b from-black/20 to-black/10 p-4">
          {type === "comparison" && beforeText && afterText ? (
            <div className="space-y-4">
              <div>
                <p className="text-xs font-medium text-white/60 mb-1">Before</p>
                <p className="text-white/70 bg-white/5 rounded p-3">{beforeText}</p>
              </div>
              <div>
                <p className="text-xs font-medium text-white/60 mb-1">Optimized</p>
                <p className="text-white/90 bg-indigo-500/10 rounded p-3 border border-indigo-500/20">
                  {afterText}
                </p>
              </div>
            </div>
          ) : (
            <>
              <p className="text-white/80">{content}</p>
              {stats.length > 0 && (
                <div className="mt-4 grid grid-cols-2 gap-2">
                  {stats.map((stat, i) => (
                    <div 
                      key={i} 
                      className="rounded-lg border border-white/10 p-2 text-center bg-gradient-to-b from-white/5 to-transparent"
                    >
                      <p className="text-xs text-white/60">{stat.label}</p>
                      <p className="text-sm font-medium text-white">{stat.value}</p>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </CardContent>
      <CardFooter className="justify-center border-t border-white/10 py-3 bg-gradient-to-b from-transparent to-white/[0.03]">
        <div className="flex items-center gap-1">
          <Sparkles className="h-3 w-3 text-indigo-300" />
          <p className="text-xs text-white/60">Shared via LuvConvos AI</p>
          {typeof score === 'number' && !isNaN(score) && (
            <div className="ml-2 text-xs text-white/60">
              Score: <span className="text-white">{Math.round(score)}</span>
            </div>
          )}
        </div>
      </CardFooter>
    </Card>
  )
}

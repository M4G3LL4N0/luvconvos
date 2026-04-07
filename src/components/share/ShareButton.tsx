import { Share2 } from "lucide-react"
import { Button } from "./ui/button"
import { useToast } from "./ui/use-toast"
import { ShareCard } from "./share/ShareCard"

interface ShareButtonProps {
  title: string
  content: string
  relationshipName?: string
  type?: "insight" | "comparison" | "pattern" | "relationship"
  beforeText?: string
  afterText?: string
  status?: "active" | "cooling" | "new" | "paused"
  score?: number
}

export function ShareButton({
  title,
  content,
  relationshipName,
  type = "insight",
  beforeText,
  afterText,
  status,
  score
}: ShareButtonProps) {
  const { toast } = useToast()

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: `LuvConvos: ${title}`,
          text: content,
          url: window.location.href
        })
      } else {
        toast({
          title: "Link copied to clipboard",
          description: "You can now paste and share it anywhere"
        })
        await navigator.clipboard.writeText(`${title}\n\n${content}\n\nShared via LuvConvos`)
      }
    } catch (err) {
      console.error('Failed to share:', err)
    }
  }

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      className="text-white/60 hover:text-white hover:bg-white/10"
      onClick={handleShare}
    >
      <Share2 className="h-4 w-4" />
    </Button>
  )
}

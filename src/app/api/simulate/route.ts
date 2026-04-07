import { NextResponse } from "next/server"
import { analyzePersonality, detectAttachmentStyle, extractCommunicationPatterns } from "@/lib/utils"

export async function POST(request: Request) {
  const { messages } = await request.json()
  
  try {
    const analysis = {
      thinking: analyzeThoughtProcess(messages),
      feeling: analyzeEmotionalState(messages),
      whyItWorks: explainResponseEffectiveness(messages),
      potentialIssues: identifyPotentialProblems(messages)
    }

    return NextResponse.json(analysis)
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to analyze conversation" },
      { status: 500 }
    )
  }
}

function analyzeThoughtProcess(messages: any[]) {
  const lastMessage = messages[messages.length - 1]
  const patterns = extractCommunicationPatterns(messages)
  
  // Generate specific insights based on message patterns
  if (patterns.conflictStyle === 'direct') {
    return "They're likely thinking in clear, logical terms and responding directly to the issue at hand"
  }
  return "They're likely processing emotions and considering how to respond thoughtfully"
}

function analyzeEmotionalState(messages: any[]) {
  const attachmentStyle = detectAttachmentStyle(messages)
  const lastMessage = messages[messages.length - 1]
  
  if (attachmentStyle === 'anxious') {
    return "They're likely feeling uncertain and seeking reassurance"
  }
  return "They're likely feeling secure and open to communication"
}

function explainResponseEffectiveness(messages: any[]) {
  const patterns = extractCommunicationPatterns(messages)
  
  if (patterns.preferredLength === 'short') {
    return "This works because it's concise and matches their preferred communication style"
  }
  return "This works because it addresses the core issue while maintaining emotional connection"
}

function identifyPotentialProblems(messages: any[]) {
  const patterns = extractCommunicationPatterns(messages)
  
  if (patterns.conflictStyle === 'indirect') {
    return "They might misinterpret direct communication as confrontational"
  }
  return "They might feel overwhelmed if the message is too long or complex"
}

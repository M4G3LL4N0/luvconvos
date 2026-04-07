import { NextResponse } from "next/server"
import { 
  analyzePersonality, 
  detectAttachmentStyle, 
  extractCommunicationPatterns,
  analyzeTone,
  analyzeClarity,
  analyzeEmotionalWeight,
  generatePersonalitySnapshot
} from "@/lib/utils"
import { getPersonalityProfile, learnFromInteraction } from "@/lib/supabase/schema"

export async function POST(request: Request) {
  const { messages, relationshipId } = await request.json()
  const personalityProfile = relationshipId ? await getPersonalityProfile(relationshipId) : null
  
  try {
    const analysis = {
      thinking: analyzeThoughtProcess(messages, personalityProfile),
      feeling: analyzeEmotionalState(messages, personalityProfile),
      whyItWorks: explainResponseEffectiveness(messages, personalityProfile),
      potentialIssues: identifyPotentialProblems(messages, personalityProfile),
      personalityInsights: personalityProfile ? {
        attachmentStyle: personalityProfile.attachment_style,
        emotionalTriggers: personalityProfile.emotional_triggers,
        preferredTone: personalityProfile.preferred_tone
      } : null
    }

    if (relationshipId) {
      await learnFromInteraction(relationshipId, {
        message: messages[messages.length - 2],
        response: messages[messages.length - 1],
        response_time: 0, // TODO: Calculate actual response time
        emotional_intensity: 0.5 // TODO: Calculate emotional intensity
      })
    }

    return NextResponse.json(analysis)
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to analyze conversation" },
      { status: 500 }
    )
  }
}

function analyzeThoughtProcess(messages: any[], personalityProfile: any) {
  const lastMessage = messages[messages.length - 1]
  const patterns = extractCommunicationPatterns(messages)
  
  // Generate specific insights based on message patterns
  if (patterns.conflictStyle === 'direct') {
    return "They're likely thinking in clear, logical terms and responding directly to the issue at hand"
  }
  return "They're likely processing emotions and considering how to respond thoughtfully"
}

function analyzeEmotionalState(messages: any[], personalityProfile: any) {
  if (personalityProfile?.attachment_style === 'anxious') {
    return "They're likely feeling uncertain and seeking reassurance based on their attachment style"
  }
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

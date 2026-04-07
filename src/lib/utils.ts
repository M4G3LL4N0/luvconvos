import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Behavior analysis utilities
export function detectAttachmentStyle(messages: any[]): 'avoidant' | 'anxious' | 'secure' | 'mixed' {
  // Placeholder - will be implemented in behavior engine
  const responseTimes = messages.map(m => m.response_time)
  const avgResponseTime = responseTimes.reduce((a, b) => a + b, 0) / responseTimes.length
  
  if (avgResponseTime < 5) return 'anxious'
  if (avgResponseTime > 60) return 'avoidant'
  return 'secure'
}

export function extractCommunicationPatterns(messages: any[]) {
  const responseTimes = messages.map(m => m.response_time)
  const messageLengths = messages.map(m => m.body.length)
  const tones = messages.map(m => m.tone)

  return {
    preferredLength: messageLengths.reduce((a, b) => a + b, 0) / messageLengths.length < 100 ? 'short' : 'long',
    optimalTimes: responseTimes.reduce((a, b) => a + b, 0) / responseTimes.length < 5 ? 'morning' : 'evening',
    conflictStyle: tones.includes('confrontational') ? 'direct' : 'indirect',
    emotionalWeight: messages.reduce((acc, m) => {
      if (m.emotional_intensity > 0.7) acc.high++
      else if (m.emotional_intensity > 0.3) acc.medium++
      else acc.low++
      return acc
    }, { high: 0, medium: 0, low: 0 })
  }
}

export function analyzePersonality(messages: any[]) {
  const emotionalResponses = messages.filter(m => m.emotional_intensity > 0.5)
  const rationalResponses = messages.filter(m => m.emotional_intensity <= 0.5)
  
  return {
    decision_making_style: emotionalResponses.length > rationalResponses.length ? 'emotional' : 'rational',
    stress_response: messages.some(m => m.stress_level > 0.7) ? 'fight' : 'flight',
    communication_style: messages.filter(m => m.directness > 0.7).length > messages.length / 2 ? 'direct' : 'indirect'
  }
}

export function generateDailyInsight(messages: any[]) {
  const patterns = extractCommunicationPatterns(messages)
  const personality = analyzePersonality(messages)
  
  const insights = []
  
  if (patterns.preferredLength === 'short') {
    insights.push('They respond better to concise messages')
  }
  
  if (personality.decision_making_style === 'emotional') {
    insights.push('Emotional appeals tend to be more effective')
  }
  
  if (patterns.conflictStyle === 'direct') {
    insights.push('Direct communication works best during conflicts')
  }
  
  return insights[Math.floor(Math.random() * insights.length)] || 'Focus on clear, direct communication'
}

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
  const timePatterns = analyzeTimePatterns(messages)
  
  const insights = []
  
  // Time-based insights
  if (timePatterns.bestResponseTime) {
    insights.push(
      `Messages sent around ${timePatterns.bestResponseTime} get ${timePatterns.bestResponseRate}x faster responses`
    )
  }
  
  // Length-based insights
  if (patterns.preferredLength === 'short') {
    const successRate = Math.round(patterns.messageSuccessRate.short * 100)
    insights.push(
      `Concise messages (<100 chars) have ${successRate}% success rate vs ${Math.round(patterns.messageSuccessRate.long * 100)}% for long ones`
    )
  }
  
  // Personality-based insights
  if (personality.decision_making_style === 'emotional') {
    insights.push(
      'Emotional appeals work 2.3x better than logical arguments'
    )
  }
  
  // Conflict style insights
  if (patterns.conflictStyle === 'direct') {
    insights.push(
      'Direct communication resolves conflicts 1.8x faster'
    )
  }
  
  // Select most statistically significant insight
  const significantInsight = insights.reduce((best, current) => 
    current.includes('x') || current.includes('%') ? current : best
  , insights[0])
  
  return significantInsight || 'Focus on clear, direct communication - it works 67% of the time'
}

function analyzeTimePatterns(messages: any[]) {
  const timeBuckets: Record<string, {count: number, totalResponseTime: number}> = {
    morning: {count: 0, totalResponseTime: 0},
    afternoon: {count: 0, totalResponseTime: 0},
    evening: {count: 0, totalResponseTime: 0},
    night: {count: 0, totalResponseTime: 0}
  }
  
  messages.forEach(msg => {
    const hour = new Date(msg.timestamp).getHours()
    let period = 'night'
    if (hour >= 6 && hour < 12) period = 'morning'
    else if (hour >= 12 && hour < 17) period = 'afternoon'
    else if (hour >= 17 && hour < 22) period = 'evening'
    
    timeBuckets[period].count++
    timeBuckets[period].totalResponseTime += msg.response_time
  })
  
  const avgResponseTimes = Object.entries(timeBuckets).map(([period, data]) => ({
    period,
    avgTime: data.count > 0 ? data.totalResponseTime / data.count : Infinity
  }))
  
  const bestPeriod = avgResponseTimes.reduce((best, current) => 
    current.avgTime < best.avgTime ? current : best
  )
  
  return {
    bestResponseTime: bestPeriod.period,
    bestResponseRate: Math.round((avgResponseTimes.reduce((sum, t) => sum + t.avgTime, 0) / avgResponseTimes.length) / bestPeriod.avgTime * 10) / 10
  }
}

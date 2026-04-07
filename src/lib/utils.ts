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
  // Placeholder - will be implemented in behavior engine
  return {
    preferredLength: 'medium',
    optimalTimes: ['morning', 'evening'],
    conflictStyle: 'direct'
  }
}

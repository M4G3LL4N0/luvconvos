import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export type ToneLabel = 'warm' | 'neutral' | 'cold' | 'direct' | 'playful' | 'intense'

export type ToneAnalysis = {
  label: ToneLabel
  score: number
  explanation: string
}

export type ClarityAnalysis = {
  score: number
  explanation: string
  issues: string[]
}

export type EmotionalWeightAnalysis = {
  score: number
  explanation: string
  intensity: 'low' | 'medium' | 'high'
}

export type AttachmentStyle =
  | 'secure'
  | 'anxious'
  | 'avoidant'
  | 'mixed'
  | 'undetermined'

export type CommunicationPattern = {
  averageMessageLength: number
  questionRate: number
  emojiRate: number
  exclamationRate: number
  dominantTone: ToneLabel
  summary: string
}

export type PersonalitySnapshot = {
  attachmentStyle: AttachmentStyle
  communicationStyle: string
  emotionalBaseline: string
  summary: string
}

export type PersonalityAnalysis = {
  attachmentStyle: AttachmentStyle
  communicationPatterns: CommunicationPattern
  tone: ToneAnalysis
  clarity: ClarityAnalysis
  emotionalWeight: EmotionalWeightAnalysis
  snapshot: PersonalitySnapshot
  summary: string
}

function normalizeText(input: string) {
  return input.trim().toLowerCase()
}

function wordCount(input: string) {
  const trimmed = input.trim()
  if (!trimmed) return 0
  return trimmed.split(/\s+/).length
}

function sentenceCount(input: string) {
  const matches = input.match(/[.!?]+/g)
  return matches ? matches.length : 0
}

function countMatches(input: string, pattern: RegExp) {
  const matches = input.match(pattern)
  return matches ? matches.length : 0
}

export function analyzeTone(input: string): ToneAnalysis {
  const text = normalizeText(input)
  const words = wordCount(text)

  const warmSignals =
    countMatches(text, /\b(love|care|appreciate|thanks|thank you|miss you|glad|happy)\b/g) +
    countMatches(text, /❤️|💕|😊|🥹|🙂|😘|😍/g)

  const coldSignals =
    countMatches(text, /\b(fine|whatever|k|ok|bye|leave me alone|stop)\b/g) +
    countMatches(text, /\b(don't|dont|can't|cant|won't|wont)\b/g)

  const directSignals =
    countMatches(text, /\b(i need|i want|be clear|directly|honestly|specifically|exactly)\b/g) +
    countMatches(text, /\?/g)

  const playfulSignals =
    countMatches(text, /\b(lol|lmao|haha|hehe|jk|kidding)\b/g) +
    countMatches(text, /😂|🤣|😅|😉|😜/g)

  const intenseSignals =
    countMatches(text, /!/g) +
    countMatches(text, /\b(always|never|seriously|immediately|right now|done)\b/g) +
    (words > 80 ? 2 : 0)

  const scores = {
    warm: warmSignals * 12,
    cold: coldSignals * 10,
    direct: directSignals * 10,
    playful: playfulSignals * 12,
    intense: intenseSignals * 8,
    neutral:
      20 +
      Math.max(
        0,
        30 -
          (warmSignals + coldSignals + directSignals + playfulSignals + intenseSignals) * 3
      ),
  } as const

  const label = (Object.entries(scores).sort((a, b) => b[1] - a[1])[0]?.[0] ??
    'neutral') as ToneLabel

  const score = Math.max(
    0,
    Math.min(100, Object.values(scores).sort((a, b) => b - a)[0] ?? 50)
  )

  const explanations: Record<ToneLabel, string> = {
    warm: 'The message uses reassurance, appreciation, or affectionate language.',
    neutral: 'The message reads balanced and relatively even in emotional temperature.',
    cold: 'The message contains distancing, shutdown, or low-warmth language.',
    direct: 'The message is clear, explicit, and intent-forward.',
    playful: 'The message uses humor, lightness, or teasing energy.',
    intense: 'The message carries elevated urgency, emotional load, or pressure.',
  }

  return {
    label,
    score,
    explanation: explanations[label],
  }
}

export function analyzeClarity(input: string): ClarityAnalysis {
  const text = input.trim()
  const words = wordCount(text)
  const issues: string[] = []

  if (!text) {
    return {
      score: 0,
      explanation: 'No message content was provided.',
      issues: ['Empty input'],
    }
  }

  const hasQuestion = /\?/.test(text)
  const hasIntentPhrase = /\b(i want|i need|i mean|my point is|i'm trying to|im trying to)\b/i.test(
    text
  )
  const fillerCount = countMatches(
    text.toLowerCase(),
    /\b(just|maybe|kind of|sort of|i guess|probably)\b/g
  )
  const pronounAmbiguity = countMatches(text.toLowerCase(), /\b(it|that|this)\b/g)

  let score = 70

  if (words < 4) {
    score -= 20
    issues.push('Very short message may be too vague')
  }

  if (words > 80) {
    score -= 12
    issues.push('Long message may bury the main point')
  }

  if (!hasQuestion && !hasIntentPhrase) {
    score -= 10
    issues.push('Intent is not stated clearly')
  }

  if (fillerCount >= 3) {
    score -= 10
    issues.push('Too much hedging weakens clarity')
  }

  if (pronounAmbiguity >= 6) {
    score -= 8
    issues.push('Too many vague references may create confusion')
  }

  if (sentenceCount(text) >= 2 && hasQuestion) {
    score += 8
  }

  score = Math.max(0, Math.min(100, score))

  let explanation = 'The message communicates reasonably clearly.'
  if (score >= 85) explanation = 'The message is clear, grounded, and easy to interpret.'
  else if (score < 60) explanation = 'The message likely needs simplification or more explicit intent.'

  return { score, explanation, issues }
}

export function analyzeEmotionalWeight(input: string): EmotionalWeightAnalysis {
  const text = normalizeText(input)
  const words = wordCount(text)
  const intenseWords = countMatches(
    text,
    /\b(hurt|betrayed|upset|angry|confused|serious|important|sad|anxious|afraid|done|broken)\b/g
  )
  const exclamations = countMatches(text, /!/g)
  const capsWords = countMatches(input, /\b[A-Z]{3,}\b/g)

  let score = intenseWords * 14 + exclamations * 6 + capsWords * 8 + (words > 100 ? 10 : 0)
  score = Math.max(0, Math.min(100, score))

  let intensity: EmotionalWeightAnalysis['intensity'] = 'low'
  if (score >= 65) intensity = 'high'
  else if (score >= 30) intensity = 'medium'

  const explanation =
    intensity === 'high'
      ? 'The message carries a lot of emotional pressure or weight.'
      : intensity === 'medium'
        ? 'The message has meaningful emotional charge.'
        : 'The message is emotionally light to moderate.'

  return { score, explanation, intensity }
}

export function detectAttachmentStyle(messages: string[]): AttachmentStyle {
  const joined = messages.join(' ').toLowerCase()

  const anxiousSignals = countMatches(
    joined,
    /\b(do you still|are you mad|why didn't you|why didnt you|please answer|need reassurance|miss me|do you care)\b/g
  )

  const avoidantSignals = countMatches(
    joined,
    /\b(i need space|leave me alone|too much|stop texting|not ready|later|busy)\b/g
  )

  const secureSignals = countMatches(
    joined,
    /\b(let's talk|lets talk|i understand|thank you for telling me|i appreciate that|we can work through)\b/g
  )

  if (secureSignals >= anxiousSignals && secureSignals >= avoidantSignals && secureSignals > 0) {
    return 'secure'
  }

  if (anxiousSignals > avoidantSignals && anxiousSignals >= 2) {
    return 'anxious'
  }

  if (avoidantSignals > anxiousSignals && avoidantSignals >= 2) {
    return 'avoidant'
  }

  if (anxiousSignals > 0 && avoidantSignals > 0) {
    return 'mixed'
  }

  return 'undetermined'
}

export function extractCommunicationPatterns(messages: string[]): CommunicationPattern {
  const safeMessages = messages.filter(Boolean)
  const totalMessages = safeMessages.length || 1
  const joined = safeMessages.join(' ')
  const avgLen =
    safeMessages.reduce((sum, message) => sum + wordCount(message), 0) / totalMessages

  const questionRate = countMatches(joined, /\?/g) / totalMessages
  const emojiRate = countMatches(joined, /[\u{1F300}-\u{1FAFF}]/gu) / totalMessages
  const exclamationRate = countMatches(joined, /!/g) / totalMessages
  const dominantTone = analyzeTone(joined).label

  return {
    averageMessageLength: Number(avgLen.toFixed(1)),
    questionRate: Number(questionRate.toFixed(2)),
    emojiRate: Number(emojiRate.toFixed(2)),
    exclamationRate: Number(exclamationRate.toFixed(2)),
    dominantTone,
    summary: `Messages average ${Number(avgLen.toFixed(1))} words with a ${dominantTone} tone profile.`,
  }
}

export function generatePersonalitySnapshot(messages: string[]): PersonalitySnapshot {
  const attachmentStyle = detectAttachmentStyle(messages)
  const patterns = extractCommunicationPatterns(messages)
  const emotionalWeight = analyzeEmotionalWeight(messages.join(' '))
  const clarity = analyzeClarity(messages.join(' '))

  const communicationStyle =
    patterns.dominantTone === 'direct'
      ? 'Direct and intent-forward'
      : patterns.dominantTone === 'warm'
        ? 'Warm and emotionally connective'
        : patterns.dominantTone === 'playful'
          ? 'Playful and light'
          : patterns.dominantTone === 'intense'
            ? 'Emotionally charged'
            : 'Balanced and mixed'

  const emotionalBaseline =
    emotionalWeight.intensity === 'high'
      ? 'Emotionally intense'
      : emotionalWeight.intensity === 'medium'
        ? 'Moderately expressive'
        : 'Relatively steady'

  return {
    attachmentStyle,
    communicationStyle,
    emotionalBaseline,
    summary: `${communicationStyle} with ${emotionalBaseline.toLowerCase()} tendencies. Clarity score: ${clarity.score}.`,
  }
}

export function analyzePersonality(input: string | string[]): PersonalityAnalysis {
  const messages = Array.isArray(input)
    ? input.filter(Boolean)
    : input
        .split(/\n+/)
        .map((line) => line.trim())
        .filter(Boolean)

  const joined = messages.join(' ')
  const tone = analyzeTone(joined)
  const clarity = analyzeClarity(joined)
  const emotionalWeight = analyzeEmotionalWeight(joined)
  const communicationPatterns = extractCommunicationPatterns(messages)
  const attachmentStyle = detectAttachmentStyle(messages)
  const snapshot = generatePersonalitySnapshot(messages)

  return {
    attachmentStyle,
    communicationPatterns,
    tone,
    clarity,
    emotionalWeight,
    snapshot,
    summary: `${snapshot.summary} Dominant tone is ${tone.label}. Emotional intensity is ${emotionalWeight.intensity}.`,
  }
}

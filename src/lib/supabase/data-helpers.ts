import { createServer } from '@/lib/supabase/server'

interface PersonModel {
  id: string
  name: string
  attachment_style: 'avoidant' | 'anxious' | 'secure' | 'mixed'
  communication_preferences: string[]
  emotional_triggers: string[]
  response_patterns: {
    time_of_day: Record<string, number>
    message_length: Record<string, number>
    conflict_resolution: string[]
  }
  conflict_behavior: string[]
  trust_signals: string[]
  communication_score: number
  last_contact: string
  status: 'active' | 'needs follow up' | 'at risk'
}

export async function getSession() {
  const supabase = await createServer()
  const { data, error } = await supabase.auth.getSession()

  if (error) {
    throw error
  }

  return data.session
}

export async function getUser() {
  const session = await getSession()
  return session?.user ?? null
}

export async function getRelationship(id: string): Promise<PersonModel> {
  const supabase = await createServer()
  const { data, error } = await supabase
    .from('relationships')
    .select('*')
    .eq('id', id)
    .single()

  if (error) {
    throw error
  }

  return data
}

export async function analyzeMessages(messages: any[]) {
  // This will be enhanced by the behavior engine
  return {
    attachment_style: 'secure', // Placeholder
    communication_preferences: [], // Placeholder
    emotional_triggers: [], // Placeholder
    response_patterns: {} // Placeholder
  }
}

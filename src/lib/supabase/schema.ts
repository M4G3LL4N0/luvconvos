import { createClient } from "@/lib/supabase/server"

export interface PersonalityProfile {
  id: string
  user_id: string
  relationship_id: string
  attachment_style: 'avoidant' | 'anxious' | 'secure' | 'mixed'
  emotional_triggers: string[]
  preferred_tone: 'formal' | 'casual' | 'warm' | 'direct'
  conflict_pattern: 'avoidant' | 'confrontational' | 'compromising'
  response_tendencies: {
    time_of_day: Record<string, number>
    message_length: 'short' | 'medium' | 'long'
    response_time: 'fast' | 'medium' | 'slow'
  }
  updated_at: string
}

export async function getPersonalityProfile(relationshipId: string): Promise<PersonalityProfile | null> {
  const supabase = createClient()
  const { data, error } = await supabase
    .from('personality_profiles')
    .select('*')
    .eq('relationship_id', relationshipId)
    .single()

  if (error) return null
  return data
}

export async function updatePersonalityProfile(
  profile: Partial<PersonalityProfile>
): Promise<PersonalityProfile | null> {
  const supabase = createClient()
  const { data, error } = await supabase
    .from('personality_profiles')
    .upsert(profile)
    .select()
    .single()

  if (error) return null
  return data
}

export async function learnFromInteraction(
  relationshipId: string,
  interaction: {
    message: string
    response: string
    response_time: number
    emotional_intensity: number
  },
  userId: string
): Promise<void> {
  const supabase = createClient()
  
  // Track usage
  await supabase
    .from('usage')
    .upsert({
      user_id: userId,
      simulations_today: supabase.rpc('increment', { 
        column: 'simulations_today',
        value: 1 
      }),
      updated_at: new Date().toISOString()
    })
  const supabase = createClient()
  const { data: profile } = await supabase
    .from('personality_profiles')
    .select('*')
    .eq('relationship_id', relationshipId)
    .single()

  if (!profile) return

  // Update response time tendencies
  const hour = new Date().getHours()
  const timeKey = hour < 12 ? 'morning' : hour < 17 ? 'afternoon' : 'evening'
  const newTimePatterns = {
    ...profile.response_tendencies.time_of_day,
    [timeKey]: (profile.response_tendencies.time_of_day[timeKey] || 0) + 1
  }

  // Update message length preference
  const length = interaction.message.length
  const lengthPreference = length < 50 ? 'short' : length < 150 ? 'medium' : 'long'

  await supabase
    .from('personality_profiles')
    .update({
      response_tendencies: {
        ...profile.response_tendencies,
        time_of_day: newTimePatterns,
        message_length: lengthPreference,
        response_time: interaction.response_time < 5 ? 'fast' : interaction.response_time < 30 ? 'medium' : 'slow'
      },
      updated_at: new Date().toISOString()
    })
    .eq('relationship_id', relationshipId)
}

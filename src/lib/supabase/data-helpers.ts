import { createServer } from '@/lib/supabase/server'

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

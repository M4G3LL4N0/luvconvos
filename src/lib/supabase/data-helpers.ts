'use server'

import { createClient } from './client'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function getSession() {
  const supabase = createClient(cookies())
  const { data, error } = await supabase.auth.getSession()
  
  if (error) {
    console.error('Failed to get session:', error)
    return null
  }

  return data.session
}

export async function getUser() {
  const supabase = createClient(cookies())
  const { data: { user }, error } = await supabase.auth.getUser()
  if (error) throw error
  return user
}

export async function protectedAction<T extends (...args: never[]) => Promise<unknown>>(
  action: T,
  ...args: Parameters<T>
): Promise<Awaited<ReturnType<T>>> {
  const user = await getUser()
  if (!user) redirect('/login')
  return action(...args)
}

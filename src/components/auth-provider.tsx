'use client'

import { createClient } from '@/lib/supabase/client'
import { Session } from '@supabase/supabase-js'
import { useRouter } from 'next/navigation'
import { createContext, useContext, useEffect, useState } from 'react'

type AuthContextType = {
  session: Session | null
  isAuthenticated: boolean
  isLoading: boolean
  supabaseClient: ReturnType<typeof createClient>
}

const AuthContext = createContext<AuthContextType>({
  session: null,
  isAuthenticated: false,
  isLoading: true,
  supabaseClient: createClient()
})

export function AuthProvider({
  supabaseClient,
  children
}: {
  supabaseClient: ReturnType<typeof createClient>
  children: React.ReactNode
}) {
  const [session, setSession] = useState<Session | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  useEffect(() => {
    supabaseClient.auth.getSession()
      .then(({ data: { session }, error }) => {
        if (error) {
          console.error('Session error:', error)
          setError(error.message)
        }
        setSession(session)
        setIsLoading(false)
      })
      .catch((error) => {
        console.error('Auth initialization failed:', error)
        setError('Failed to initialize authentication')
        setIsLoading(false)
      })

    const { data: { subscription } } = supabaseClient.auth.onAuthStateChange((_event, session) => {
      setSession(session)
      if (_event === 'SIGNED_OUT') {
        router.refresh()
      }
    })

    return () => subscription.unsubscribe()
  }, [supabaseClient, router])

  return (
    <AuthContext.Provider value={{
      session,
      isAuthenticated: !!session,
      isLoading,
      supabaseClient
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)

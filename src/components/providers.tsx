'use client'

'use client'

import { ThemeProvider } from './theme-provider'
import { ErrorBoundary } from './error-boundary'
import { Suspense } from 'react'
import { useRouter } from 'next/navigation'
import { AuthProvider } from './auth-provider'
import { createClient } from '../../lib/supabase/client'

export function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const supabaseClient = createClient()

  return (
    <AuthProvider supabaseClient={supabaseClient}>
      <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      storageKey="luvconvos-theme"
    >
      <ErrorBoundary>
        <Suspense fallback={
          <div className="flex-1 flex items-center justify-center">
            <span className="text-muted-foreground">Loading...</span>
          </div>
        }>
          {children}
        </Suspense>
      </ErrorBoundary>
      </ThemeProvider>
    </AuthProvider>
  )
}

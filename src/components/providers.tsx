'use client'

'use client'

import { ThemeProvider } from './theme-provider'
import { ErrorBoundary } from './error-boundary'
import { Suspense } from 'react'
import { useRouter } from 'next/navigation'

export function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  return (
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
  )
}

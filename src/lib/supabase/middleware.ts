import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export function updateSession(request: NextRequest) {
  try {
    // Safe env check before creating client
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    
    if (!supabaseUrl || !supabaseKey) {
      console.error('Supabase env vars missing')
      return NextResponse.next({ request })
    }

    const response = NextResponse.next({ request })

    const supabase = createServerClient(
      supabaseUrl,
      supabaseKey,
      {
        cookies: {
          getAll() {
            try {
              return request.cookies.getAll()
            } catch (error) {
              console.error('Failed to read cookies:', error)
              return []
            }
          },
          setAll(cookiesToSet) {
            try {
              cookiesToSet.forEach(({ name, value, options }) => {
                response.cookies.set(name, value, options)
              })
            } catch (error) {
              console.error('Failed to set cookies:', error)
            }
          },
        },
        db: {
          schema: 'luvconvos',
        },
      }
    )

    // Safe auth check
    try {
      void supabase.auth.getUser()
    } catch (error) {
      console.error('Supabase auth error:', error)
    }

    return response
  } catch (error) {
    console.error('Middleware error:', error)
    return NextResponse.next({ request })
  }
}

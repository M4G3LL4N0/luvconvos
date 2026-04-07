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

    // Check subscription status and usage limits
    try {
      const { data: { user } } = await supabase.auth.getUser()
      
      if (user) {
        const { data: profile } = await supabase
          .from('profiles')
          .select('subscription_status, simulations_today')
          .eq('id', user.id)
          .single()

        // Check free tier limits
        if (profile?.subscription_status === 'free') {
          const pathname = request.nextUrl.pathname
          
          // Block API routes if over limit
          if (pathname.startsWith('/api/simulate') && profile.simulations_today >= 3) {
            return NextResponse.json(
              { error: 'Free tier limit reached (3 simulations/day)' },
              { status: 429 }
            )
          }

          // Block relationship creation if over limit
          if (pathname === '/api/relationships' && profile.relationships_count >= 1) {
            return NextResponse.json(
              { error: 'Free tier limited to 1 relationship' },
              { status: 403 }
            )
          }
        }
      }
    } catch (error) {
      console.error('Usage limit check error:', error)
    }

    return response
  } catch (error) {
    console.error('Middleware error:', error)
    return NextResponse.next({ request })
  }
}

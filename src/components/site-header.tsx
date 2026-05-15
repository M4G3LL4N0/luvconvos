'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils'

const primaryNav = [
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/relationships', label: 'Relationships' },
  { href: '/simulator', label: 'Simulator' },
  { href: '/reports', label: 'Reports' },
] as const

const secondaryNav = [
  { href: '/how-it-works', label: 'How it works' },
  { href: '/technology', label: 'Technology' },
  { href: '/investors', label: 'Investors' },
] as const

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/55 backdrop-blur-2xl backdrop-saturate-150 shadow-[0_1px_0_rgba(255,255,255,0.04)]">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4">
        <Link
          href="/"
          className="text-[15px] font-semibold tracking-tight text-white md:text-base"
          onClick={() => setOpen(false)}
        >
          LuvConvos
        </Link>

        <nav className="hidden items-center gap-1 text-[13px] md:flex md:gap-2 md:text-sm">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'rounded-full px-3 py-1.5 transition-colors',
                pathname === item.href || pathname.startsWith(`${item.href}/`)
                  ? 'bg-white/10 text-white'
                  : 'text-white/65 hover:bg-white/5 hover:text-white'
              )}
            >
              {item.label}
            </Link>
          ))}
          <span className="hidden h-4 w-px bg-white/15 md:inline" aria-hidden />
          {secondaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'rounded-full px-2.5 py-1.5 text-white/50 transition-colors hover:bg-white/5 hover:text-white/90',
                pathname === item.href ? 'text-white/90' : ''
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/login"
            className="hidden rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 hover:bg-white/10 md:inline-flex"
            onClick={() => setOpen(false)}
          >
            Sign in
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-white md:hidden"
            aria-expanded={open}
            aria-controls="luvconvos-mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
            <span aria-hidden>{open ? '×' : '☰'}</span>
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="luvconvos-mobile-nav"
          className="mx-auto flex max-w-7xl flex-col gap-1 border-t border-white/10 px-4 py-3 md:hidden"
          aria-label="Mobile"
        >
          {[...primaryNav, ...secondaryNav].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2.5 text-sm text-white/80 hover:bg-white/5"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/login"
            className="rounded-lg px-3 py-2.5 text-sm font-medium text-indigo-200 hover:bg-white/5"
            onClick={() => setOpen(false)}
          >
            Sign in
          </Link>
          <p className="px-3 pt-1 text-[11px] leading-relaxed text-white/45">
            Communication coaching and practice — not therapy, legal, or surveillance. Use only with consent.
          </p>
        </nav>
      )}
    </header>
  )
}

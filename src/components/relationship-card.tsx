import Link from 'next/link'
import { ArrowUpRight, Heart, MessageSquare, Signal } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'

export type RelationshipStatus =
  | 'active'
  | 'cooling'
  | 'new'
  | 'paused'
  | 'needs follow up'

export type RelationshipCardProps = {
  id?: string
  name: string
  status: RelationshipStatus
  lastContact: string
  communicationScore: number
  relationshipType?: string
}

const statusStyles: Record<RelationshipStatus, string> = {
  active: 'bg-emerald-500/10 text-emerald-200 border-emerald-400/20',
  cooling: 'bg-amber-500/10 text-amber-200 border-amber-400/20',
  new: 'bg-sky-500/10 text-sky-200 border-sky-400/20',
  paused: 'bg-white/10 text-white/70 border-white/15',
  'needs follow up': 'bg-orange-500/10 text-orange-200 border-orange-400/20',
}

export function RelationshipCard({
  id,
  name,
  status,
  lastContact,
  communicationScore,
  relationshipType = 'Relationship',
}: RelationshipCardProps) {
  const href = id ? `/relationships/${id}` : '/relationships'

  return (
    <Link href={href} className="group block">
      <Card className="overflow-hidden border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07] hover:shadow-[0_24px_80px_rgba(15,23,42,0.35)]">
        <CardContent className="p-5">
          <div className="mb-5 flex items-start justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-400/20 via-pink-400/15 to-violet-500/20 text-white ring-1 ring-white/10">
                <Heart className="h-5 w-5" />
              </div>

              <div>
                <p className="text-base font-semibold text-white">{name}</p>
                <p className="mt-1 text-sm text-white/55">{relationshipType}</p>
              </div>
            </div>

            <ArrowUpRight className="h-5 w-5 text-white/35 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white/70" />
          </div>

          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge className={cn('border', statusStyles[status])}>
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </Badge>
            <Badge className="border-white/10 bg-white/8 text-white/70 hover:bg-white/8">
              <MessageSquare className="mr-1 h-3.5 w-3.5" />
              {lastContact}
            </Badge>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl border border-white/8 bg-black/20 p-4">
              <div className="mb-2 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <Signal className="h-4 w-4 text-white/55" />
                  <span className="text-sm text-white/65">Communication score</span>
                </div>
                <span className="text-sm font-semibold text-white">{communicationScore}%</span>
              </div>
              <div className="h-2.5 w-full overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-sky-400 via-violet-400 to-orange-400 transition-all"
                  style={{ width: `${Math.max(0, Math.min(100, communicationScore))}%` }}
                />
              </div>
            </div>

            <div className="rounded-2xl border border-white/8 bg-black/20 p-4">
              <div className="flex items-center gap-2">
                <Heart className="h-4 w-4 text-white/55" />
                <span className="text-sm text-white/65">Attachment Style</span>
              </div>
              <div className="mt-2 flex items-center gap-2">
                <div className="h-2 w-full rounded-full bg-white/10">
                  <div
                    className="h-2 rounded-full bg-emerald-400"
                    style={{ width: '75%' }}
                  />
                </div>
                <span className="text-sm font-semibold text-white">Secure</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

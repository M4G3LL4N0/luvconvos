/**
 * Global design-system primitives only.
 * Component-specific variants and CVA configs belong inside their component files.
 */

export const COLOR_SCALES = {
  zinc: [
    'zinc-50',
    'zinc-100',
    'zinc-200',
    'zinc-300',
    'zinc-400',
    'zinc-500',
    'zinc-600',
    'zinc-700',
    'zinc-800',
    'zinc-900',
    'zinc-950',
  ],
  slate: [
    'slate-50',
    'slate-100',
    'slate-200',
    'slate-300',
    'slate-400',
    'slate-500',
    'slate-600',
    'slate-700',
    'slate-800',
    'slate-900',
    'slate-950',
  ],
  neutral: [
    'neutral-50',
    'neutral-100',
    'neutral-200',
    'neutral-300',
    'neutral-400',
    'neutral-500',
    'neutral-600',
    'neutral-700',
    'neutral-800',
    'neutral-900',
    'neutral-950',
  ],
} as const

export const TEXT_SCALES = ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl'] as const
export type TextScale = (typeof TEXT_SCALES)[number]

export const RADIUS_SCALES = ['none', 'sm', 'md', 'lg', 'xl', '2xl', 'full'] as const
export type RadiusScale = (typeof RADIUS_SCALES)[number]

export const ELEVATION_LEVELS = ['none', 'sm', 'md', 'lg', 'xl'] as const
export type ElevationLevel = (typeof ELEVATION_LEVELS)[number]

export const SURFACE_STYLES = ['solid', 'subtle', 'glass'] as const
export type SurfaceStyle = (typeof SURFACE_STYLES)[number]

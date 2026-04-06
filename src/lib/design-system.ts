/**
 * Global design-system primitives only.
 * Component-specific variants and CVA configs belong inside their component files.
 */

export const colorScales = {
  primary: [
    'primary-50',
    'primary-100', 
    'primary-200',
    'primary-300',
    'primary-400',
    'primary-500',
    'primary-600',
    'primary-700',
    'primary-800',
    'primary-900',
    'primary-950',
  ],
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

export const textScales = ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl'] as const
export type TextScale = (typeof textScales)[number]

export const radiusScales = ['none', 'sm', 'md', 'lg', 'xl', '2xl', 'full'] as const
export type RadiusScale = (typeof radiusScales)[number]

export const elevationLevels = ['none', 'sm', 'md', 'lg', 'xl'] as const
export type ElevationLevel = (typeof elevationLevels)[number]

export const surfaceStyles = ['solid', 'subtle', 'glass'] as const
export type SurfaceStyle = (typeof surfaceStyles)[number]

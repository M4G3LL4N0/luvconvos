export const buttonSizes = [
  'default',
  'sm',
  'lg',
  'icon',
  'icon-sm',
  'icon-lg',
] as const

export const buttonVariantNames = [
  'default',
  'destructive',
  'outline',
  'secondary',
  'ghost',
  'link',
] as const

export type ButtonSize = (typeof buttonSizes)[number]
export type ButtonVariantName = (typeof buttonVariantNames)[number]

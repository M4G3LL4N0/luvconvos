import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonConfig = {
  variant: {
    default: 'bg-primary text-primary-foreground shadow hover:bg-primary/90',
    destructive:
      'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
    outline:
      'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
    secondary:
      'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
    ghost: 'hover:bg-accent hover:text-accent-foreground',
    link: 'text-primary underline-offset-4 hover:underline',
    // Communication variants
    emotion: 'rounded-full bg-emerald-100 text-emerald-900 hover:bg-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-100 dark:hover:bg-emerald-900/50',
    response: 'bg-blue-100 text-blue-900 hover:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-100 dark:hover:bg-blue-900/50',
    feedback: 'bg-purple-100 text-purple-900 hover:bg-purple-200 dark:bg-purple-900/30 dark:text-purple-100 dark:hover:bg-purple-900/50',
    // State variants
    loading: 'relative overflow-hidden after:absolute after:inset-0 after:animate-pulse after:bg-muted/50',
    error: 'bg-destructive/50 text-destructive-foreground hover:bg-destructive/70',
    disabled: 'opacity-50 cursor-not-allowed pointer-events-none',
    // New variants
    typing: 'animate-pulse bg-muted text-muted-foreground',
    sent: 'bg-green-100 text-green-900 dark:bg-green-900/30 dark:text-green-50',
  },
  size: {
    default: 'h-9 px-4 py-2',
    sm: 'h-8 rounded-md px-3 text-xs',
    lg: 'h-10 rounded-md px-8',
    icon: 'h-9 w-9',
    'icon-sm': 'h-8 w-8',
    'icon-lg': 'h-10 w-10',
    // Communication sizes
    bubble: 'h-auto px-4 py-2 rounded-full',
    'bubble-sm': 'h-auto px-3 py-1.5 text-xs rounded-full',
  },
} as const

const buttonVariantsInternal = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
  {
    variants: buttonConfig,
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export const buttonVariants = buttonVariantsInternal

export type ButtonVariant = keyof typeof buttonConfig.variant
export type ButtonSize = keyof typeof buttonConfig.size

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariantsInternal> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant, 
    size, 
    asChild = false, 
    type = 'button',
    disabled,
    'aria-busy': ariaBusy,
    'aria-live': ariaLive,
    ...props 
  }, ref) => {
    const Comp = asChild ? Slot : 'button'
    const isPending = variant === 'loading' || ariaBusy === 'true'
    
    return (
      <Comp
        className={cn(
          buttonVariantsInternal({ variant, size, className }),
          isPending && 'cursor-wait',
          disabled && 'cursor-not-allowed'
        )}
        ref={ref}
        type={asChild ? undefined : type}
        disabled={disabled || undefined}
        aria-busy={isPending ? 'true' : undefined}
        aria-live={isPending ? 'polite' : ariaLive}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'

export { Button }

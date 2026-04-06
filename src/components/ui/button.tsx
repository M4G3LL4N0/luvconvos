import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonConfig = {
  variant: {
    primary: 'bg-primary text-primary-foreground shadow hover:bg-primary/90',
    secondary: 'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
    destructive: 'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
    outline: 'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
    ghost: 'hover:bg-accent hover:text-accent-foreground',
    link: 'text-primary underline-offset-4 hover:underline',
    // Communication variants
    emotion: 'rounded-full bg-emotion text-emotion-foreground hover:bg-emotion/90',
    response: 'rounded-full bg-response text-response-foreground hover:bg-response/90',
    feedback: 'rounded-full bg-feedback text-feedback-foreground hover:bg-feedback/90',
    // State variants
    loading: 'relative overflow-hidden after:absolute after:inset-0 after:animate-pulse after:bg-muted/50',
    error: 'bg-error text-error-foreground hover:bg-error/90',
    disabled: 'opacity-50 cursor-not-allowed pointer-events-none',
    // Interaction variants
    typing: 'animate-pulse bg-muted text-muted-foreground',
    sent: 'bg-success text-success-foreground hover:bg-success/90',
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

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
  {
    variants: buttonConfig,
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export type { VariantProps as ButtonVariantProps } from 'class-variance-authority'
export type ButtonVariant = VariantProps<typeof buttonVariants>['variant']
export type ButtonSize = VariantProps<typeof buttonVariants>['size']

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
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
          buttonVariants({ variant, size, className }),
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

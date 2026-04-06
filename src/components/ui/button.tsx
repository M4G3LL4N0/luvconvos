import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'
import type { ButtonHTMLAttributes, RefAttributes } from 'react'

type ButtonConfig = {
  variant: {
    primary: string
    secondary: string
    destructive: string
    outline: string
    ghost: string
    link: string
    emotion: string
    response: string
    feedback: string
    loading: string
    error: string
    disabled: string
    typing: string
    sent: string
  }
  size: {
    default: string
    sm: string
    lg: string
    icon: string
    'icon-sm': string
    'icon-lg': string
    bubble: string
    'bubble-sm': string
  }
}

const buttonConfig: ButtonConfig = {
  variant: {
    primary: 'bg-brand text-brand-foreground shadow hover:bg-brand/90',
    secondary: 'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
    destructive: 'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
    outline: 'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
    ghost: 'hover:bg-accent hover:text-accent-foreground',
    link: 'text-brand underline-offset-4 hover:underline',
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
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand disabled:pointer-events-none disabled:opacity-50',
  {
    variants: buttonConfig,
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  }
)

export type ButtonVariant = keyof typeof buttonConfig.variant
export type ButtonSize = keyof typeof buttonConfig.size

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  variant?: ButtonVariant
  size?: ButtonSize
  /**
   * @default false
   */
  disabled?: boolean
  /**
   * @default 'button'
   */
  type?: 'button' | 'submit' | 'reset'
  /**
   * @default false
   */
  loading?: boolean | 'true' | 'false'
  /**
   * Optional left icon component
   */
  leftIcon?: React.ReactElement<SVGElement | HTMLSpanElement>
  /**
   * Optional right icon component
   */
  rightIcon?: React.ReactElement<SVGElement | HTMLSpanElement>
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className,
    variant,
    size,
    asChild = false,
    type = 'button',
    disabled = false,
    loading = false,
    leftIcon,
    rightIcon,
    children,
    'aria-busy': ariaBusy,
    'aria-live': ariaLive = 'polite',
    ...props
  }, ref) => {
    const Comp = asChild ? Slot : 'button'
    const isPending = loading || variant === 'loading' || ariaBusy === 'true'
    
    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, className }),
          isPending && 'cursor-wait',
          disabled && 'cursor-not-allowed',
          loading && 'relative overflow-hidden'
        )}
        ref={ref}
        type={asChild ? undefined : type}
        disabled={disabled || undefined}
        aria-busy={isPending ? 'true' : undefined}
        aria-live={isPending ? 'polite' : ariaLive}
        {...props}
      >
        {loading && (
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full" />
          </span>
        )}
        <span className={cn('flex items-center gap-2', loading && 'opacity-0')}>
          {leftIcon && <span className="shrink-0">{leftIcon}</span>}
          {children}
          {rightIcon && <span className="shrink-0">{rightIcon}</span>}
        </span>
      </Comp>
    )
  }
)

Button.displayName = 'Button'

export { Button }
export default Button
export type { ButtonProps }

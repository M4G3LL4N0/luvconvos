'use client'

import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'
import type { ButtonHTMLAttributes, RefAttributes } from 'react'

export const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        // Core variants
        primary: 'bg-brand text-brand-foreground shadow hover:bg-brand/90',
        secondary: 'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
        destructive: 'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
        outline: 'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
        ghost: 'hover:bg-accent hover:text-accent-foreground shadow-none',
        link: 'text-brand underline-offset-4 hover:underline shadow-none',

        // Semantic variants
        success: 'bg-success text-success-foreground hover:bg-success/90',

      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-8 px-3 text-xs',
        lg: 'h-10 px-8',
        icon: 'h-9 w-9 p-0',
        iconSm: 'h-8 w-8 p-0',
        iconLg: 'h-10 w-10 p-0',
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  }
)

export type ButtonVariant = keyof (typeof buttonVariants)['variants']['variant']
export type ButtonSize = keyof (typeof buttonVariants)['variants']['size']

interface IconProps extends React.SVGAttributes<SVGElement> {
  size?: number
}

interface ButtonBaseProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Render as child component
   * @default false
   */
  asChild?: boolean
  /**
   * Button visual variant
   * @default 'primary'
   */
  variant?: ButtonVariant
  /**
   * Button size
   * @default 'default'
   */
  size?: ButtonSize
  /**
   * Loading state
   * @default false
   */
  loading?: boolean
  /**
   * Left icon component
   */
  leftIcon?: React.ReactElement<IconProps>
  /**
   * Right icon component
   */
  rightIcon?: React.ReactElement<IconProps>
}

type ButtonProps = ButtonBaseProps & VariantProps<typeof buttonVariants>

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    className,
    variant = 'primary',
    size = 'default',
    loading = false,
    asChild = false,
    type = 'button',
    leftIcon,
    rightIcon,
    children,
    disabled,
    ...props
  }, ref) => {
    const Comp = asChild ? Slot : 'button'
    const isPending = loading
    
    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size }),
          className,
          loading && 'relative overflow-hidden',
          disabled && 'opacity-50 cursor-not-allowed'
        )}
        ref={ref}
        type={asChild ? undefined : type}
        disabled={disabled || undefined}
        aria-busy={isPending ? 'true' : 'false'}
        aria-live={isPending ? 'polite' : undefined}
        suppressHydrationWarning={isPending}
        {...props}
      >
        <span className="flex items-center gap-2">
          {leftIcon && <span className="shrink-0">{leftIcon}</span>}
          {children}
          {rightIcon && <span className="shrink-0">{rightIcon}</span>}
        </span>
      </Comp>
    )
  }
)

Button.displayName = 'Button'

export { Button, buttonVariants }
export type { ButtonProps }

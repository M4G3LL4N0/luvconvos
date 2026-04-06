/**
 * Core Design System Constants
 * 
 * Defines the canonical variants and sizes for UI components.
 * All components should align with these constants.
 */

export const buttonSizes = [
  "default",
  "sm", 
  "lg",
  "icon",
  "icon-sm",
  "icon-lg"
] as const;

export type ButtonSize = typeof buttonSizes[number];

export const buttonVariants = [
  "default",
  "destructive",
  "outline",
  "secondary",
  "ghost",
  "link"
] as const;

export type ButtonVariant = typeof buttonVariants[number];

import { type ReactNode } from 'react'
import { type TypographyConfig, typographyConfig } from './model'
import { polymorphicForwardRef } from '$/shared/types'
import { cn } from '$/shared/utils'

export type TypographyProps = TypographyConfig & {
  children: ReactNode
  className?: string
}

export const Typography = polymorphicForwardRef<'div', TypographyProps>(
  ({ as, variant, textFormat, className, ...props }, ref) => {
    const Element = as ?? 'div'
    return <Element ref={ref} className={cn(typographyConfig({ variant, textFormat }), className)} {...props} />
  }
)

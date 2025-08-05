import { type HTMLAttributes, type ReactNode } from 'react'
import { type ElementVariant, type TypographyConfig, typographyConfig } from './model'
import { cn } from '$/shared/utils'

export interface TypographyProps<Element extends ElementVariant> extends HTMLAttributes<Element>, TypographyConfig {
  children: ReactNode
  as?: Element
}

export const Typography = <Element extends ElementVariant>({ as, children, variant }: TypographyProps<Element>) => {
  const Element = as ?? 'p'
  return <Element className={cn(typographyConfig({ variant }))}>{children}</Element>
}

import type { HTMLAttributes, ReactNode } from 'react'
import { type HeadingConfig, headingConfig } from './model'
import { cn } from '$/shared/utils'

export interface HeadingProps extends HeadingConfig, HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  className?: string
}

export const Heading = ({ as, className, ...props }: HeadingProps) => {
  const Element = as ?? 'h2'
  return <Element className={cn(headingConfig({ as }), className)} {...props} />
}

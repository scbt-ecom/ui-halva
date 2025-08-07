import { forwardRef, type HTMLAttributes, type ReactNode } from 'react'

export interface LabelProps extends HTMLAttributes<HTMLLabelElement> {
  children: ReactNode
  id: string
  className?: string
}

export const Label = forwardRef<HTMLLabelElement, LabelProps>(({ id, ...props }, ref) => {
  return <label htmlFor={id} ref={ref} {...props} />
})

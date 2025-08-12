import { forwardRef, type HTMLAttributes, type ReactNode } from 'react'
import { type MessageViewConfig, messageViewConfig } from './model'
import { cn } from '$/shared/utils'

export interface MessageViewProps extends MessageViewConfig, HTMLAttributes<HTMLDivElement> {
  className?: string
  children: ReactNode
}

export const MessageView = forwardRef<HTMLDivElement, MessageViewProps>(({ variant, className, ...props }, ref) => {
  return <div ref={ref} className={cn(messageViewConfig({ variant }), className)} {...props} />
})

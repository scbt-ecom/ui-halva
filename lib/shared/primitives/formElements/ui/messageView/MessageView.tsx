import { forwardRef, type HTMLAttributes, type ReactElement } from 'react'
import { type FieldError } from 'react-hook-form'
import { type MessageViewConfig, messageViewConfig } from './model'
import { cn } from '$/shared/utils'

export interface MessageViewProps extends MessageViewConfig, HTMLAttributes<HTMLDivElement> {
  className?: string
  children: string | FieldError['message'] | ReactElement
}

export const MessageView = forwardRef<HTMLDivElement, MessageViewProps>(({ variant, className, ...props }, ref) => {
  return <div ref={ref} className={cn(messageViewConfig({ variant }), className)} {...props} />
})

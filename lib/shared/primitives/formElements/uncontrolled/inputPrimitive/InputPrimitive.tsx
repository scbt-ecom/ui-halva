import { forwardRef, type HTMLAttributes, useId } from 'react'
import { Label } from '../../ui'
import { type ExternalHandlers, type InputPrimitiveClasses } from './model'
import { type DeepPartial } from '$/shared/types'
import { cn } from '$/shared/utils'

export interface InputPrimitiveProps extends HTMLAttributes<HTMLInputElement> {
  label: string
  externalHandlers?: ExternalHandlers
  invalid?: boolean
  classes?: DeepPartial<InputPrimitiveClasses>
}

export const InputPrimitive = forwardRef<HTMLInputElement, InputPrimitiveProps>(({ label, classes, ...props }, ref) => {
  const id = useId()

  return (
    <div className={cn('', classes?.container)}>
      <input className={cn('', classes?.input)} ref={ref} {...props} />
      <Label className={cn('', classes?.label)} id={id}>
        {label}
      </Label>
    </div>
  )
})

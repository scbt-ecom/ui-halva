import { type ComponentProps, forwardRef, type ReactElement, type ReactNode } from 'react'
import { type ButtonConfig, buttonConfig } from './model'
import type { DeepPartial } from '$/shared/types'
import { cn } from '$/shared/utils'

export type ButtonClasses = {
  root: string
  iconLeft: string
  iconRight: string
  text: string
}

export interface ButtonProps extends ComponentProps<'button'>, ButtonConfig {
  children: ReactNode
  iconLeft?: ReactElement
  iconRight?: ReactElement
  isLoading?: boolean
  classes?: DeepPartial<ButtonClasses>
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, iconLeft, iconRight, isLoading = false, type = 'button', variant, size, textFormat, ...props }, ref) => {
    return (
      <button type={type} ref={ref} className={cn(buttonConfig({ variant, size, textFormat, isLoading }))} {...props}>
        {iconLeft && <span className='flex size-5 items-center justify-center'>{iconLeft}</span>}

        <span>
          {children} {isLoading && <span>loader here....</span>}
        </span>

        {iconRight && <span className='flex size-5 items-center justify-center'>{iconRight}</span>}
      </button>
    )
  }
)

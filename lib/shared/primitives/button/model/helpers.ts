import { cva } from 'class-variance-authority'

export const buttonTextFormat = {
  capitalize: 'capitalize',
  uppercase: 'uppercase',
  lowercase: 'lowercase',
  initial: 'initial'
} as const

export const buttonType = {
  submit: 'submit',
  button: 'button',
  reset: 'reset'
} as const

export const buttonSize = {
  sm: 'h-10',
  md: 'h-12',
  lg: 'h-14'
} as const

export const buttonVariant = {} as const

export const buttonConfig = cva('', {
  variants: {
    isLoading: {
      true: '',
      false: ''
    },
    variant: buttonVariant,
    size: buttonSize,
    textFormat: buttonTextFormat
  }
})

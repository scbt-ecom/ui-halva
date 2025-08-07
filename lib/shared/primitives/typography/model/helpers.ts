import { cva } from 'class-variance-authority'

export const typographyTextFormat = {
  capitalize: 'capitalize',
  uppercase: 'uppercase',
  lowercase: 'lowercase',
  initial: 'initial'
} as const

export const typographyVariants = {
  'lg-600': 'text-lg-600',
  'lg-500': 'text-lg',

  'md-600': 'text-md-600',
  'md-500': 'text-md',

  'sm-600': 'text-sm-600',
  'sm-500': 'text-sm-500',

  'xs-600': 'text-xs-600',
  'xs-500': 'text-xs-500',

  'xxs-600': 'text-xxs-600',
  'xxs-500': 'text-xs-500',

  'xxxs-600': 'text-xxxs-600',
  'xxxs-500': 'text-xxxs-500'
} as const

export const typographyConfig = cva('', {
  variants: {
    variant: typographyVariants,
    textFormat: typographyTextFormat
  },
  defaultVariants: {}
})

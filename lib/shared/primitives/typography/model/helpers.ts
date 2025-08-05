import { cva } from 'class-variance-authority'

export const typographyConfig = cva('', {
  variants: {
    variant: {
      'body-l-strong': 'text-body-l-strong',
      'body-l': 'text-body-l'
    }
  },
  defaultVariants: {
    variant: 'body-l'
  }
})

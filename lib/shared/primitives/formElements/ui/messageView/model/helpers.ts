import { cva } from 'class-variance-authority'

export const messageViewConfig = cva('', {
  variants: {
    variant: {
      simple: '',
      error: ''
    }
  }
})

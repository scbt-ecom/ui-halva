import { cva } from 'class-variance-authority'

export const headingConfig = cva('', {
  variants: {
    as: {
      h1: '',
      h2: '',
      h3: '',
      h4: '',
      h5: '',
      h6: ''
    }
  },
  defaultVariants: {
    as: 'h2'
  }
})

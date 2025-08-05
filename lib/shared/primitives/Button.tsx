import { cn } from '../utils'

export interface ButtonProps {
  classes?: {
    button?: string
    text?: string
  }
}

export const Button = ({ classes }: ButtonProps) => {
  return (
    <div className={cn('desktop:text-title-xl', classes?.button)}>
      <span className={cn(classes?.text)}>Test button</span>
    </div>
  )
}

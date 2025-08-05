import type { HTMLAttributes } from 'react'

export interface HTMLProps extends HTMLAttributes<HTMLDivElement> {
  children: string
}

export const HTML = ({ children }: HTMLProps) => {
  return <div dangerouslySetInnerHTML={{ __html: children }} />
}

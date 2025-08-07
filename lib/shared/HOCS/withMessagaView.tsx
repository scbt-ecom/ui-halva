import { type ComponentType } from 'react'

export type WithMessageProps = {}

export const WithMessage = <T extends WithMessageProps>(Component: ComponentType<T>) => {
  return (hocProps: T) => {
    return (
      <div>
        <Component {...hocProps} />
      </div>
    )
  }
}

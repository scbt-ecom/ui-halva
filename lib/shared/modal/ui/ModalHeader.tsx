import type { ReactElement } from 'react'
import { Heading, Icon } from '../../primitives'
import type { DeepPartial } from '$/shared/types'
import { cn } from '$/shared/utils'

export type ModalHeaderClasses = {
  header: string
  heading: string
  iconWrapper: string
  icon: string
}

export interface ModalHeaderProps {
  closeModal: () => void
  heading?: string | ReactElement
  classes?: DeepPartial<ModalHeaderClasses>
}

export const ModalHeader = ({ classes, closeModal, heading }: ModalHeaderProps) => {
  return (
    <div className={cn('flex items-start justify-between gap-4', classes?.header)}>
      {heading && (
        <Heading as='h3' className={cn('text-color-dark flex-1', classes?.heading)}>
          {heading}
        </Heading>
      )}
      <span
        role='button'
        tabIndex={0}
        aria-label='Close modal'
        onClick={closeModal}
        onKeyDown={(event) => {
          if (event.key === 'Enter') closeModal()
        }}
        className={cn(
          'hover:bg-color-blue-grey-200 focus-visible:bg-color-blue-grey-200 rounded-sm p-0.5 outline-none transition-colors',
          classes?.iconWrapper
        )}
      >
        <Icon
          name='general/close'
          className={cn('text-icon-dark-hover ml-auto size-6 cursor-pointer outline-0', classes?.icon)}
        />
      </span>
    </div>
  )
}

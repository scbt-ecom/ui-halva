import { forwardRef, type ReactElement } from 'react'
import { type AllowedIcons, Icon } from '../../icon'
import { type DeepPartial } from '$/shared/types'
import { cn } from '$/shared/utils'

export type AccordionHeaderClasses = {
  trigger: string
  label: string
  iconWrapper: string
  icon: string
}

export interface AccordionHeaderProps {
  isOpen: boolean
  onClick: () => void
  label: string | ReactElement
  icon?: AllowedIcons
  classes?: DeepPartial<AccordionHeaderClasses>
}

export const AccordionHeader = forwardRef<HTMLButtonElement, AccordionHeaderProps>(
  ({ label, classes, isOpen, onClick, icon = 'general/plus' }, forwardedRef) => {
    return (
      <button
        ref={forwardedRef}
        data-open={isOpen}
        type='button'
        onClick={onClick}
        className={cn('flex w-full items-center justify-between gap-4 rounded-32 bg-[#F8F8F8] p-8', classes?.trigger)}
      >
        <div className={cn('', classes?.label)}>{label}</div>

        <div className={cn('flex size-8 items-center justify-center rounded-full bg-black', classes?.iconWrapper)}>
          <Icon name={icon} className={cn('rotate-0 text-white transition-transform', { 'rotate-45': isOpen }, classes?.icon)} />
        </div>
      </button>
    )
  }
)

AccordionHeader.displayName = 'AccordionHeader'

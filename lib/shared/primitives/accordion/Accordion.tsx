import { forwardRef, type ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { AccordionHeader, type AccordionHeaderClasses, type AccordionHeaderProps } from './ui'
import { useBoolean } from '$/shared/hooks'
import { type DeepPartial } from '$/shared/types'
import { cn } from '$/shared/utils'

export type AccordionClasses = {
  root?: string
  content?: string
  innerContent?: string
  header?: DeepPartial<AccordionHeaderClasses>
}

export interface AccordionProps extends Pick<AccordionHeaderProps, 'icon' | 'label'> {
  children: ReactNode
  defaultOpen?: boolean
  classes?: DeepPartial<AccordionClasses>
}

export const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  ({ defaultOpen = false, classes, children, label, icon }, ref) => {
    const [isOpen, setter] = useBoolean(defaultOpen)

    return (
      <div className={cn('w-full', classes?.root)}>
        <AccordionHeader label={label} icon={icon} isOpen={isOpen} onClick={() => setter()} />

        <AnimatePresence mode='sync' initial={false}>
          {isOpen && (
            <motion.div
              ref={ref}
              initial='collapsed'
              animate='expanded'
              transition={{
                duration: 0.3,
                ease: [0.04, 0.62, 0.23, 0.98]
              }}
              variants={{
                expanded: { opacity: 1, translateY: 0, height: 'auto' },
                collapsed: { opacity: 0, translateY: '-100%', height: 0 }
              }}
              className={cn('', classes?.content)}
            >
              <div className={cn('px-6 py-4', classes?.innerContent)}>{children}</div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    )
  }
)

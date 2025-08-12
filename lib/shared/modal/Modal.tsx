import { type ReactElement, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ModalHeader, type ModalHeaderClasses, type ModalHeaderProps, ModalIframeContent } from './ui'
import { cn } from '$/shared/utils'

export type ModalClasses = {
  overlay: string
  modal: string
  content: string
  modalHeader: ModalHeaderClasses
}

export interface ModalProps extends Omit<ModalHeaderProps, 'classes'> {
  isModalOpen: boolean
  children: ReactElement

  isPortal?: boolean
  portalContainer?: HTMLElement
  iframe?: boolean
  classes?: ModalClasses
}

export const Modal = ({
  heading,
  children,
  isModalOpen,
  isPortal = true,
  portalContainer = globalThis?.document?.body,
  closeModal,
  classes,
  iframe
}: ModalProps) => {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.body.style.overflow = 'visible'
    }
  }, [isModalOpen])

  const modalContent = (
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          data-test-id='modal-overlay'
          tabIndex={-1}
          onMouseDown={closeModal}
          ref={(node) => node?.focus()}
          className={cn(
            'bg-color-overlay fixed inset-0 flex h-screen w-screen items-center justify-center',
            { 'z-1000': !isPortal },
            classes?.overlay
          )}
          onKeyDown={(event) => {
            if (event.key === 'Escape') closeModal()
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <motion.div
            data-test-id='modal'
            onClick={(event) => event.stopPropagation()}
            onMouseDown={(event) => event.stopPropagation()}
            className={cn(
              'bg-color-white w-full max-w-[600px] rounded-md px-4 py-6 shadow-sm desktop:px-6 desktop:py-8',
              classes?.modal
            )}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <ModalHeader heading={heading} closeModal={closeModal} classes={classes?.modalHeader} />
            {iframe ? (
              <ModalIframeContent ref={iframeRef} className={cn('mt-4', classes?.content)}>
                {(iframeBody) => createPortal(children, iframeBody)}
              </ModalIframeContent>
            ) : (
              <div className={cn('mt-4', classes?.content)}>{children}</div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )

  return <>{isPortal ? createPortal(modalContent, portalContainer) : modalContent}</>
}

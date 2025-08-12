import { type Control, type FieldValues, type Path, useController, type UseControllerProps } from 'react-hook-form'
import { MessageView } from '../../ui'
import { InputPrimitive, type InputPrimitiveClasses, type InputPrimitiveProps } from '../../uncontrolled'
import type { DeepPartial } from '$/shared/types'
import { cn } from '$/shared/utils'

export type InputControlClasses = {
  root: string
  message: string
  inputClasses: InputPrimitiveClasses
}

export type InputControlProps<T extends FieldValues, Name extends Path<T> = Path<T>> = Omit<InputPrimitiveProps, 'classes'> &
  UseControllerProps<T, Name> & {
    control: Control<T>
    helperText?: string
    classes?: DeepPartial<InputControlClasses>
  }

export const InputControl = <T extends FieldValues>({
  control,
  name,
  defaultValue,
  disabled,
  rules,
  shouldUnregister,
  helperText,
  classes,
  ...props
}: InputControlProps<T>) => {
  const { field, fieldState } = useController({
    control,
    name,
    defaultValue,
    disabled,
    rules,
    shouldUnregister
  })

  const { error, invalid } = fieldState
  const { root, message, inputClasses } = classes || {}

  return (
    <div className={cn('w-full', root)}>
      <InputPrimitive invalid={invalid} classes={inputClasses} {...props} {...field} />
      <MessageView className={message} disabled={disabled} variant={error ? 'error' : 'simple'}>
        {error?.message || helperText}
      </MessageView>
    </div>
  )
}

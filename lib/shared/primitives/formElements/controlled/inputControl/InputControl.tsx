import { type Control, type FieldValues, type Path, useController, type UseControllerProps } from 'react-hook-form'
import { InputPrimitive, type InputPrimitiveProps } from '../../uncontrolled'

export type InputControlProps<T extends FieldValues, Name extends Path<T> = Path<T>> = InputPrimitiveProps &
  UseControllerProps<T, Name> & {
    control: Control<T>
    helperText?: string
  }

export const InputControl = <T extends FieldValues>({
  control,
  name,
  defaultValue,
  disabled,
  rules,
  shouldUnregister,
  ...props
}: InputControlProps<T>) => {
  const { field } = useController({
    control,
    name,
    defaultValue,
    disabled,
    rules,
    shouldUnregister
  })

  // const { error, invalid, isTouched } = fieldState
  return (
    <div>
      <InputPrimitive {...props} {...field} />
    </div>
  )
}

// const InputControlWithMessage = WithMessage(InputControl)
//
// const App = () => {
//   return <InputControlWithMessage label='afs' />
// }

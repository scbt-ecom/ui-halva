export type ExternalHandlers = {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
}

export type InputPrimitiveClasses = {
  container: string
  input: string
  label: string
}

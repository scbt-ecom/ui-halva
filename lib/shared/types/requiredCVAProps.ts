export type RequiredCVAProps<T, K extends keyof T> = {
  [P in K]-?: Exclude<T[P], null | undefined>
} & Omit<T, K>

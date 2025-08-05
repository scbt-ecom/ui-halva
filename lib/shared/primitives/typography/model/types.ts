import type * as React from 'react'
import type { VariantProps } from 'class-variance-authority'
import { type typographyConfig } from './helpers'
import type { RequiredProps } from '$/shared/types'

export type ElementVariant = keyof Pick<React.JSX.IntrinsicElements, 'div' | 'span' | 'p'>
export type TypographyConfig = RequiredProps<VariantProps<typeof typographyConfig>, 'variant'>

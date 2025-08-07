import type { VariantProps } from 'class-variance-authority'
import { type typographyConfig } from './helpers'
import type { RequiredCVAProps } from '$/shared/types'

export type TypographyConfig = RequiredCVAProps<VariantProps<typeof typographyConfig>, 'variant'>

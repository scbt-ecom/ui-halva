import type { HeadingFontConfig, TextFontConfig } from './types'

export const textVariants: TextFontConfig = {
  'lg-600': ['24px', { lineHeight: '28px', fontWeight: '600' }],
  'lg-500': ['24px', { lineHeight: '28px', fontWeight: '500' }],
  'md-600': ['18px', { lineHeight: '24px', fontWeight: '600' }],
  'md-500': ['18px', { lineHeight: '24px', fontWeight: '500' }],
  'sm-600': ['16px', { lineHeight: '24px', fontWeight: '600' }],
  'sm-500': ['16px', { lineHeight: '24px', fontWeight: '500' }],
  'xs-600': ['14px', { lineHeight: '20px', fontWeight: '600' }],
  'xs-500': ['14px', { lineHeight: '20px', fontWeight: '500' }],
  'xxs-600': ['12px', { lineHeight: '16px', fontWeight: '600' }],
  'xxs-500': ['12px', { lineHeight: '16px', fontWeight: '500' }],
  'xxxs-600': ['10px', { lineHeight: '12px', fontWeight: '600' }],
  'xxxs-500': ['10px', { lineHeight: '12px', fontWeight: '500' }]
} as const

export const headingVariants: HeadingFontConfig = {
  'h1-600': ['46px', { lineHeight: '58px', fontWeight: '600' }],
  'h1-500': ['46px', { lineHeight: '58px', fontWeight: '500' }],

  'h2-600': ['40px', { lineHeight: '50px', fontWeight: '600' }],
  'h2-500': ['40px', { lineHeight: '50px', fontWeight: '500' }],

  'h3-600': ['32px', { lineHeight: '42px', fontWeight: '600' }],
  'h3-500': ['32px', { lineHeight: '42px', fontWeight: '500' }],

  'h4-600': ['28px', { lineHeight: '36px', fontWeight: '600' }],
  'h4-500': ['28px', { lineHeight: '36px', fontWeight: '500' }],

  'h5-600': ['24px', { lineHeight: '32px', fontWeight: '600' }],
  'h5-500': ['24px', { lineHeight: '32px', fontWeight: '500' }],

  'h6-600': ['22px', { lineHeight: '28px', fontWeight: '600' }],
  'h6-500': ['22px', { lineHeight: '28px', fontWeight: '500' }]
} as const

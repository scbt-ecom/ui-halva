export type FontParagraphLiterals =
  | 'lg-600'
  | 'lg-500'
  | 'md-600'
  | 'md-500'
  | 'sm-600'
  | 'sm-500'
  | 'xs-600'
  | 'xs-500'
  | 'xxs-600'
  | 'xxs-500'
  | 'xxxs-600'
  | 'xxxs-500'

export type FontHeadingLiterals =
  | 'h1-600'
  | 'h1-500'
  | 'h2-600'
  | 'h2-500'
  | 'h3-600'
  | 'h3-500'
  | 'h4-600'
  | 'h4-500'
  | 'h5-600'
  | 'h5-500'
  | 'h6-600'
  | 'h6-500'

export type FontConfigTuple = [string, { lineHeight: string; fontWeight: string }]

export type TextFontConfig = Record<FontParagraphLiterals, FontConfigTuple>
export type HeadingFontConfig = Record<FontHeadingLiterals, FontConfigTuple>

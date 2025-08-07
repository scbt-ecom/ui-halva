import type { Config } from 'tailwindcss'
import { borderRadius, headingVariants, textVariants } from './lib/shared/constants'

//Todo:нужно добавить эти куда либо //////////////////////////////////////////
// 'title-xxs-600': ['18px', { lineHeight: '28px', fontWeight: '600' }],
// 'title-xxs': ['18px', { lineHeight: '28px', fontWeight: '500' }]
// //////////////////////////////////////////

const tailwindConfig: Config = {
  content: ['/index.html', './src/**/*.{js,ts,jsx,tsx,mdx}', './lib/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      screens: {
        mobile: { max: '1187px' },
        desktop: '1188px'
      },
      borderRadius: borderRadius,
      fontSize: {
        ...textVariants,
        ...headingVariants
      }
    }
  }
}

export default tailwindConfig

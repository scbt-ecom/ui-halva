import type { Config } from 'tailwindcss'

const tailwindConfig: Config = {
  content: ['/index.html', './src/**/*.{js,ts,jsx,tsx,mdx}', './lib/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      screens: {
        mobile: { max: '1187px' },
        desktop: '1188px'
      },
      fontSize: {
        'title-xl-strong': ['46px', { lineHeight: '58px', fontWeight: '600' }],
        'title-xl': ['46px', { lineHeight: '58px', fontWeight: '500' }],
        'title-l-strong': ['40px', { lineHeight: '50px', fontWeight: '600' }],
        'title-l': ['40px', { lineHeight: '50px', fontWeight: '500' }],
        'title-m-strong': ['32px', { lineHeight: '42px', fontWeight: '600' }],
        'title-m': ['32px', { lineHeight: '42px', fontWeight: '500' }],
        'title-xm-strong': ['28px', { lineHeight: '36px', fontWeight: '600' }],
        'title-xm': ['28px', { lineHeight: '36px', fontWeight: '500' }],
        'title-s-strong': ['24px', { lineHeight: '32px', fontWeight: '600' }],
        'title-s': ['24px', { lineHeight: '32px', fontWeight: '500' }],
        'title-xs-strong': ['22px', { lineHeight: '28px', fontWeight: '600' }],
        'title-xs': ['22px', { lineHeight: '28px', fontWeight: '500' }],
        'title-xxs-strong': ['18px', { lineHeight: '28px', fontWeight: '600' }],
        'title-xxs': ['18px', { lineHeight: '28px', fontWeight: '500' }],

        'body-l-strong': ['24px', { lineHeight: '28px', fontWeight: '600' }],
        'body-l': ['24px', { lineHeight: '28px', fontWeight: '500' }],
        'body-m-strong': ['18px', { lineHeight: '24px', fontWeight: '600' }],
        'body-m': ['18px', { lineHeight: '24px', fontWeight: '500' }],
        'body-s-strong': ['16px', { lineHeight: '24px', fontWeight: '600' }],
        'body-s': ['16px', { lineHeight: '24px', fontWeight: '500' }],
        'body-xs-strong': ['14px', { lineHeight: '20px', fontWeight: '600' }],
        'body-xs': ['14px', { lineHeight: '20px', fontWeight: '500' }],
        'body-xxs-strong': ['12px', { lineHeight: '16px', fontWeight: '600' }],
        'body-xxs': ['12px', { lineHeight: '16px', fontWeight: '500' }],
        'body-xxxs-strong': ['10px', { lineHeight: '12px', fontWeight: '600' }],
        'body-xxxs': ['10px', { lineHeight: '12px', fontWeight: '500' }]
      }
    }
  }
}

export default tailwindConfig

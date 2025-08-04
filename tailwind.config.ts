import type { Config } from 'tailwindcss'

const tailwindConfig: Config = {
  content: ['/index.html', './src/**/*.{js,ts,jsx,tsx,mdx}', './lib/**/*.{js,ts,jsx,tsx,mdx}']
}

export default tailwindConfig

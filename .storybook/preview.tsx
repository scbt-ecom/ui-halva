import '../lib/shared/style.css'
import { CUSTOM_VIEWPORTS } from './_config'
import type { Preview } from '@storybook/react'
import { withConsole } from '@storybook/addon-console'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

const preview: Preview = {
  // @ts-ignore
  decorators: [(storyFn, context) => withConsole()(storyFn)(context), (Story) => <Story />],

  parameters: {
    layout: 'fullscreen',

    viewport: {
      viewports: {
        ...CUSTOM_VIEWPORTS,
        ...INITIAL_VIEWPORTS
      },
      defaultViewport: 'fullscreen'
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
}

export default preview

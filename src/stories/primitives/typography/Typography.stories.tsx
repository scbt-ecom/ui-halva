import type { Meta, StoryObj } from '@storybook/react'
import { Typography } from '$/shared/primitives'

const meta = {
  title: 'Typography/Typography',
  component: Typography,
  parameters: {
    layout: 'centered'
  },

  tags: ['autodocs']
} satisfies Meta<typeof Typography>

export default meta

type Story = StoryObj<typeof Typography>

export const Base: Story = {
  args: {
    as: 'div',
    children: 'Обычный текст'
  }
}

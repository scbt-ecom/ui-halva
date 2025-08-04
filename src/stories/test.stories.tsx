import type { Meta, StoryObj } from '@storybook/react'

const Breadcrumbs = () => {
  return 'Breadcrumbs'
}

const meta = {
  title: 'Navigation/Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    layout: 'centered'
  },

  tags: ['autodocs']
} satisfies Meta<typeof Breadcrumbs>

export default meta

type Story = StoryObj<typeof meta>

export const Base: Story = {
  args: {}
}

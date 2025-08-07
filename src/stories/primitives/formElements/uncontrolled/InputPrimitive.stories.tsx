import type { Meta, StoryObj } from '@storybook/react'
import { InputPrimitive } from '$/shared/primitives'

const meta = {
  title: 'Form Elements/InputPrimitive',
  component: InputPrimitive,
  parameters: {
    layout: 'centered'
  },

  tags: ['autodocs']
} satisfies Meta<typeof InputPrimitive>

export default meta

type Story = StoryObj<typeof InputPrimitive>

export const Base: Story = {
  args: {}
}

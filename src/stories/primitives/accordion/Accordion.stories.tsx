import type { Meta, StoryObj } from '@storybook/react'
import { Accordion } from '$/shared/primitives'

const meta = {
  title: 'Interactive/Accordion',
  component: Accordion,
  parameters: {
    layout: 'fullscreen'
  },
  decorators: [(Story) => <div className='p-20'>{Story()}</div>],
  tags: ['autodocs']
} satisfies Meta<typeof Accordion>

export default meta

type Story = StoryObj<typeof Accordion>

export const Base: Story = {
  args: {
    label: 'Что такое подписка «Халва.Десятка»?',
    children: 'Контент аккордеона'
  }
}

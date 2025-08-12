import type { ComponentType, ElementType } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { type FontConfigTuple, type FontParagraphLiterals, textVariants } from '$/shared/constants'
import { Typography, type TypographyProps } from '$/shared/primitives'

const meta = {
  title: 'Typography/Typography',
  component: Typography as ComponentType<TypographyProps & { as?: ElementType }>,
  parameters: {
    layout: 'centered'
  },

  tags: ['autodocs']
} satisfies Meta<typeof Typography>

export default meta

type Story = StoryObj<typeof Typography>

export const Base: Story = {
  args: {
    as: 'p',
    variant: 'md-500',
    children: 'Обычный текст'
  }
}

export const PolymorphicLinkElement: Story = {
  args: {
    as: 'a',
    href: 'https://sovcombank.ru',
    target: '_blank',
    rel: 'noopener noreferrer',
    variant: 'lg-500',
    children: 'Ссылка',
    className: ' underline text-blue-800 underline-offset-4'
  }
}

export const AllVariants = {
  render: () => {
    const variations = Object.entries(textVariants) as [FontParagraphLiterals, FontConfigTuple][]
    return (
      <div className='flex flex-col'>
        <ul className='grid list-none grid-cols-5 gap-12 rounded-t-md bg-blue-800 p-4 text-center italic text-white'>
          <li>Токен</li>
          <li>Размер текста</li>
          <li>Жирность</li>
          <li>Межстрочное расстояние</li>
          <li>Визуальное отображение</li>
        </ul>

        <div className='flex flex-col gap-2 rounded-b-md border bg-gray-100'>
          {variations.map(([key, tuple]) => {
            const [fontSize, { lineHeight, fontWeight }] = tuple

            return (
              <ul
                className='grid list-none grid-cols-5 items-center gap-6 border-b border-gray-300 px-4 py-3 text-center last:border-0'
                key={key}
              >
                <li>{key}</li>
                <li>{fontSize}</li>
                <li>{fontWeight === '600' ? 'SemiBold / 600' : 'Medium  / 500'}</li>
                <li>{lineHeight}</li>
                <Typography variant={key}>Текст</Typography>
              </ul>
            )
          })}
        </div>
      </div>
    )
  }
}

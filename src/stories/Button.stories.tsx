import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../components/Button'

const meta = {
  title: 'Componentes/Button',
  component: Button,
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Numero: Story = {
  args: {
    label: '7',
    onClick: () => {},
  },
}

export const Operacion: Story = {
  args: {
    label: '+',
    onClick: () => {},
  },
}
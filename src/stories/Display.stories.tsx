import type { Meta, StoryObj } from '@storybook/react'
import { Display } from '../components/Display'
import '../App.css'

const meta = {
  title: 'Componentes/Display',
  component: Display,
} satisfies Meta<typeof Display>

export default meta

type Story = StoryObj<typeof meta>

export const Normal: Story = {
  args: {
    value: '12345',
  },
}

export const Error: Story = {
  args: {
    value: 'ERROR',
  },
}
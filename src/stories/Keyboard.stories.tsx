import type { Meta, StoryObj } from '@storybook/react'
import { Keyboard } from '../components/Keyboard'
import '../App.css'

const meta = {
  title: 'Componentes/Keyboard',
  component: Keyboard,
} satisfies Meta<typeof Keyboard>

export default meta

type Story = StoryObj<typeof meta>

export const Completo: Story = {
  args: {
    onPress: () => {},
  },
}
import type { Meta, StoryObj } from '@storybook/react'
import { Calculator } from '../components/Calculator'
import '../App.css'

const meta = {
  title: 'Componentes/Calculator',
  component: Calculator,
} satisfies Meta<typeof Calculator>

export default meta

type Story = StoryObj<typeof meta>

export const Principal: Story = {}
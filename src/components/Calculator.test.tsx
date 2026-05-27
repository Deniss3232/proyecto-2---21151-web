import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { test, expect } from 'vitest'
import { Calculator } from './Calculator'

test('realiza una suma correctamente', async () => {
  render(<Calculator />)

  await userEvent.click(screen.getByLabelText('Botón 2'))
  await userEvent.click(screen.getByLabelText('Botón +'))
  await userEvent.click(screen.getByLabelText('Botón 3'))
  await userEvent.click(screen.getByLabelText('Botón ='))

  const display = document.querySelector('.display')

expect(display).toHaveTextContent('5')
})

test('muestra ERROR si el resultado es negativo', async () => {
  render(<Calculator />)

  await userEvent.click(screen.getByLabelText('Botón 5'))
  await userEvent.click(screen.getByLabelText('Botón -'))
  await userEvent.click(screen.getByLabelText('Botón 9'))
  await userEvent.click(screen.getByLabelText('Botón ='))

  expect(screen.getByText('ERROR')).toBeInTheDocument()
})

test('ignora números después de 9 caracteres', async () => {
  render(<Calculator />)

  for (const number of '123456789') {
    await userEvent.click(screen.getByLabelText(`Botón ${number}`))
  }

  await userEvent.click(screen.getByLabelText('Botón 0'))

  expect(screen.getByText('123456789')).toBeInTheDocument()
})

test('permite usar punto decimal', async () => {
  render(<Calculator />)

  await userEvent.click(screen.getByLabelText('Botón 1'))
  await userEvent.click(screen.getByLabelText('Botón .'))
  await userEvent.click(screen.getByLabelText('Botón 5'))

  expect(screen.getByText('1.5')).toBeInTheDocument()
})

test('permite limpiar la calculadora', async () => {
  render(<Calculator />)

  await userEvent.click(screen.getByLabelText('Botón 8'))
  await userEvent.click(screen.getByLabelText('Botón C'))

  const display = document.querySelector('.display')

  expect(display).toHaveTextContent('0')
})
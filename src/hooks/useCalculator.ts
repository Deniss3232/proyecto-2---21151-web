import { useState } from 'react'

type Operation = '+' | '-' | '*' | '/' | '%' | null

const MAX_VALUE = 999999999
const MAX_LENGTH = 9

function formatResult(value: number) {
  if (value < 0 || value > MAX_VALUE || !Number.isFinite(value)) {
    return 'ERROR'
  }

  const text = String(value)

  if (text.length > MAX_LENGTH) {
    return 'ERROR'
  }

  return text
}

function calculate(a: number, b: number, operation: Operation) {
  if (operation === '+') return a + b
  if (operation === '-') return a - b
  if (operation === '*') return a * b
  if (operation === '/') return a / b
  if (operation === '%') return a % b
  return b
}

export function useCalculator() {
  const [display, setDisplay] = useState('0')
  const [firstNumber, setFirstNumber] = useState<number | null>(null)
  const [operation, setOperation] = useState<Operation>(null)
  const [shouldClear, setShouldClear] = useState(false)

  function pressNumber(value: string) {
    if (display === 'ERROR') return

    if (shouldClear) {
      setDisplay(value)
      setShouldClear(false)
      return
    }

    if (display.length >= MAX_LENGTH) return

    if (display === '0') {
      setDisplay(value)
    } else {
      setDisplay(display + value)
    }
  }

  function pressDecimal() {
    if (display.includes('.') || display.length >= MAX_LENGTH) return
    setDisplay(display + '.')
  }

  function pressOperation(nextOperation: Operation) {
    if (display === 'ERROR') return

    const currentNumber = Number(display)

    if (firstNumber !== null && operation) {
      const result = calculate(firstNumber, currentNumber, operation)
      const formatted = formatResult(result)

      setDisplay(formatted)
      setFirstNumber(formatted === 'ERROR' ? null : Number(formatted))
    } else {
      setFirstNumber(currentNumber)
    }

    setOperation(nextOperation)
    setShouldClear(true)
  }

  function pressEqual() {
    if (firstNumber === null || operation === null || display === 'ERROR') return

    const secondNumber = Number(display)
    const result = calculate(firstNumber, secondNumber, operation)
    const formatted = formatResult(result)

    setDisplay(formatted)
    setFirstNumber(null)
    setOperation(null)
    setShouldClear(true)
  }

  function changeSign() {
    if (display === 'ERROR' || display === '0') return

    const nextValue = display.startsWith('-')
      ? display.slice(1)
      : `-${display}`

    if (nextValue.length <= MAX_LENGTH) {
      setDisplay(nextValue)
    }
  }

  function clear() {
    setDisplay('0')
    setFirstNumber(null)
    setOperation(null)
    setShouldClear(false)
  }

  function pressKey(value: string) {
    if ('0123456789'.includes(value)) pressNumber(value)
    if (value === '.') pressDecimal()
    if (['+', '-', '*', '/', '%'].includes(value)) {
      pressOperation(value as Operation)
    }
    if (value === '=') pressEqual()
    if (value === '+/-') changeSign()
    if (value === 'C') clear()
  }

  return { display, pressKey }
}
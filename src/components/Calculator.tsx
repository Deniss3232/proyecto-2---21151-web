import { Display } from './Display'
import { Keyboard } from './Keyboard'
import { useCalculator } from '../hooks/useCalculator'

export function Calculator() {
  const { display, pressKey } = useCalculator()

  return (
    <main className="calculator">
      <h1>Calculadora React</h1>
      <Display value={display} />
      <Keyboard onPress={pressKey} />
    </main>
  )
}
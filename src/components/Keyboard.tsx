import { Button } from './Button'

type KeyboardProps = {
  onPress: (value: string) => void
}

const keys = [
  '7', '8', '9', '+',
  '4', '5', '6', '-',
  '1', '2', '3', '*',
  '0', '.', '=', '/',
  '%', '+/-', 'C'
]

export function Keyboard({ onPress }: KeyboardProps) {
  return (
    <div className="keyboard">
      {keys.map((key) => (
        <Button key={key} label={key} onClick={() => onPress(key)} />
      ))}
    </div>
  )
}
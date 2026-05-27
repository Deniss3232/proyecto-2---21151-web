type ButtonProps = {
  label: string
  onClick: () => void
}

export function Button({ label, onClick }: ButtonProps) {
  return (
    <button aria-label={`Botón ${label}`} onClick={onClick}>
      {label}
    </button>
  )
}
import { ReactNode } from 'react'
import { ButtonContainer } from './styles'

interface ButtonType {
  text: string
  onClick: () => void
  width?: string
  height?: string
  icon?: ReactNode
  disabled?: boolean
}

export function Button({ text, onClick, width, height, icon, disabled }: ButtonType) {

  return (
    <ButtonContainer
      disabled={disabled}
      width={width}
      height={height}
      onClick={onClick}
    >
      {icon}
      <span>{text}</span>
    </ButtonContainer>
  )
}

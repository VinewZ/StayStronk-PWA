import { PlusCircle } from 'phosphor-react'
import { ReactNode } from 'react'
import { theme } from '../../../GlobalStyles/Theme'
import { ButtonContainer } from './styles'

interface ButtonProps {
  text: string
  onClick: () => void
  width?: string
  height?: string
  icon?: ReactNode
}

export function Button({text, onClick, width, height, icon}: ButtonProps) {

  return (
    <ButtonContainer width={width} height={height} onClick={onClick}>
        {icon}
        <span>{text}</span>
    </ButtonContainer>
  )
}

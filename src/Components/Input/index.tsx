import React, { ReactNode } from 'react'
import { InputContainer, InputElement } from './styles'

interface InputType {
  type: string
  placeholder?: string
  value: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  width?: string
  height?: string
  icon?: ReactNode
  margin?: string
}

export function Input({ type, placeholder, value, onChange, width, height, icon, margin }: InputType) {

  return (
    <InputContainer width={width} height={height} margin={margin}>
      {icon}
      <InputElement
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </InputContainer>
  )
}

import React, { useState } from 'react'
import { InputContainer, InputElement, SearchIcon } from './styles'

interface InputProps {
    type: string
    placeholder?: string
    value: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    width?: string
    height?: string
}

export function Input({type, placeholder, value, onChange, width, height}: InputProps) {

  return (
    <InputContainer width={width} height={height}>
        <SearchIcon size={24}/>
        <InputElement 
            type={type} 
            placeholder={placeholder} 
            value={value}
            onChange={onChange}
        />
    </InputContainer>
  )
}

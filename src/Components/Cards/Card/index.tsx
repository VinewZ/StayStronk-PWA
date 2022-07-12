import React from 'react'
import { useNavigate } from 'react-router-dom'
import { CardContainer, CardDescription, CardImage, CardInfo, CardTitle } from './styles'

interface CardProps {
    title: string
    description: string
    image: string
    linkTo?: string
}

export function Card({ image, title, description, linkTo }: CardProps) {

  const navigate = useNavigate()

  function navigateTo() {
    if (linkTo) {
      navigate(linkTo)
    }
  }

  return (
    <CardContainer onClick={navigateTo} >
        <CardInfo>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
        </CardInfo>
        <CardImage src={image} alt={title}/>
    </CardContainer>
  )
}

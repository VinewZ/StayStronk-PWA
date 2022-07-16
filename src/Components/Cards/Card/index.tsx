import { useNavigate } from 'react-router-dom'
import { CardContainer, CardDescription, CardImage, CardInfo, CardTitle } from './styles'

interface CardType {
  title: string
  image: string
  description?: string
  linkTo?: string
  onClick?: any
}

export function Card({ image, title, description, linkTo, onClick }: CardType) {

  const navigate = useNavigate()

  function navigateTo() {
    if (!linkTo) return
    navigate(linkTo)
  }

  return (
    <CardContainer onClick={onClick ? onClick : navigateTo}>
      <CardInfo>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardInfo>
      <CardImage src={image} alt={title} />
    </CardContainer>
  )
}

import { CardImage, ExerciseCardContainer, ExerciseCardInfo, ExerciseExtra, ExerciseTarget, ExerciseTitle } from './styles'

interface CardType {
  target: string
  title: string
  bodyPart: string
  equipment: string
  image: string
  onClick: () => void
}

export function ExerciseCard({ target, title, bodyPart, equipment, image, onClick }: CardType) {

  return (
    <ExerciseCardContainer onClick={onClick}>
      <CardImage src={image} alt={title} />
      <ExerciseCardInfo>
        <ExerciseTarget>{target}</ExerciseTarget>
        <ExerciseTitle>{title}</ExerciseTitle>
        <ExerciseExtra>{bodyPart}</ExerciseExtra>
        <ExerciseExtra>{equipment}</ExerciseExtra>
      </ExerciseCardInfo>
    </ExerciseCardContainer>
  )
}

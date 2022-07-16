import { useNavigate } from "react-router-dom";
import { RoutineCardFooter, RoutineCardHeader, RoutinesCardContainer, RoutinesCardImage, RoutinesCardInfo } from "./styles";

interface RoutinesCardType {
  title: string,
  description: string,
  bodyPart: string;
  linkTo: string;
}

export function RoutinesCard({ title, description, bodyPart, linkTo }: RoutinesCardType) {

  const navigate = useNavigate()

  function navigateTo() {
    navigate(linkTo)
  }

  return (
    <RoutinesCardContainer onClick={linkTo ? navigateTo : undefined}>
      <RoutinesCardImage src="https://loremflickr.com/320/240" alt="" />
      <RoutinesCardInfo>
        <RoutineCardHeader>
          <h3>{title}</h3>
          <p>{description}</p>
        </RoutineCardHeader>
        <RoutineCardFooter>
          <small>{bodyPart}</small>
        </RoutineCardFooter>
      </RoutinesCardInfo>
    </RoutinesCardContainer>
  )
}

import { MagnifyingGlass } from "phosphor-react";
import { RoutinesCard } from "../../Components/Cards/RoutinesCard";
import { CreateNewRoutine } from "../../Components/CreateNewRoutine";
import { Input } from "../../Components/Input";
import { useRoutines } from "../../Hooks/useRoutines";
import { RoutinesPage, RoutinesPageHeader } from "./styles";

export function Routines() {

  const { userRoutines } = useRoutines()

  return (
    <RoutinesPage>
      <RoutinesPageHeader>
        <CreateNewRoutine />
        <Input
          icon={<MagnifyingGlass size={24} />}
          width={"50%"}
          type="text"
          placeholder="Search routine..."
          value=""
          onChange={() => { }}
        />
      </RoutinesPageHeader>

      {userRoutines.length > 0 &&
        userRoutines.map((routine, index) => (
          <RoutinesCard
            key={index}
            title={routine.title}
            description={routine.exercises[0].equipment}
            bodyPart={routine.exercises[0].bodyPart}
            linkTo={`/routine/${routine.title}/${routine.id}`}
          />
        ))}
    </RoutinesPage>
  )
}

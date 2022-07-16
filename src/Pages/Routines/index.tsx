import { MagnifyingGlass } from "phosphor-react";
import { Card } from "../../Components/Cards/Card";
import { CreateNewRoutine } from "../../Components/CreateNewRoutine";
import { Input } from "../../Components/Input";
import { useRoutines } from "../../Hooks/useRoutines";
import { RoutinesPage } from "./styles";

export function Routines() {

  const { userRoutines } = useRoutines()

  return (
    <>
      <RoutinesPage>
        <div className="">
          <CreateNewRoutine />
          <Input
            icon={<MagnifyingGlass size={24} />}
            width={"50%"}
            type="text"
            placeholder="Search routine..."
            value=""
            onChange={() => { }}
          />
        </div>


        {userRoutines.length > 0 &&
          userRoutines.map((routine, index) => (
            <Card
              key={index}
              title={routine.title}
              image={'https://loremflickr.com/320/240'}
              linkTo={`/routine/${routine.title}/${routine.id}`}
            />
          ))}
      </RoutinesPage>
    </>
  )
}

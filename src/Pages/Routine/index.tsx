import { Fragment } from "react";
import { useParams } from "react-router-dom";
import { Card } from "../../Components/Cards/Card";
import { useRoutines } from "../../Hooks/useRoutines";
import { RoutinePage } from "./styles";

export function Routine() {

  const { userRoutines } = useRoutines()
  const { id } = useParams()

  return (
    <RoutinePage>
      {
        userRoutines.map(routine => {
          if (routine.id === id) {
            return (
              <Fragment key={routine.id} >
                <h2>{routine.title}</h2>
                {
                  routine.exercises.map(exercise => (
                    <Card
                      key={exercise.id}
                      title={exercise.name}
                      image={exercise.gifUrl}
                    />
                  ))
                }
              </Fragment>
            )
          }
        })
      }
    </RoutinePage>
  )
}
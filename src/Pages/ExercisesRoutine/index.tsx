import { Fragment } from "react";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import { ExerciseCard } from "../../Components/Cards/ExerciseCard";
import { useRoutines } from "../../Hooks/useRoutines";
import { ExercisesRoutinePage } from "./styles";

export function ExercisesRoutine() {

  const { userRoutines } = useRoutines()
  const { id } = useParams()

  return (
    <ExercisesRoutinePage>
      {
        userRoutines.map(routine => {
          if (routine.id === id) {
            return (
              <Fragment key={routine.id} >
                <h2>{routine.title}</h2>
                {
                  routine.exercises.map(exercise => (
                    <ExerciseCard
                      key={uuidv4()}
                      title={exercise.name}
                      image={exercise.gifUrl}
                      target={exercise.target}
                      bodyPart={exercise.bodyPart}
                      equipment={exercise.equipment}
                    />
                  ))
                }
              </Fragment>
            )
          }
        })
      }
    </ExercisesRoutinePage>
  )
}
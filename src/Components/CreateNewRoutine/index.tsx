import { PlusCircle } from 'phosphor-react';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ExercisesType } from '../../Contexts/FetchExercises';
import { Button } from '../Buttons/Primary';
import { ExercisesModal } from '../Modal/ExercisesModal';
import { NewRoutineModal } from '../Modal/NewRoutineModal';

export interface NewRoutineType {
  id: string
  title: string
  exercises: ExercisesType[]
}

export function CreateNewRoutine() {

  const [isCreateNewRoutineModalOpen, setIsCreateNewRoutineModalOpen] = useState(false);
  const [isExercisesModalOpen, setIsExercisesModalOpen] = useState(false);
  const [newRoutine, setNewRoutine] = useState<NewRoutineType>({
    id: uuidv4(),
    title: '',
    exercises: []
  });

  function openModal() {
    setIsCreateNewRoutineModalOpen(true);
  }

  return (
    <>
      <Button
        width={"50%"}
        text="New Routine"
        icon={<PlusCircle size={24} />}
        onClick={openModal}
      />


      {/* ---- MODAL ---- */}
      {isCreateNewRoutineModalOpen ?
        <NewRoutineModal
          isCreateNewRoutineModalOpen={isCreateNewRoutineModalOpen}
          setIsCreateNewRoutineModalOpen={setIsCreateNewRoutineModalOpen}
          newRoutine={newRoutine}
          setNewRoutine={setNewRoutine}
          setIsExercisesModalOpen={setIsExercisesModalOpen}

        /> :
        <ExercisesModal
          isExercisesModalOpen={isExercisesModalOpen}
          setIsExercisesModalOpen={setIsExercisesModalOpen}
          newRoutine={newRoutine}
          setNewRoutine={setNewRoutine}
          setIsCreateNewRoutineModalOpen={setIsCreateNewRoutineModalOpen}
        />}

    </>
  )
}

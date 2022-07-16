import { Dispatch, SetStateAction } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useExercises } from '../../../Hooks/useExercises';
import { Card } from '../../Cards/Card';
import { NewRoutineType } from '../../CreateNewRoutine';
import { ExercisesStyledModal } from './styles';

interface ExercisesModalType {
    isExercisesModalOpen: boolean;
    setIsExercisesModalOpen: Dispatch<SetStateAction<boolean>>;
    newRoutine: NewRoutineType;
    setNewRoutine: Dispatch<SetStateAction<NewRoutineType>>;
    setIsCreateNewRoutineModalOpen: Dispatch<SetStateAction<boolean>>;
}

export function ExercisesModal({ isExercisesModalOpen, setIsExercisesModalOpen, newRoutine, setNewRoutine, setIsCreateNewRoutineModalOpen }: ExercisesModalType) {

    const { allExercises } = useExercises()

    function closeModal() {
        setIsExercisesModalOpen(false);
    }

    return (
        <ExercisesStyledModal
            isOpen={isExercisesModalOpen}
            onBackgroundClick={closeModal}
            onEscapeKeydown={closeModal}
        >
            {allExercises.map(exercise => (
                <Card
                    key={uuidv4()}
                    image={exercise.gifUrl}
                    title={exercise.name}
                    description={exercise.target}
                    onClick={() => {
                        setNewRoutine({
                            ...newRoutine,
                            exercises: [...newRoutine.exercises, exercise]
                        })
                        setIsCreateNewRoutineModalOpen(true)
                        closeModal()
                    }
                    }
                />
            ))}
        </ExercisesStyledModal>
    )
}
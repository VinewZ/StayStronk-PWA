import { Barbell, CheckCircle, PlusCircle } from 'phosphor-react';
import { Dispatch, SetStateAction } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useRoutines } from '../../../Hooks/useRoutines';
import { Button } from '../../Buttons/Primary';
import { NewRoutineType } from '../../CreateNewRoutine';
import { Input } from '../../Input';
import { ActionButtons, NewRoutineStyledModal } from './styles';

interface NewRoutineModalType {
    isCreateNewRoutineModalOpen: boolean;
    setIsCreateNewRoutineModalOpen: Dispatch<SetStateAction<boolean>>;
    newRoutine: NewRoutineType;
    setNewRoutine: Dispatch<SetStateAction<NewRoutineType>>;
    setIsExercisesModalOpen: Dispatch<SetStateAction<boolean>>;
}

export function NewRoutineModal({ isCreateNewRoutineModalOpen, setIsCreateNewRoutineModalOpen, newRoutine, setNewRoutine, setIsExercisesModalOpen }: NewRoutineModalType) {

    const { createNewUserRoutine } = useRoutines()

    function closeModal() {
        setIsCreateNewRoutineModalOpen(false);
    }

    return (
        <NewRoutineStyledModal
            isOpen={isCreateNewRoutineModalOpen}
            onBackgroundClick={closeModal}
            onEscapeKeydown={closeModal}
        >
            <Input
                icon={<Barbell size={24} />}
                width={"100%"}
                type="text"
                placeholder="Routine Title"
                value={newRoutine.title}
                onChange={(e) => { setNewRoutine({ ...newRoutine, title: e.target.value }) }}
                margin={"0"}
            />
            {newRoutine.exercises.length > 0 ? newRoutine.exercises.map((exercise, index) => (
                <div key={uuidv4()}>
                    <p>{exercise.name}</p>
                </div>
            )) :
                <Barbell size={24} />}

            <ActionButtons>
                <Button
                    text="New Exercise"
                    icon={<PlusCircle size={24} />}
                    onClick={() => { setIsExercisesModalOpen(true), closeModal() }}
                />
                <Button
                    disabled={newRoutine.title.length === 0 || newRoutine.exercises.length === 0}
                    text="Save Routine"
                    icon={<CheckCircle size={24} />}
                    onClick={() => {
                        createNewUserRoutine(newRoutine),
                            closeModal()
                    }}
                />
            </ActionButtons>
        </NewRoutineStyledModal>
    );
}
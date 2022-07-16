import { createContext, ReactNode, useEffect, useState } from 'react';
import { ExercisesType } from './FetchExercises';

interface UserRoutinesProviderType {
    children: ReactNode
}

interface UserRoutinesContextType {
    userRoutines: UserRoutines[]
    createNewUserRoutine: (newRoutine: UserRoutines) => void
}

interface UserRoutines {
    id: string
    title: string
    exercises: ExercisesType[]
}


export const UserRoutinesContext = createContext({} as UserRoutinesContextType)

export function UserRoutinesProvider({ children }: UserRoutinesProviderType) {

    const [userRoutines, setUserRoutines] = useState<UserRoutines[]>(localStorage.getItem('userRoutines') ? JSON.parse(localStorage.getItem('userRoutines') || '[]') : [])

    function createNewUserRoutine(newRoutine: UserRoutines) {
        setUserRoutines([newRoutine, ...userRoutines])
    }

    useEffect(() => {
        localStorage.setItem('userRoutines', JSON.stringify(userRoutines))
    }, [userRoutines])

    return (
        <UserRoutinesContext.Provider value={{ userRoutines, createNewUserRoutine }}>
            {children}
        </UserRoutinesContext.Provider>
    );
}
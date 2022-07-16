import axios from 'axios';
import { createContext, ReactNode, useEffect, useState } from 'react';
import '../FakeApi';

interface FetchExercisesProviderType {
    children: ReactNode
}

interface FetchExercisesContextType {
    allExercises: ExercisesType[]
}

export interface ExercisesType {
    bodyPart: string
    equipment: string
    gifUrl: string
    id: string
    name: string
    target: string
}



export const FetchExercisesContext = createContext({} as FetchExercisesContextType)

export function FetchExercisesProvider({ children }: FetchExercisesProviderType) {

    const [allExercises, setAllExercises] = useState<ExercisesType[]>([{
        bodyPart: '',
        equipment: '',
        gifUrl: '',
        id: '',
        name: '',
        target: '',
    }])

    async function fetchExercises() {
        try {
            const response = await axios.get('/api/exercises')
            setAllExercises(response.data)
        } catch (err) {
            setAllExercises([])
            console.error(err)
        }
    }

    useEffect(() => {
        fetchExercises()
    }, [])

    return (
        <FetchExercisesContext.Provider value={{ allExercises }}>
            {children}
        </FetchExercisesContext.Provider>
    );
}
import { useContext } from "react";
import { FetchExercisesContext } from "../Contexts/FetchExercises";

export function useExercises() {
    const context = useContext(FetchExercisesContext)
    if (!context) {
        throw new Error("useExercises must be used within a FetchExercisesProvider")
    }
    return context
}
import { useContext } from "react";
import { UserRoutinesContext } from "../Contexts/UserRoutines";

export function useRoutines() {
    const context = useContext(UserRoutinesContext)
    if (!context) {
        throw new Error("UserRoutinesContext must be used within a FetchExercisesProvider")
    }
    return context
}
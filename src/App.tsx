import { ModalProvider } from "styled-react-modal";
import { FetchExercisesProvider } from "./Contexts/FetchExercises";
import { UserRoutinesProvider } from "./Contexts/UserRoutines";
import { Router } from "./Pages/Router";

function App() {

  return (
    <ModalProvider>
      <FetchExercisesProvider>
        <UserRoutinesProvider>
          <Router />
        </UserRoutinesProvider>
      </FetchExercisesProvider>
    </ModalProvider>
  )
}

export default App

import { ModalProvider } from "styled-react-modal";
import { Navbar } from "./Components/Navbar";
import { FetchExercisesProvider } from "./Contexts/FetchExercises";
import { UserRoutinesProvider } from "./Contexts/UserRoutines";
import { Router } from "./Pages/Router";

function App() {

  return (
    <ModalProvider>
      <FetchExercisesProvider>
        <UserRoutinesProvider>
          <Router />
          <Navbar />
        </UserRoutinesProvider>
      </FetchExercisesProvider>
    </ModalProvider>
  )
}

export default App

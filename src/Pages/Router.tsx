import { Route, Routes } from 'react-router-dom'
import { ExercisesRoutine } from './ExercisesRoutine'
import { Home } from './Home'
import { Routines } from './Routines'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/routines" element={<Routines />} />
      <Route path="/routine/:id/:id" element={<ExercisesRoutine />} />
    </Routes>
  )
}

import { Route, Routes } from 'react-router-dom'
import { Home } from './Home'
import { Routine } from './Routine'
import { Routines } from './Routines'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/routines" element={<Routines />} />
      <Route path="/routine/:id/:id" element={<Routine />} />
    </Routes>
  )
}

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './Home'
import { Routines } from './Routines'

export function Router() {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/routines" element={<Routines/>}/>
    </Routes>
  )
}

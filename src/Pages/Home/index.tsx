import React from 'react'
import { RoutinesCard } from '../../Components/Cards/RoutinesCard'
import { WeightTrackerCard } from '../../Components/Cards/WeightTrackerCard'
import { CreateNewRoutineButton } from '../../Components/CreateNewRoutineButton'

export function Home() {
  return (
    <>
      <RoutinesCard/>
      <WeightTrackerCard/>
    </>
  )
}
import { useState } from "react";
import { RoutinesPage } from "./styles";
import { Barbell, CheckCircle, MagnifyingGlass, PlusCircle } from "phosphor-react";
import { theme } from "../../GlobalStyles/Theme";
import { Button } from "../../Components/Buttons/Primary";
import { Input } from "../../Components/Input";
import { CreateNewRoutineButton } from "../../Components/CreateNewRoutineButton";

export function Routines() {
  
  return (
    <>
      <RoutinesPage>
        <CreateNewRoutineButton/>
        <Input 
          icon={<MagnifyingGlass size={24}/>} 
          width={"50%"} 
          type="text" 
          placeholder="Search routine..." 
          value="" 
          onChange={ () => {}}
        />
      </RoutinesPage>
    </>
  )
}

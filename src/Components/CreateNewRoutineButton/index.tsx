import { Barbell, CheckCircle, PlusCircle } from 'phosphor-react';
import React, { useState } from 'react'
import { Button } from '../Buttons/Primary';
import { Input } from '../Input';
import { ActionButtons, StyledModal } from './styles';

export function CreateNewRoutineButton() {

  const [isCreateNewRoutineModalOpen, setIsCreateNewRoutineModalOpen] = useState(false);

  function openModal() {
    setIsCreateNewRoutineModalOpen(true);
  }

  function closeModal() {
    setIsCreateNewRoutineModalOpen(false);
  }

  return (
    <>
        <Button 
          width={"50%"} 
          text="New Routine" 
          icon={<PlusCircle size={24} />} 
          onClick={openModal}
        />
        <StyledModal 
            isOpen={isCreateNewRoutineModalOpen} 
            onBackgroundClick={closeModal}
            onEscapeKeydown={closeModal}
        >
            <Input 
                icon={<Barbell size={24} />} 
                width={"100%"} 
                type="text" 
                placeholder="Routine Title" 
                value="" 
                onChange={ () => {}}
                margin={"0"}
            />
            <Barbell size={24} />
            <ActionButtons>
                <Button 
                    text="New Exercise" 
                    icon={<PlusCircle size={24} />} 
                    onClick={() => {}}
                />
                <Button 
                    text="Save Routine" 
                    icon={<CheckCircle size={24} />} 
                    onClick={() => {}}
                />
            </ActionButtons>
        </StyledModal>
    </>
  )
}

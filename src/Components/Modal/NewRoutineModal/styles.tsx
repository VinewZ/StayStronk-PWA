import styled from "styled-components";
import Modal from "styled-react-modal";
import { theme } from "../../../GlobalStyles/Theme";

export const NewRoutineStyledModal = Modal.styled`
    position: relative;
    width: 90vw;
    max-width: 300px;
    height: auto;
    max-height: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    background-color: ${theme.colors.gray900};
    padding: 1rem;
    border-radius: 10px;
    overflow-y: auto;
`

export const ActionButtons = styled.div`
    display: flex;
    gap: 1rem;
`
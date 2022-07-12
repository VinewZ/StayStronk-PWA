import styled from "styled-components"
import Modal from "styled-react-modal"
import { theme } from "../../GlobalStyles/Theme"

export const StyledModal = Modal.styled`
    position: relative;
    width: 90vw;
    max-width: 300px;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    gap: 1rem;
    background-color: ${theme.colors.gray900};
    padding: 1rem;
    border-radius: 10px;
`

export const ActionButtons = styled.div`
    display: flex;
    gap: 1rem;
`
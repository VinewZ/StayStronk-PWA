import styled from "styled-components";
import { theme } from "../../../GlobalStyles/Theme";

export const ButtonContainer = styled.button<{width?: string, height?: string}>`
    height: ${props => props.height || "44px"};
    width: ${props => props.width || "100%"};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;
    border-radius: 10px;
    background-color: ${theme.colors.gray800};
    color: ${theme.colors.white};
    border: none;
    box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.15);
    padding: 0 .5rem;
`
import { MagnifyingGlass } from "phosphor-react"
import styled from "styled-components"
import { theme } from "../../GlobalStyles/Theme"

export const InputContainer = styled.div<{width?: string, height?: string, margin?: string}>`
    display: flex;
    align-items: center;
    height: ${props => props.height || "44px"};
    width: ${props => props.width || "100%"};
    border-radius: 10px;
    background-color: ${theme.colors.gray800};
    overflow: hidden;
    margin: ${props => props.margin || "0 0 1rem 0"};
    box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.15);
    gap: 0.5rem;
    padding-left: .8rem;
`

export const InputElement = styled.input`
    background-color: transparent;
    height: 44px;
    border: none;
    color: ${theme.colors.white};
    width: 100%;
`
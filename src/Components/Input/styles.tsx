import { MagnifyingGlass } from "phosphor-react"
import styled from "styled-components"
import { theme } from "../../GlobalStyles/Theme"

export const InputContainer = styled.div<{width?: string, height?: string}>`
    display: flex;
    align-items: center;
    height: ${props => props.height || "44px"};
    width: ${props => props.width || "100%"};
    border-radius: 10px;
    background-color: ${theme.colors.gray800};
    overflow: hidden;
    margin-bottom: 1rem;
    box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.15);
`

export const SearchIcon = styled(MagnifyingGlass)`
    margin: 0 .5rem;
`

export const InputElement = styled.input`
    background-color: transparent;
    height: 44px;
    border: none;
    color: ${theme.colors.white};
    padding-left: .4rem;
    width: 100%;
`
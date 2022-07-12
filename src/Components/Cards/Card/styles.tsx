import styled from "styled-components";
import { theme } from "../../../GlobalStyles/Theme";

export const CardContainer = styled.div`
    height: 150px;
    border-radius: 10px;
    background-color: ${theme.colors.gray800};
    width: 100%;
    display: flex;
    overflow: hidden;
    margin-bottom: 1rem;
`

export const CardInfo = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 1rem;
`

export const CardTitle = styled.strong`
    font-size: 1.2rem;
`

export const CardDescription = styled.p`
    font-size: 0.8rem;
`

export const CardImage = styled.img`
    object-fit: cover;
    max-width: 40%;
`
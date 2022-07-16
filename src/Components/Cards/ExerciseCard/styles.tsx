import styled from "styled-components";
import { theme } from "../../../GlobalStyles/Theme";

export const ExerciseCardContainer = styled.div`
    height: 100px;
    border-radius: 10px;
    background-color: ${theme.colors.gray800};
    width: 100%;
    display: flex;
    overflow: hidden;
`

export const ExerciseCardInfo = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: .5rem;
    text-transform: capitalize;
`

export const ExerciseTarget = styled.p`
    font-size: 1rem;
    font-weight: ${theme.font.weight.bold};
`

export const ExerciseTitle = styled.strong`
    font-size: 1.2rem;
    margin: .2rem 0;
`

export const ExerciseExtra = styled.p`
    font-size: 0.8rem;
`

export const CardImage = styled.img`
    object-fit: cover;
    max-width: 40%;
`

export const ExerciseCardRepsSetsContainer = styled.div`
    width: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: .4rem;
    margin-right: .4rem;
`

export const RepsSetsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    input{
        width: 4ch;
        margin-right: .2rem;
        border: none;
        background-color: ${theme.colors.gray900};
        height: 2rem;
        border-radius: 5px;
        color: ${theme.colors.white};
        font-weight: ${theme.font.weight.bold};
        text-align: center;
        font-size: 1.3rem;
    }
`

export const Divider = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`
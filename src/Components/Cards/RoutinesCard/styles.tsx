import styled from 'styled-components';
import { theme } from '../../../GlobalStyles/Theme';

export const RoutinesCardContainer = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    gap: 1rem;
    padding: .7rem;
    background-color: ${theme.colors.gray800};
    border-radius: 10px;

    &:not(:last-child){
        margin-bottom: 1rem;
    }
`;

export const RoutinesCardImage = styled.img`
    object-fit: cover;
    height: 100%;
    border-radius: 10px;
`

export const RoutinesCardInfo = styled.div`
    height: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const RoutineCardHeader = styled.div`
    display: flex;
    flex-direction: column;

    p{
        width: 22ch;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`

export const RoutineCardFooter = styled.div`
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
`

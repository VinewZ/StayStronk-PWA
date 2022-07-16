import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../GlobalStyles/Theme';

export const NavbarContainer = styled.nav`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 70px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const NavbarItem = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 80px;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    color: ${theme.colors.gray800};

    &:hover {
        background-color: ${theme.colors.gray900};
        color: ${theme.colors.white};
    }
    &:not(:last-child){
        border-right: 1px solid ${theme.colors.gray700};
    }
`;

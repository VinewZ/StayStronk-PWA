import { navbarData } from './NavbarData';
import { NavbarContainer, NavbarItem } from './styles';

export function Navbar() {
    return (
        <NavbarContainer>
            {navbarData.map(navbarItem => (
                <NavbarItem key={navbarItem.id} to={navbarItem.path}>
                    {navbarItem.icon}
                    <span>{navbarItem.name}</span>
                </NavbarItem>
            ))}
        </NavbarContainer>
    );
}
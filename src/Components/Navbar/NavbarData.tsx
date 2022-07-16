import { Barbell, House } from "phosphor-react";

const iconSize = 24

export const navbarData = [
    {
        id: 1,
        name: 'Home',
        path: '/',
        icon: <House size={iconSize} />

    },
    {
        id: 2,
        name: 'Routines',
        path: '/routines',
        icon: <Barbell size={iconSize} />
    }
]

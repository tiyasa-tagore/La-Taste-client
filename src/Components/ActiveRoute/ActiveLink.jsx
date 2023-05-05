import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({to, children}) => {
    return (
        <NavLink
        to={to}
            className={({ isActive}) =>
                isActive ? "activeColor":"" }
        >
        {children}
        </NavLink>
    );
};

export default ActiveLink;
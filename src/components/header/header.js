import React from 'react';
import { NavLink } from 'react-router-dom';

const nav_links = [{path:"/",name:"Main"},
                   {path:"/about",name:"About"},
                   {path:"/github",name:"Github"},
                   {path:"/other",name:"Other"}
]


const Header = () => {
    return (
        <nav className="nav__header">
        {nav_links.map(nav =>
        <NavLink exact activeClassName="active"  className="nav__header-link" key={nav.name} to={`${nav.path}`}>{nav.name}
        </NavLink>
        )}
        </nav>
    )
}

export default Header;
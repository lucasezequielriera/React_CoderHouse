import React from 'react';
import {Link} from 'react-router-dom';

function NavbarItem({name, url}) {
    return (
        <>
            <li>
                <Link to={url} key={name} className="link">{name}</Link>
            </li>
        </>
    )
}

export default NavbarItem;
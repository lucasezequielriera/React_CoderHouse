import React from 'react';
import CartWidget from './CartWidget';
import NavbarItem from './NavbarItem';

function Navbar() {
    return (
        <div className="NavbarBox">
            <CartWidget url="/"/>
            <p>Welcome to Developer Store</p>
            <ul className="Navbar">
                <NavbarItem name="Productos" url="/Productos"/>
                <NavbarItem name="Nosotros" url="/Nosotros"/>
                <NavbarItem name="Login" url="/Login"/>
                <NavbarItem name="Login" url="/Cart"/>
            </ul>
        </div>
    );
}

export default Navbar; 
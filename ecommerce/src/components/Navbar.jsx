import React from 'react';
import CartWidget from './CartWidget';
import NavbarItem from './NavbarItem';

export default function Navbar() {
    return (
        <div className="NavbarBox">
            <CartWidget url="/"/>
            <p>Welcome to Developer Store</p>
            <ul className="Navbar">
                <NavbarItem name="Productos" url="/Productos"/>
                <NavbarItem name="Nosotros" url="/Nosotros"/>
                <NavbarItem name="Login" url="/Login"/>
                <NavbarItem name="Cart" url="/Cart"/>
            </ul>
        </div>
    );
}
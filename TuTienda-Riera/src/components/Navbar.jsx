import React from 'react';
import CartWidget from './CartWidget';

function Navbar() {
    let nombrePersona = "Usuario";
    return (
        <div className="NavbarBox">
            <CartWidget />
            <p>TuTienda.com --- Hola {nombrePersona}!</p>
            <ul className="Navbar">
                <li><a href=".">Inicio</a></li>
                <li><a href=".">Productos</a></li>
                <li><a href=".">Nosotros</a></li>
                <li><a href=".">Login</a></li>
            </ul>
        </div>
    );
}

export default Navbar; 
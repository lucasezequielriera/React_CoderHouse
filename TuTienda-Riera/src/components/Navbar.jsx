import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

function Navbar() {
    let nombrePersona = "Usuario";
    return (
        <div className="NavbarBox">
            <CartWidget />
            <p>TuTienda.com --- Hola {nombrePersona}!</p>
            <ul className="Navbar">
                <Link className="link" to="/Productos">Productos</Link>
                <Link className="link" >Nosotros</Link>
                <Link className="link" >Login</Link>
            </ul>
        </div>
    );
}

export default Navbar; 
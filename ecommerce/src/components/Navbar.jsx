import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

function Navbar() {
    return (
        <div className="NavbarBox">
            <CartWidget />
            <p>Welcome to Developer Store</p>
            <ul className="Navbar">
                <Link to="/Productos" className="link">Productos</Link>
                <Link to="/Nosotros" className="link" >Nosotros</Link>
                <Link to="/Login" className="link" >Login</Link>
            </ul>
        </div>
    );
}

export default Navbar; 
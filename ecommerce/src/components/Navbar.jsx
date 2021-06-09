import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import cart from '../cart.png'

function Navbar() {
    return (
        <div className="NavbarBox">
            <CartWidget />
            <p>Welcome to Developer Store</p>
            <ul className="Navbar">
                <Link to="/Productos" className="link">Productos</Link>
                <Link to="/Nosotros" className="link" >Nosotros</Link>
                <Link to="/Login" className="link" >Login</Link>
                <Link to="/Cart" className="Cart">
                    <img src={cart} alt="imagen"></img>
                </Link>
            </ul>
        </div>
    );
}

export default Navbar; 
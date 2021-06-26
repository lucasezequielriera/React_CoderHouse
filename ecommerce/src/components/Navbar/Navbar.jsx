import React from 'react';
import CartWidget from '../../pages/Cart/CartWidget';
import NavbarItem from './NavbarItem';
import Cart from '../../assets/images/cart.png'

export default function Navbar() {
    return (
        <div className="App">
            <header className="App-header">
                <div className="NavbarBox">
                    <CartWidget url="/"/>
                    <p>Welcome to Developer Store</p>
                    <ul className="Navbar">
                        <NavbarItem name="Productos" url="/Productos"/>
                        <NavbarItem name="Nosotros" url="/Nosotros"/>
                        <NavbarItem name="Login" url="/Login"/>
                        <NavbarItem name={<img src={Cart} alt='' width='30px' />} url="/Cart"/>
                    </ul>
                </div>
            </header>
        </div>
    );
}
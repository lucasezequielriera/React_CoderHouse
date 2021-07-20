import React, { useContext } from 'react';
import CartWidget from '../../pages/Cart/CartWidget';
import NavbarItem from './NavbarItem';
import Cart from '../../assets/images/cart.png';
import ContextProvider from '../../context/ContextProvider';

export default function Navbar() {

    const {info} = useContext(ContextProvider);

    const cantidadProductos = () => {
        const numeros = info.map((e) => {
            return e.cantidad;
        });
        const total = numeros.reduce((a, b) => a + b, 0);
        return Number(total);
    }

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
                        <NavbarItem name={<img src={Cart} alt='' width='30px' />} url="/Cart"/><span className={`badge ${(cantidadProductos() === 0) ? 'bg-primary' : 'bg-danger'}`} style={{position: 'absolute', right: 10, top: 2, fontSize:10}}>{cantidadProductos()}</span>
                    </ul>
                </div>
            </header>
        </div>
    );
}
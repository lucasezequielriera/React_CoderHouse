import React, { Component } from 'react';
import logo from './logo.svg'

class Navbar extends Component {
    render() {
        return (
            <div className="NavbarBox">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>TuTienda.com</p>
                <ul className="Navbar">
                    <li><a href=".">Inicio</a></li>
                    <li><a href=".">Productos</a></li>
                    <li><a href=".">Nosotros</a></li>
                    <li><a href=".">Login</a></li>
                </ul>
            </div>
        );
    }
}

export default Navbar; 
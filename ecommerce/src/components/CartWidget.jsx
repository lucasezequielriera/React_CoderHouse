import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../assets/images/logo.svg';

function CartWidget({url}) {
    return (
        <>
            <Link to={url}><img src={logo} className="App-logo" alt="logo"/></Link>
        </>
    );
}

export default CartWidget;
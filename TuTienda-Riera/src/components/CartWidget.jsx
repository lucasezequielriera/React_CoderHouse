import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import logo from './logo.svg';

function CartWidget() {
    return (
        <Fragment>
            <Link to="/"><img src={logo} className="App-logo" alt="logo"/></Link>
        </Fragment>
    );
}

export default CartWidget;
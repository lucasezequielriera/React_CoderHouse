import React, {Fragment as div} from 'react';
import Producto from './Item';

function CardProducto() {

    const style = {
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'center'
    }

    return(
        <div style={style}>
            <Producto numero="1"/>
            <Producto numero="2"/>
            <Producto numero="3"/>
            <Producto numero="4"/>
            <Producto numero="5"/>
        </div>
    )
}

export default CardProducto;
import React from 'react';
import { Link } from 'react-router-dom';
import imagen from './../producto.png';

function Producto(numero) {

    const style = {
        width: '18rem',
        color: 'black',
        margin: '0px 5px'
    }

    const Producto1 = [
        nombre: "Cajas max",
        precio: 100
    ]

    return (
        <div className="card" style={style}>
            <img src={imagen} className="card-img-top" alt="imagen_producto" />
            <div className="card-body">
                <h5 className="card-title">Producto Caja</h5>
                <p className="card-text">Caja automatizada para mudanzas y otros tipos de utilidades.</p>
                <Link to='/Producto'  className="btn btn-primary">Ver más</Link>
            </div>
        </div>
    )
}

export default Producto;
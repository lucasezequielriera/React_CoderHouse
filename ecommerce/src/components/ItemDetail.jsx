import React from 'react';
import { Link } from 'react-router-dom';
import imagen from './../producto.png';

function ItemDetail() {

    const style = {
        width: '18rem',
        color: 'black',
        margin: '0px 5px'
    }


    // const Producto1 = { [
    //     nombre: 'Cajas max',
    //     precio: 100
    // ]}

    return (
        <div className="card" style={style}>
            <img src={imagen} className="card-img-top" alt="imagen_producto" />
            <div className="card-body">
                <p className="card-text">Curso de programación dictado de forma online.</p>
                <Link to='/Producto'  className="btn btn-dark">Me interesa</Link>
            </div>
        </div>
    )
}

export default ItemDetail;
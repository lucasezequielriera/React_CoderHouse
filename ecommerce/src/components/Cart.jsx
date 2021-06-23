import React, { useContext } from 'react';
import ContextProvider from '../context/ContextProvider';

export default function Cart() {


    const {info, setInfo} = useContext(ContextProvider);

    const deleteProducto = (id) => {
        const nuevoArray = info.filter( item => item.id !== id)
        setInfo(nuevoArray);
    }
    
    return(
        <div className="cart text-center my-5">
            <h1 className="fw-lighter">Estos son tus productos que agregaste</h1>
            <ul className="d-flex flex-column">
                {
                    info.map((item, index) => {
                        return(
                            <li key={item.id} className="border d-flex flex-row justify-content-between text-center w-50 m-auto px-3 py-1 align-items-center">Producto: {item.nombre}, con un precio de: {item.precio}
                            <button className="btn btn-danger" onClick={ () => deleteProducto(item.id)}>X</button></li>
                        )
                    })
                }
            </ul>
            <button className="btn btn-success w-100">Comprar</button>
        </div>
    )
}
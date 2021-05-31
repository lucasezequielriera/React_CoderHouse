import React, {useState, useEffect} from 'react';

function ItemDetailContainer() {

    const datosGuardados = JSON.parse(localStorage.getItem('datos'));
    const datos = datosGuardados;

    // Declarando variables // 
    const [producto, setProducto] = useState([]);

    // Usando Promises y Sync //
    const obtenerDatos = async () => {
        setTimeout (() => {
            const datosProducto = datos;
            setProducto(datosProducto);
        }, 1000);
    }

    // Usando useEffect para devolver el array de los datos capturados //
    useEffect (function() {
        console.log("funciono");
        obtenerDatos();
    }, []);

    return (
        <div className="text-center mt-3">
            <h1 className="fw-lighter">Detalle del producto</h1>
        {
            producto?.map((item) => {
            return (
                <div className="detalle-producto">
                    <p>Esta es la descripción del producto elegido:</p><br/>
                    <p>Producto:{item.title}</p>
                    <p>Aqui va la imagen</p>
                    <p>Profesor:</p>
                    <p>Descripción:</p>
                    <p>Precio:</p>
                    <button className="btn btn-success">Comprar</button>
                </div>
            )})
        }
        </div>
    )
}

export default ItemDetailContainer;
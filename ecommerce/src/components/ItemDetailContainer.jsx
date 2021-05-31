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
                if (item.title == 'Javascript') {
                    return (
                        <div className="detalle-producto" key={item.id}>
                            <p>Esta es la descripción del producto elegido:</p><br/>
                            <p>Curso de {item.title}</p>
                            <p><img src={item.imagen} alt="imagen"/></p>
                            <p>Profesor: {item.profesor}</p>
                            <p>Es un curso de programación orientado a los estudiantes de secuandario y estudiantes universaitarios para que puedan integrarse al mundo de la programación</p>
                            <p>Precio: ${item.precio}</p>
                            <button className="btn btn-success">Comprar</button>
                        </div>
                    )
                } else {
                    return false;
                }
            })
        }
        </div>
    )
}

export default ItemDetailContainer;
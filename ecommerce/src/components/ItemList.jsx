import React, {useState, useEffect, useContext} from 'react';
import ItemCount from './ItemCount';
import { CartContext } from '../context/CartContext'

function ItemList() {

    // Style Card de Bootstrap //
    const style = {
        width: '18rem'
    }

    const { datos } = useContext(CartContext);
    const { carrito } = useContext(CartContext);

    // Declarando variables // 
    const [productos, setProductos] = useState([]);

    // Usando Promises y Sync //
    const obtenerProductos = async () => {
        setTimeout (() => {
            const datosProductos = datos;
            setProductos(datosProductos);
        }, 1000);
    };

    // Usando useEffect para devolver el array de los datos capturados //
    useEffect (function() {
        console.log("funciono");
        obtenerProductos();
    }, []);

    return (
        <div className="productos">
            {
                productos?.map((item, index) => {
                    return (
                        <div className="card" style={style} key={index}>
                            <img src={item.imagen} className="card-img-top" alt="imagen" />
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="card-text">Profesor: {item.profesor}<br/>Precio: ${item.precio}</p>
                                <ItemCount stock="5" initial="0" url={item.boton} dato={index} />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ItemList;
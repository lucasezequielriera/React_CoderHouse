import {useState, useEffect, useContext} from 'react';
import { CartContext } from '../context/CartContext'
import Item from './Item';

export default function ItemList() {

    const { datos } = useContext(CartContext);
    // const { carrito } = useContext(CartContext);

    // Declarando variables // 
    const [productos, setProductos] = useState([]);

    // Usando Promises y Sync //
    const obtenerProductos = async() => {
        setTimeout (() => {
            const datosProductos = datos;
            setProductos(datosProductos);
        }, 1000);
    };

    // Usando useEffect para devolver el array de los datos capturados //
    useEffect (function() {
        obtenerProductos();
    }, []);

    return (
        <div className="productos">
            {
                productos?.map((item) => {
                    return (
                        <Item
                        key={item.id}
                        imagen={item.imagen}
                        title={item.title}
                        precio={item.precio}
                        profesor={item.profesor}
                        descripcion={item.descripcion}
                        url={item.id}
                        />
                    )
                })
            }
        </div>
    )
}
import {useState, useContext} from 'react';
import { CartContext } from '../context/CartContext'
import Item from './Item';
import Loading from './Loading';

export default function ItemList() {

    const { datos } = useContext(CartContext);
    // const { carrito } = useContext(CartContext);

    // Declarando variables // 
    const [productos, setProductos] = useState([]);

    // Usando async await para mostrar productos después de 2 segundos //
    function ver() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(datos);
            }, 1000)
        });
    }

    async function obtenerProductos() {
        const result = await ver();
        setProductos(result);
    };

    // Mostrando función siempre //
    obtenerProductos()

    if (productos.length) {
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
    } else {
        return(
            <Loading />
        )
    }
}
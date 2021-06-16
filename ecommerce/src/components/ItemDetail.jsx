import { useEffect, useState, useContext } from 'react';
import ItemCount from './ItemCount';
import { CartContext } from '../context/CartContext';
import imagen from '../assets/images/producto.png'

export default function ItemDetail() {

    const style = {
        width: '700px',
        alignSelf: 'center',
        marginTop: '5px'
    }

    const { datos } = useContext(CartContext);
    // const { carrito } = useContext(CartContext);

    // Declarando variables // 
    const [productos, setProductos] = useState([]);
    const producto = productos[0];

    // Usando Promises y Sync //
    const obtenerProductos = async () => {
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
        <div className="card text-center">
            <img src={imagen} style={style} className="card-img-top text-center" alt="imagen_producto" />
            <div className="card-body">
                <p className="card-text">{producto?.descripcion}</p>
                <p>El profesor es {producto?.profesor} y el precio del curso es de ${producto?.precio}</p>
                <p>El curso se da de forma online de lunes a viernes de 8hs a 17hs</p>
                <p>Para comprar deberá elegir la cantidad de cursos requeridos y se enviarán al carrito de compras para que pueda seguir eligiendo los cursos que tenemos</p>
                <ItemCount stock="5" initial="0" url="" dato="0"/>
            </div>
        </div>
    )
}
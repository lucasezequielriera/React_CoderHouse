import { useState, useEffect } from 'react';
import ItemCount from '../../components/Counter/ItemCount';
import imagen from '../../assets/images/producto.png'
import { useParams } from 'react-router-dom';
import Loading from '../../components/Preloader/Loading';
import firebase from '../../firebase';

export default function ItemDetail() {
    // Usando styles //
    const style = {
        width: '700px',
        alignSelf: 'center',
        marginTop: '5px'
    }
    // Usando useParams por id //
    const {id} = useParams();

    // Usando Firebase //
    const [producto, setProducto] = useState([null]);

    useEffect(() => {
        const db = firebase.db;
        const itemsCollection = db.collection("productos");
        itemsCollection.get().then((snapshot) => {
        setProducto(snapshot.docs.map(doc => doc.data()));
        });
    }, []);

    // Declarando constante con los datos del producto elegido por id //
    const detalleProducto = producto[id];

    if (producto.length >= 2) {
        return (
            <div className="card text-center">
                <img src={imagen} style={style} className="card-img-top text-center" alt="imagen_producto" />
                <div className="card-body">
                    <p className="card-text">{detalleProducto?.descripcion}</p>
                    <p>El profesor es {detalleProducto?.profesor} y el precio del curso es de ${detalleProducto?.precio}</p>
                    <p>El curso se da de forma online de lunes a viernes de 8hs a 17hs</p>
                    <p>Para comprar deberá elegir la cantidad de cursos requeridos y se enviarán al carrito de compras para que pueda seguir eligiendo los cursos que tenemos</p>
                    <ItemCount stock="5" initial="0" url="" dato="0" producto={detalleProducto}/>
                </div>
            </div>
        )
    } else {
        return(
            <Loading />
        )
    }
}
import {useState, useEffect} from 'react';
import Item from './Item';
import Loading from '../../components/Preloader/Loading';
import {getFirestore} from '../../firebase'; 
export default function ItemList() {

    // Usando Firebase //
    const [productos, setProductos] = useState([null]);

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = db.collection("productos");
        itemsCollection.get().then((snapshot) => {
        setProductos(snapshot.docs.map(doc => doc.data()));
        });
    }, []);
    
    // // Declarando variables // 
    // const [productos, setProductos] = useState([]);

    // // Usando async await para mostrar productos después de 2 segundos //
    // function ver() {
    //     return new Promise(resolve => {
    //         setTimeout(() => {
    //             resolve(datos);
    //         }, 1000)
    //     });
    // }

    // async function obtenerProductos() {
    //     const result = await ver();
    //     setProductos(result);
    // };

    // // Mostrando función siempre //
    // obtenerProductos()

    if (productos.length >= 2) {
        return (
            <div className="productos">
                {
                    productos?.map((item, index) => {
                        return (
                            <Item
                            key={index}
                            imagen={item.imagen}
                            title={item.titulo}
                            precio={item.precio}
                            profesor={item.profesor}
                            descripcion={item.descripcion}
                            url={index}
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
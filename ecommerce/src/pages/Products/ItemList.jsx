import {useState, useEffect} from 'react';
import Item from './Item';
import Loading from '../../components/Preloader/Loading';
import firebase from '../../firebase';
export default function ItemList() {

    // Usando Firebase //
    const [productos, setProductos] = useState([null]);

    useEffect(() => {
        const db = firebase.db;
        const itemsCollection = db.collection("productos");
        itemsCollection.get().then((snapshot) => {
        setProductos(snapshot.docs.map(doc => doc.data()));
        });
    }, []);

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
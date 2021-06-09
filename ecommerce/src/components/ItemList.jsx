import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';

function ItemList() {

    // Style Card de Bootstrap //
    const style = {
        width: '18rem'
    }

    // Datos de los Productos //
    const datos = [{
        id: 1,
        title: 'Javascript',
        profesor: 'Lucas Riera',
        precio: '5000',
        imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3xi9SQ54TXdoQiX0ZWWz0AqQV4beciDKLEA&usqp=CAU',
        boton: '/Javascript'
    },
    {
        id: 2,
        title: 'ReactJS',
        profesor: 'Antonio Sánchez',
        precio: '6000',
        imagen: 'https://visual-engin.com/wp-content/uploads/sites/3/2016/06/reactjs-introduccion-workshop-visual-enginerring.png',
        boton: '/ReactJS'
    },
    {
        id: 3,
        title: 'PHP',
        profesor: 'Cristina Aguilera',
        precio: '15000',
        imagen: 'http://definicion.de/wp-content/uploads/2010/07/Php.jpg',
        boton: '/PHP'
    },
    {
        id: 4,
        title: 'C++',
        profesor: 'Tom Jones',
        precio: '5500',
        imagen: 'https://i.blogs.es/4a8c41/cpp-logo-dribbble/450_1000.png',
        boton: '/C++'
    },
    {
        id: 5,
        title: 'C#',
        profesor: 'Miguel Aquino',
        precio: '9000',
        imagen: 'https://aspnetcoremaster.com/img/csharp.webp',
        boton: '/C#'
    },
    {
        id: 6,
        title: 'R',
        profesor: 'Miguel Noyo',
        precio: '10000',
        imagen: 'https://puntodis.com/wp-content/uploads/2015/12/r1.jpg',
        boton: '/Programacion_en_R'
    }];

    localStorage.setItem('datos', JSON.stringify(datos));

    // Declarando variables // 
    const [productos, setProductos] = useState([]);
    // Usando Promises y Sync //
    const obtenerProductos = async () => {
        setTimeout (() => {
            const datosProductos = datos;
            setProductos(datosProductos);
        },1000);
    }

    // Usando useEffect para devolver el array de los datos capturados //
    useEffect (function() {
        console.log("funciono");
        obtenerProductos();
    }, []);

    return (
        <div className="productos">
            {
                productos?.map((item) => {
                    return(
                        <div className="card" style={style} key={item.id}>
                            <img src={item.imagen} className="card-img-top" alt="imagen" />
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="card-text">Profesor: {item.profesor}<br/>Precio: ${item.precio}</p>
                                <ItemCount stock="5" initial="0"/>
                                <Link to={item.boton} key={item.id} className="btn btn-primary">Ver más</Link>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ItemList;
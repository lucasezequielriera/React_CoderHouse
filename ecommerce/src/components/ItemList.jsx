import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

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
        imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkInpLpU-42b1OTDWVoZC5BnFM3NFsE5hMVQ&usqp=CAU',
        boton: '/Javascript'
    },
    {
        id: 2,
        title: 'ReactJS',
        profesor: 'Antonio Sánchez',
        precio: '6000',
        imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkInpLpU-42b1OTDWVoZC5BnFM3NFsE5hMVQ&usqp=CAU',
        boton: '/ReactJS'
    },
    {
        id: 3,
        title: 'PHP',
        profesor: 'Cristina Aguilera',
        precio: '15000',
        imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkInpLpU-42b1OTDWVoZC5BnFM3NFsE5hMVQ&usqp=CAU',
        boton: '/PHP'
    },
    {
        id: 4,
        title: 'C++',
        profesor: 'Tom Jones',
        precio: '5500',
        imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkInpLpU-42b1OTDWVoZC5BnFM3NFsE5hMVQ&usqp=CAU',
        boton: '/C++'
    },
    {
        id: 5,
        title: 'C#',
        profesor: 'Miguel Aquino',
        precio: '9000',
        imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkInpLpU-42b1OTDWVoZC5BnFM3NFsE5hMVQ&usqp=CAU',
        boton: '/C#'
    },
    {
        id: 6,
        title: 'R',
        profesor: 'Miguel Noyo',
        precio: '10000',
        imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkInpLpU-42b1OTDWVoZC5BnFM3NFsE5hMVQ&usqp=CAU',
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
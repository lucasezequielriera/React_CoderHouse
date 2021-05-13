import React, {Fragment, useState} from 'react';

const ItemListContainer = () => {
    const [numeros] = useState(["Curso Javascript","Curso ReactJS","Curso PHP","Curso C++","Curso C#","Curso R"]);

    return (
        <Fragment>
            <h2>Lista de Productos  </h2>
            <ul>
                {
                    numeros.map((item, index) =>
                        <li key={index} className="listaProductos">
                            {item}
                        </li>
                    )
                }
            </ul>
        </Fragment>
    )
}

export default ItemListContainer;
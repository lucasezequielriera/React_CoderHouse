import React, {Fragment, useState} from 'react';

const ItemListContainer = () => {
    const [numeros] = useState(["Curso Javascript","Curso ReactJS","Curso PHP","Curso C++","Curso C#","Curso R"]);

    return (
        <Fragment className="row">
            <h2>Lista de Productos  </h2>
            <ul className="list-group col">
                {
                    numeros.map((item, index) =>
                        <li key={index} className="listaProductos list-group-item">
                            {item}
                        </li>
                    )
                }
            </ul>
        </Fragment>
    )
}

export default ItemListContainer;
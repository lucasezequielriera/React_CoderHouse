import React, {Fragment, useState} from 'react';

const Listado = () => {
    const [numeros, SetNumeros] = useState(["Lucas","Emanuel","Richard","Joaquin","Miguel","Cristian"]);
    const valor = 0;

    return (
        <Fragment>
            <ul>
                {
                    numeros.map((item, index) =>
                        <li key={index}>
                            {item}
                        </li>
                    )
                }
            </ul>
        </Fragment>
    )
}

export default Listado;
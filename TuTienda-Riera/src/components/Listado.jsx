import React, {Fragment, useState} from 'react';

const Listado = () => {
    const [numeros] = useState(["Lucas","Emanuel","Richard","Joaquin","Miguel","Cristian"]);

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
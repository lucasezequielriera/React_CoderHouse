import React, {Fragment, useState} from 'react';

const Contador = () => {
    // Función sumar y restar
    const [numero, setNumero] = useState(0);
    const Aumentar = () => {
        setNumero(numero + 1);
    }
    const Reducir = () => {
        setNumero(numero - 1);
    }
    // Devuelve y renderiza en html el contenido con su función
    return (
        <Fragment>
            <h2>Cantidad del contador: {numero}</h2>
            <button onClick={Aumentar} className="btn btn-success">Aumentar</button>
            <button onClick={Reducir} className="btn btn-danger">Reducir</button>
        </Fragment>
    );
}

export default Contador;
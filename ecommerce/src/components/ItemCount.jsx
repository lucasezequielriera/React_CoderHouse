import React, {useState} from 'react';
import {Link} from 'react-router-dom';

function ItemCount({stock, initial, url, dato}) {
    const [stockRequired, setStockRequired] = useState(Number(initial));
    const [error, setError] = useState("");

    const Aumentar = () => {
        if (Number(stock) >= stockRequired + 1) {
            setStockRequired(stockRequired + 1);
            setError("");
        } else {
            setError("No hay más stock");
        }
    };

    const Reducir = () => {
        if (Number(initial) <= stockRequired - 1) {
            setStockRequired(stockRequired - 1);
            setError("");
        } else {
            setError("No puedes ingresar menos que '0'");
        }
    };

    function comprobar() {
        switch (stockRequired) {
            case 0:
                return("")
            case 1:
                return(
                    <Link className="btn btn-success px-5 mt-4 mb-0">Comprar Curso</Link>
                    )
            default:
                return(
                    <Link className="btn btn-success px-5 mt-4 mb-0">Agregar al Carrito</Link>
                )
        }
        // if (stockRequired > 0) {
        //     return(
        //         "Comprar Curso"
        //     )
        // } else if (stockRequired == 2) {
        //     return(
        //         'Que?'
        //     )
        // } else {
        //     return(
        //         ''
        //     )
        // }
    }

    console.log(url, dato)

    return (
        <div className="error">
            <div className="display">
                <button onClick={Reducir}>-</button>
                    <div className="numero">
                        {stockRequired}
                    </div>
                <button onClick={Aumentar}>+</button>
            </div>
            {comprobar()}
        <p>{error}</p>
        </div>
    )
}

export default ItemCount;
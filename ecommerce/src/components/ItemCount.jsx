import React, {useState, useContext} from 'react';
import {Link} from 'react-router-dom';
import { CartContext } from '../context/CartContext'

function ItemCount({stock, initial, url, dato}) {
    const [stockRequired, setStockRequired] = useState(Number(initial));
    const [error, setError] = useState("");
    const {datos} = useContext(CartContext);

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
                return (
                    datos.map((item) => {
                        if(dato === 0) {
                            return(
                                <Link to={item.title} className="btn btn-success px-5 mt-4 mb-0">Comprar Curso</Link>
                            )
                        }
                        if(dato === 1) {
                            return(
                                <Link to={item.title} className="btn btn-success px-5 mt-4 mb-0">Comprar Curso</Link>
                            )
                        }
                        if(dato === 2) {
                            return(
                                <Link to={item.title} className="btn btn-success px-5 mt-4 mb-0">Comprar Curso</Link>
                            )
                        }
                        if(dato === 3) {
                            return(
                                <Link to={item.title} className="btn btn-success px-5 mt-4 mb-0">Comprar Curso</Link>
                            )
                        }
                        if(dato === 4) {
                            return(
                                <Link to={item.title} className="btn btn-success px-5 mt-4 mb-0">Comprar Curso</Link>
                            )
                        }
                        if(dato === 5) {
                            return(
                                <Link to={item.title} className="btn btn-success px-5 mt-4 mb-0">Comprar Curso</Link>
                            )
                        }
                    })
                    )
            default:
                return(
                    <Link to={"hola"} className="btn btn-success px-5 mt-4 mb-0">Agregar al Carrito</Link>
                )
        }
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
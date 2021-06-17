import {useState} from 'react';
import {Link} from 'react-router-dom';
export default function ItemCount({stock, initial}) {

    const [stockRequired, setStockRequired] = useState(Number(initial));
    const [error, setError] = useState("");
    const [button, setButton] = useState(
    <button className="btn btn-success px-5 mt-4 mb-0" onClick={terminarCompra}>Agregar al carrito</button>
    )
    
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

    function terminarCompra() {
        setButton(<button className="btn btn-warning px-5 mt-4 mb-0" onClick={compraTerminada}>Terminar compra</button>)
    };

    function compraTerminada() {
        alert("Perfecto! Has comprado el producto!")
    }

    function agregarAlCarrito() {
        if (stockRequired >= 1) {
        return (
            button
            )
        }
    };

    return (
        <div className="error">
            <div className="display">
                <button onClick={Reducir}>-</button>
                    <div className="numero">
                        {stockRequired}
                    </div>
                <button onClick={Aumentar}>+</button>
            </div>
            {agregarAlCarrito()}
        <p>{error}</p>
        </div>
    )
}
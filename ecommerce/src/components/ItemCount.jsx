import {useState} from 'react';
import {Link} from 'react-router-dom';
export default function ItemCount({stock, initial}) {

    const [stockRequired, setStockRequired] = useState(Number(initial));
    const [error, setError] = useState("");
    const [stockComprado, setStockComprado] = useState(Number(initial));
    const [boton, setBoton] = useState(
        <button className="btn btn-success px-5 mt-4 mb-0" onClick={cambiarBoton}>Agregar al carrito</button>
        );
    // Operaciones con botones //
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

    function cambiarBoton() {
        setBoton(<Link to="/Cart" className="btn btn-success px-5 mt-4 mb-0">Terminar la compra</Link>)
        setStockComprado(1)
        console.log(stockComprado)
    }

    return (
        <div className="error">
            <div className="display">
                <button onClick={Reducir}>-</button>
                    <div className="numero">
                        {stockRequired}
                    </div>
                <button onClick={Aumentar}>+</button>
            </div>
            {stockRequired >= 1 ? boton : ""}
        <p>{error}</p>
        </div>
    )
}
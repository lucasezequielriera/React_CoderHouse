import React, {useState} from 'react';

function ItemCount({stock, initial}) {
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

    return (
        <div className="error">
            <div className="display">
                <button onClick={Reducir}>-</button>
                <div className="numero">{stockRequired}</div>
                <button onClick={Aumentar}>+</button>
            </div>
        <p>{error}</p>
        </div>
    )
}

export default ItemCount;
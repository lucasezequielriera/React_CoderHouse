import React, {useState} from 'react';

const ItemCount = ({ stock, initial }) => {
    const [stockRequired, setStockRequired] = useState(Number(initial));
    const [error, setError] = useState("");

    const Aumentar = () => {
        if (Number(stock) >= stockRequired + 1) {
            setStockRequired(stockRequired + 1);
            setError("");
        } else {
            setError("");
        }
    };

    const Reducir = () => {
        if (Number(initial) <= stockRequired - 1) {
            setStockRequired(stockRequired - 1);
            setError("");
        } else {
            setError("");
        }
    };

    return (
        <div className="display">
            <button onClick={Reducir}>-</button>
            <div className="numero">{stockRequired}</div>
            <p>{error}</p>
            <button onClick={Aumentar}>+</button>
        </div>
    )
}

export default ItemCount;
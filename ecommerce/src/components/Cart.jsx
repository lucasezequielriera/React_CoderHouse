import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext'

export default function Cart() {

    const { datos } = useContext(CartContext);
    
    return(
        <div className="cart text-center my-5">
            <h1 className="fw-lighter">Estos son tus productos que agregaste</h1>
            <ul>

            </ul>
        </div>
    )
}
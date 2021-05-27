import React from 'react';

function Welcome() {

    const nombre = 'Lucas';
    const saludar = new Promise((resolve, reject) => {
        // Tarea Sincrónica //
        if (nombre) {
            resolve('Perfecto, ingresaste tu nombre');
        } else {
            reject('Error: No ingresaste ningún nombre');
        }
    });

    saludar.then( result => {
        console.log(result);
    }, err => {
        console.log(err);
    });

    return (
        <h1>Bienvenido {nombre} a la página e-commerce con ReactJS</h1>
    )
}

export default Welcome;
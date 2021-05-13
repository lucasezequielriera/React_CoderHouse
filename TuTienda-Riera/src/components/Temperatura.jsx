import React, {Fragment, useState} from 'react';

 const Temperatura = () => {

    const [temperatura, setTemperatura] = useState(19);
    const Subir = () => {
        setTemperatura(temperatura + 1)
    }
    const Bajar = () => {
        setTemperatura(temperatura - 1)
    }

     return (
         <div>
             <h2>La temperatura es: {temperatura}</h2>
             <p> 
                {
                    temperatura > 19 ? "Hace Calor" : "Hace Frio"
                }
             </p>
             <button onClick={Subir} className="btn btn-warning">Aumentar temperatura</button>
             <button onClick={Bajar} className="btn btn-info">Reducir Temperatura</button>
         </div>
     )
 }

 export default Temperatura;
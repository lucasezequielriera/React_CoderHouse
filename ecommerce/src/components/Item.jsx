import {Link} from 'react-router-dom';

export default function Item({imagen, title, profesor, precio, descripcion, url}) {

    const style = {
        width: '18rem'
    }

    return (
        <div className="card" style={style}>
            <img src={imagen} className="card-img-top" alt="imagen" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text border m-3 mx-0 p-2 shadow w-100 fw-light">{descripcion}</p>
                <p className="card-text">Profesor: {profesor}<br/>Precio: ${precio}</p>
                <Link to={`/Productos/${url}`} className="btn btn-success">Ver curso</Link>
            </div>
        </div>
    )
};
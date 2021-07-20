import React, { useContext, useState } from 'react';
import ContextProvider from '../../context/ContextProvider';

export default function Cart() {


    const {info, setInfo} = useContext(ContextProvider);
    const {total} = useState(0);

    const deleteProducto = (id) => {
        const nuevoArray = info.filter( item => item.id !== id)
        setInfo(nuevoArray);
    }

    const sumaDeProducto = () => {
        const numeros = info.map((e) => {return e.precio});
        const total = numeros.reduce((a, b) => a + b, 0);
        return Number(total);
    }

        const formulario =
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Estas a punto de comprar !</h5>
                    </div>
                    <div className="modal-body">
                        <p>Dejanos tus datos a continuación para poder validar la compra:</p>
                        <form className="row g-3 needs-validation mt-3" novalidate>
                            <div className="col-md-4">
                                <label for="validationCustom01" className="form-label">Nombre</label>
                                <input type="text" className="form-control" id="validationCustom01" required />
                                <div className="valid-feedback">
                                Looks good!
                                </div>
                            </div>
                            <div className="col-md-4">
                                <label for="validationCustom02" className="form-label">Apellido</label>
                                <input type="text" className="form-control" id="validationCustom02" required />
                                <div className="valid-feedback">
                                Looks good!
                                </div>
                            </div>
                            <div className="col-md-4">
                                <label for="validationCustomUsername" className="form-label">Email</label>
                                <div className="input-group has-validation">
                                <span className="input-group-text" id="inputGroupPrepend">@</span>
                                <input type="email" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
                                <div className="invalid-feedback">
                                    Please choose a username.
                                </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <label for="validationCustom03" className="form-label">Ciudad</label>
                                <input type="text" className="form-control" id="validationCustom03" required />
                                <div className="invalid-feedback">
                                Please provide a valid city.
                                </div>
                            </div>
                            <div className="col-md-3">
                                <label for="validationCustom04" className="form-label">Provincia</label>
                                <select className="form-select" id="validationCustom04" required>
                                    <option selected disabled value="">Elige...</option>
                                    <option>CABA</option>
                                    <option>GBA</option>
                                    <option>Interior</option>
                                </select>
                                <div className="invalid-feedback">
                                Please select a valid state.
                                </div>
                            </div>
                            <div className="col-md-3">
                                <label for="validationCustom05" className="form-label">Teléfono</label>
                                <input type="number" className="form-control" id="validationCustom05" required />
                                <div className="invalid-feedback">
                                Please provide a valid zip.
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                                    <label className="form-check-label" for="invalidCheck">
                                        Agree to terms and conditions
                                    </label>
                                    <div className="invalid-feedback">
                                        You must agree before submitting.
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-primary w-100 mt-3" type="submit">Submit form</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    const boton = <button type="button" className="btn btn-success w-100" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Comprar</button>
    
    return(
        <>
        <div className="formulario">{formulario}</div>
        <div className="cart text-center my-5">
            <h1 className="fw-lighter">Estos son tus productos que agregaste</h1>
            <ul className="d-flex flex-column">
                {
                    info.map((item, index) => {
                        return(
                            <li key={index} className="border d-flex flex-row justify-content-between text-center w-50 m-auto px-3 py-1 align-items-center">
                                <div>{item.cantidad}</div>
                                {item.nombre} / ${item.precio}
                                <button className="btn btn-danger" onClick={ () => deleteProducto(item.id)}>X</button>
                            </li>
                        )
                    })
                }
            <ul><li className="fw-bolder mt-5 mb-0">El precio total de los productos es de: <span className="badge bg-primary">${sumaDeProducto(total)}</span></li></ul>
            </ul>
            { info.length >= 1 ? boton : "" }
        </div>
        </>
    )
}
import React, { useContext, useState } from 'react';
import ContextProvider from '../../context/ContextProvider';
import firebase from '../../firebase';

export default function Cart() {

    const {info, setInfo} = useContext(ContextProvider);
    const [total] = useState(0);
    const [form, setForm] = useState({nombre:'', apellido:'', email:'', telefono:'', ciudad:'', provincia:''});

    const deleteProducto = (id) => {
        const nuevoArray = info.filter( item => item.id !== id)
        setInfo(nuevoArray);
    }

    const sumaDeProducto = () => {
        const numeros = info.map((e) => {return e.precio});
        const total = numeros.reduce((a, b) => a + b, 0);
        return Number(total);
    }

    function comprar(event) {
        event.preventDefault();
        const db = firebase.db;
        // Add a new document in collection "cities"
        db.collection("compras").add({
            nombre: form.nombre,
            apellido: form.apellido,
            email: form.email,
            telefono: form.telefono,
            ciudad: form.ciudad,
            provincia: form.provincia,
            productosComprados: {
                productos: info.map((e) => {return e.nombre}),
                cantidad: info.map((e) => {return e.cantidad}),
                precio: info.map((e) => {return e.precio})
            }
        })
        .then(({id}) => {
            console.log("Document successfully written!");
            console.log(info)
            alert(`Felicitaciones por tu compra!\n\nTu código de compra es: \n${id}`);
            window.location.replace('');
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
        console.log(form)
        
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setForm({...form,[name]:value})
    }
    console.log(info)
    const formulario =
    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Estas a punto de comprar !</h5>
                </div>
                <div className="modal-body">
                    <p>Dejanos tus datos a continuación para poder validar la compra:</p>
                    <form className="row g-3 needs-validation mt-3" onSubmit={comprar}>
                        <div className="col-md-4">
                            <label className="form-label">Nombre</label>
                            <input type="text" className="form-control" id="validationCustom01" name="nombre" value={form.nombre} onChange={handleChange} required />
                            <div className="valid-feedback">
                            Looks good!
                            </div>
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Apellido</label>
                            <input type="text" className="form-control" id="validationCustom02" name="apellido" value={form.apellido} onChange={handleChange} required />
                            <div className="valid-feedback">
                            Looks good!
                            </div>
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Email</label>
                            <div className="input-group has-validation">
                            <span className="input-group-text" id="inputGroupPrepend">@</span>
                            <input type="email" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" name="email" value={form.email} onChange={handleChange} required />
                            <div className="invalid-feedback">
                                Please choose a username.
                            </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Ciudad</label>
                            <input type="text" className="form-control" id="validationCustom03" name="ciudad" value={form.ciudad} onChange={handleChange} required />
                            <div className="invalid-feedback">
                            Please provide a valid city.
                            </div>
                        </div>
                        <div className="col-md-3">
                            <label className="form-label">Provincia</label>
                            <select className="form-select" id="validationCustom04" name="provincia" value={form.provincia} onChange={handleChange} required>
                                <option disabled>Elige...</option>
                                <option value="CABA">CABA</option>
                                <option value="GBA">GBA</option>
                                <option value="Interior">Interior</option>
                            </select>
                            <div className="invalid-feedback">
                            Please select a valid state.
                            </div>
                        </div>
                        <div className="col-md-3">
                            <label className="form-label">Teléfono</label>
                            <input type="number" className="form-control" id="validationCustom05" name="telefono" value={form.telefono} onChange={handleChange} required />
                            <div className="invalid-feedback">
                            Please provide a valid zip.
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                                <label className="form-check-label">
                                    Agree to terms and conditions
                                </label>
                                <div className="invalid-feedback">
                                    You must agree before submitting.
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <button className="btn btn-success w-100 mt-3" type="submit">Comprar ahora</button>
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
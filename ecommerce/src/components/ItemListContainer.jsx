import React, {Fragment} from 'react';
import ItemList from './ItemList';

function ItemListContainer() {

    return (
        <Fragment>
            <h2>Lista de Productos</h2>
            <ItemList />
        </Fragment>
    )
}

export default ItemListContainer;
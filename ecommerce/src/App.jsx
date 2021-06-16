import React, { Component } from 'react';
import './assets/css/App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import Welcome from './components/Welcome';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import CartContext from './context/CartContext';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Navbar />
          </header>
        </div>

        <Switch>

          <CartContext>

            <Route exact path="/">
              <section className="Bienvenida">
                <Welcome />
              </section>
            </Route>

            <Route path="/Productos">
              <section className="Productos">
                <ItemListContainer />
              </section>
            </Route>
            {/* Acá tengo que editar las props!!! */}
            <Route path="/Javascript"> <ItemDetailContainer title="Javascript"/></Route>
            <Route path="/ReactJS"> <ItemDetailContainer title="ReactJS"/></Route>
            <Route path="/PHP"> <ItemDetailContainer title="PHP"/></Route>
            <Route path="/C++"> <ItemDetailContainer title="C++"/></Route>
            <Route path="/C#"> <ItemDetailContainer title="C#"/></Route>
            <Route path="/Programacion_en_R"> <ItemDetailContainer title="Programacion_en_R"/></Route>
            <Route path="/Cart"> <Cart /></Route>

          </CartContext>

        </Switch>

      </Router>
    )
  }
}

export default App;
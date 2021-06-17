import React, { Component } from 'react';
import './assets/css/App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import Welcome from './components/Welcome';
import ItemDetail from './components/ItemDetail';
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

            <Route exact path="/Productos">
              <section className="Productos">
                <ItemListContainer />
              </section>
            </Route>

            <Route exact path="/Productos/:id"> <ItemDetail/></Route>
            <Route exact path="/Cart"> <Cart /></Route>

          </CartContext>

        </Switch>

      </Router>
    )
  }
}

export default App;
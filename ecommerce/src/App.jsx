import './assets/css/App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import Welcome from './components/Welcome';
import ItemDetail from './components/ItemDetail';
import Cart from './components/Cart';
import {ContextProvider} from './context/ContextProvider';

export default function App() {

  return (
    // <CartContext.Provider value={CartContext._currentValue}>
      <ContextProvider>
      <Router>
        <Navbar />
        <Switch>

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

        </Switch>
      </Router>
      </ContextProvider>
    // </CartContext.Provider>
  )
}
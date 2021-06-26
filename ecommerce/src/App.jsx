import './assets/css/App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './pages/Products/ItemListContainer';
import Welcome from './pages/Home/Welcome';
import Cart from './pages/Cart/Cart';
import {ContextProvider} from './context/ContextProvider';
import ItemDetailContainer from './pages/ProductsDetail/ItemDetailContainer';

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

          <Route exact path="/Productos/:id"> <ItemDetailContainer/></Route>
          <Route exact path="/Cart"> <Cart /></Route>

        </Switch>
      </Router>
      </ContextProvider>
    // </CartContext.Provider>
  )
}
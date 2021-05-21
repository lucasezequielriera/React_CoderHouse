import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import ItemListContainer from './components/ItemListContainer';
import Welcome from './components/Welcome';

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

        </Switch>

      </Router>
    );
  }
}

export default App;
import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import Welcome from './components/Welcome';
import ItemDetailContainer from './components/ItemDetailContainer';

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

          <Route path="/Javascript"> <ItemDetailContainer /></Route>
          <Route path="/ReactJS"> <ItemDetailContainer /></Route>
          <Route path="/PHP"> <ItemDetailContainer /></Route>
          <Route path="/C++"> <ItemDetailContainer /></Route>
          <Route path="/C#"> <ItemDetailContainer /></Route>
          <Route path="/Programacion_en_R"> <ItemDetailContainer /></Route>

        </Switch>

      </Router>
    );
  }
}

export default App;
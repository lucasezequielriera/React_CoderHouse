import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar.jsx';
import Contador from './components/Contador';
import Listado from './components/Listado';
import Temperatura from './components/Temperatura';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
        <section className="Productos">
          <Contador />
          <Listado />
          <Temperatura />
        </section>
      </div>
    );
  }
}

export default App;
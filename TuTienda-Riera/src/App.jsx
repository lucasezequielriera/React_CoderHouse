import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar.jsx';
import ItemListContainer from './components/ItemListContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
        <section className="Productos">
          <ItemListContainer />
        </section>
      </div>
    );
  }
}

export default App;
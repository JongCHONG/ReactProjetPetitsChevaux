import React, { Component } from 'react';
import Square from './components/Square';

import './App.css'

class App extends Component {
  render() {
    return (
      <>
        <div>
          <h1>Les Petits Chevaux</h1>
        </div>
        <div><Square /></div>
        <div><Square /></div>
        <div><Square /></div>
        <div><Square /></div>

      </>

    );
  }
}

export default App;
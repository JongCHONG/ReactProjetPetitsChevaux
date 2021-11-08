import React from 'react';

import logo from './logo.svg';
import './App.css';
import Square from "./components/Square"

import './App.css'

class App extends React.Component {
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
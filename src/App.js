import React, { Component } from 'react'
import Square from './components/Square';
import Circle from './components/Circle';
import './App.css'



class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
      <Circle />
      </div>
    )
  }
}

export default App;
import React, { Component } from 'react';
import Square from './components/Square'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'


class App extends Component {
  constructor(){
    super()
    this.state = {
      counter: 0,
      player: [
        { 
          id : 0,
          name : "Player 1",
          color : "blue",
          positionInitiale : 0,
          positionActuelle : 0,
          positionFinale: 56
        }
      ]
      // ,
      //  player2: {
      //   id : 1,
      //   name : "Player 2",
      //   color : "red",
      //   positionInitiale : 0,
      //   positionActuelle : 0
      // }
    }
    this.handlePlayerMove= this.handlePlayerMove.bind(this)

  }
  handlePlayerMove=()=>{           //e=dice//
    const { id, name, color,  positionInitiale, positionActuelle, positionFinale } = this.state.player[0]
    let newPosition = positionActuelle+6
    const newArray = {
      id: id,
      name: name,
      color: color,
      positionInitiale: positionInitiale,
      positionActuelle: newPosition,
      positionFinale : positionFinale  
    }
    this.setState({player:[ newArray]})
  }

  render() {

    console.log(this.state.player)
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="head d-flex align-items-center justify-content-between">
              <h1>Les Petits Chevaux</h1>
              <button>Restart</button>
              <button onClick={this.handlePlayerMove}>test</button>
            </div>
          </div>
          <div className="row">
            <Square className="top-left" />
            <div className="col-1 milieu-vertical">
              milieu vertical
            </div>
            <Square className="top-right" />
          </div>
          <div className="row">
            <div className="col-5">
              <div className="milieu-horizontal"></div>
            </div>
            <div className="col-1 milieu-vertical">
              milieu vertical
            </div>
            <div className="col-5">
              <div className="milieu-horizontal"></div>
            </div>
          </div>
          <div className="row">
            <Square className="bottom-left" />
            <div className="col-1 milieu-vertical">
              milieu vertical
            </div>
            <Square className="bottom-right" />
          </div>

        </div>
      </>
    )
  }
}

export default App;
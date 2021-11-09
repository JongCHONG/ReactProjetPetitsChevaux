import React, { Component } from 'react';
import Square from './components/Square';

import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'


class App extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="head d-flex align-items-center justify-content-between">
              <h1>Les Petits Chevaux</h1>
              <button>Restart</button>
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
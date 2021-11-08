import React, { Component } from 'react';
import Square from './components/Square'

import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <div className="title">
          <h1> Les Petits chevaux </h1>
          <span><button>Restart</button></span>


        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Square className="top-left" />
              <Square className="top-right" />
            </div>

          </div>
          <div className="row">
            <div className="col-6">
              <Square className="bottom-left" />
              <Square className="bottom-right" />
            </div>

          </div>


        </div>

      </div>
    );
  }
}

export default App;

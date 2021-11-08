import React, { Component } from 'react';
import Square from './components/Square'

import 'bootstrap/dist/css/bootstrap.min.css'


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

            <div className="col-5">
              <Square className="top-left" />
            </div>

            <div className="milieu-vertical">
              vertical haut
            </div>

            <div className="col-5">
              <Square className="top-right" />
            </div>
            <div className="row">
              <div className="col-5">
                <div className="milieu-horizontal">
                  horizontal
                </div>
              </div>

              <div className="milieu-vertical"></div>

              <div className="col-5">
                <div className="milieu-horizontal">
                  horizontal
                </div>

              </div>
            </div>


          </div>



          <div className="row">

            <div className="col-5">
              <Square className="bottom-left" />
            </div>

            <div className="milieu-vertical">
              vertical bas

            </div>


            <div className="col-5">
              <Square className="bottom-right" />
            </div>

          </div>


        </div>

      </div >
    );
  }
}

export default App;
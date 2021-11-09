import React, { Component } from 'react';
import BigBox from './components/BigBox';
import SmallBox from './components/Smallbox';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'


class App extends Component {
  constructor() {
    super();
    this.state = {
      dice: 0,
      player1: [
        {
          id: "Bryan",
          color: "yellow",
        },
      ],
      player2: [
        {
          id: "Jack",
          color: "green",

        },
      ],
      player3: [
        {
          id: "Ben",
          color: "blue",
        },
      ],
      player4: [
        {
          id: "Jerry",
          color: "red",
        },
      ],
    };
  }
  render() {
      const player1 = this.state.player1;
      const player2 = this.state.player2;
      const player3 = this.state.player3;
      const player4 = this.state.player4;
      return (
        <>
          <div
            style={{ width: "750px", height: "800px" }}
            className="bg-light mx-auto my-5"
          >
            <div
              className="h1 bg-dark text-center p-4 text-white"
            >
            Petits Chevaux
            </div>
            
            <Button/>
          
            <div
              style={{
                height: "40vh",
                display: "grid",
                backgroundColor: "white",
                margin: "20px auto",
              }}
            >
              {/* Yellow Box */}
              <BigBox row={1} column={1} color={this.state.player1[0].color}>
                <SmallBox row={1} column={1} color="white"></SmallBox>
                <SmallBox row={1} column={2} color="white"></SmallBox>
                <SmallBox row={2} column={1} color="white"></SmallBox>
                <SmallBox row={2} column={2} color="white"></SmallBox>
              </BigBox>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  width: "150px",
                  height: "150px",
                }}
              >
                <SmallBox color="black"></SmallBox>
                <SmallBox color="green"></SmallBox>
                <SmallBox color="black"></SmallBox>
                <SmallBox color="yellow"></SmallBox>
                <SmallBox color="black"></SmallBox>
                <SmallBox color="red"></SmallBox>
                <SmallBox color="black"></SmallBox>
                <SmallBox color="blue"></SmallBox>
                <SmallBox color="black"></SmallBox>
              </div>
              <div
                style={{
                  margin: "0",
                  gridRow: "1",
                  gridColumn: "2",
                  display: "flex",
                  flexWrap: "wrap",
                }}
              >
                {/* Green Area */}
                <SmallBox color="white"></SmallBox>
                <SmallBox color="white"></SmallBox>
                <SmallBox color="white"></SmallBox>
                <SmallBox color="white"></SmallBox>
                <SmallBox color="green"></SmallBox>
                <SmallBox color="green"></SmallBox>
                <SmallBox color="white"></SmallBox>
                <SmallBox color="green"></SmallBox>
                <SmallBox color="white"></SmallBox>
                <SmallBox color="white"></SmallBox>
                <SmallBox color="green"></SmallBox>
                <SmallBox color="white"></SmallBox>
                <SmallBox color="white"></SmallBox>
                <SmallBox color="green"></SmallBox>
                <SmallBox color="white"></SmallBox>
                <SmallBox color="white"></SmallBox>
                <SmallBox color="green"></SmallBox>
                <SmallBox color="white"></SmallBox>
              </div>
              {/* Green Box */}
              <BigBox row={1} column={3} color={this.state.player2[0].color}>
                <SmallBox row={1} column={1} color="white"></SmallBox>
                <SmallBox row={1} column={2} color="white"></SmallBox>
                <SmallBox row={2} column={1} color="white"></SmallBox>
                <SmallBox row={2} column={2} color="white"></SmallBox>
              </BigBox>
              <div
                style={{
                  gridRow: "2",
                  gridColumn: "1",
                  display: "flex",
                  flexWrap: "wrap",
                }}
              >
                {/* Yellow Area */}
                <SmallBox color="white"></SmallBox>
                <SmallBox color="yellow"></SmallBox>
                <SmallBox color="white"></SmallBox>
                <SmallBox color="white"></SmallBox>
                <SmallBox color="white"></SmallBox>
                <SmallBox color="white"></SmallBox>
                <SmallBox color="white"></SmallBox>
                <SmallBox color="yellow"></SmallBox>
                <SmallBox color="yellow"></SmallBox>
                <SmallBox color="yellow"></SmallBox>
                <SmallBox color="yellow"></SmallBox>
                <SmallBox color="yellow"></SmallBox>
                <SmallBox color="white"></SmallBox>
                <SmallBox color="white"></SmallBox>
                <SmallBox color="white"></SmallBox>
                <SmallBox color="white"></SmallBox>
                <SmallBox color="white"></SmallBox>
                <SmallBox color="white"></SmallBox>
              </div>
              <div
                style={{
                  gridRow: "2",
                  gridColumn: "3",
                  display: "flex",
                  flexWrap: "wrap",
                }}
              >
                {/* Red Area */}
                <SmallBox color="white"></SmallBox>
                <SmallBox color="white"></SmallBox>
                <SmallBox color="white"></SmallBox>
                <SmallBox color="white"></SmallBox>
                <SmallBox color="white"></SmallBox>
                <SmallBox color="white"></SmallBox>
                <SmallBox color="red"></SmallBox>
                <SmallBox color="red"></SmallBox>
                <SmallBox color="red"></SmallBox>
                <SmallBox color="red"></SmallBox>
                <SmallBox color="red"></SmallBox>
                <SmallBox color="white"></SmallBox>
                <SmallBox color="white"></SmallBox>
                <SmallBox color="white"></SmallBox>
                <SmallBox color="white"></SmallBox>
                <SmallBox color="white"></SmallBox>
                <SmallBox color="red"></SmallBox>
                <SmallBox color="white"></SmallBox>
              </div>
              {/* Blue Box */}
              <BigBox row={3} column={1} color={this.state.player3[0].color}>
                <SmallBox row={1} column={1} color="white"></SmallBox>
                <SmallBox row={1} column={2} color="white"></SmallBox>
                <SmallBox row={2} column={1} color="white"></SmallBox>
                <SmallBox row={2} column={2} color="white"></SmallBox>
              </BigBox>
              <div
                style={{
                  gridRow: "3",
                  gridColumn: "2",
                  display: "flex",
                  flexWrap: "wrap",
                }}
              >
                {/* Blue Area */}
                <SmallBox color="white"></SmallBox>
                <SmallBox color="blue"></SmallBox>
                <SmallBox color="white"></SmallBox>
                <SmallBox color="white"></SmallBox>
                <SmallBox color="blue"></SmallBox>
                <SmallBox color="white"></SmallBox>
                <SmallBox color="white"></SmallBox>
                <SmallBox color="blue"></SmallBox>
                <SmallBox color="white"></SmallBox>
                <SmallBox color="white"></SmallBox>
                <SmallBox color="blue"></SmallBox>
                <SmallBox color="white"></SmallBox>
                <SmallBox color="blue"></SmallBox>
                <SmallBox color="blue"></SmallBox>
                <SmallBox color="white"></SmallBox>
                <SmallBox color="white"></SmallBox>
                <SmallBox color="white"></SmallBox>
                <SmallBox color="white"></SmallBox>
              </div>
              {/* Red Box */}
              <BigBox row={3} column={3} color={this.state.player4[0].color}>
                <SmallBox row={1} column={1} color="white"></SmallBox>
                <SmallBox row={1} column={2} color="white"></SmallBox>
                <SmallBox row={2} column={1} color="white"></SmallBox>
                <SmallBox row={2} column={2} color="white"></SmallBox>
              </BigBox>
            </div>
          </div>
          </>
              
    );
  }
}

export default App;
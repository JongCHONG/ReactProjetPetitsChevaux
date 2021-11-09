import React, { Component } from 'react';
import BigBox from './components/BigBox';
import SmallBox from './components/Smallbox';
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from './components/Button';


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

          <Button />

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
              <SmallBox id="48" color="black"></SmallBox>
              <SmallBox color="green"></SmallBox>
              <SmallBox id="" color="black"></SmallBox>
              <SmallBox color="yellow"></SmallBox>
              <SmallBox id="" color="black"></SmallBox>
              <SmallBox color="red"></SmallBox>
              <SmallBox id="34" color="black"></SmallBox>
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
                <SmallBox id="" color="black"></SmallBox>
                <SmallBox id="" color="green"></SmallBox>
                <SmallBox id="6" color="black"></SmallBox>
                <SmallBox id="" color="yellow"></SmallBox>
                <SmallBox id="" color="black"></SmallBox>
                <SmallBox id="" color="red"></SmallBox>
                <SmallBox id="34" color="black"></SmallBox>
                <SmallBox id="" color="blue"></SmallBox>
                <SmallBox id="20" color="black"></SmallBox>
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
                <SmallBox id="" color="white"></SmallBox>
                <SmallBox id="" color="white"></SmallBox>
                <SmallBox id="" color="white"></SmallBox>
                <SmallBox id="" color="white"></SmallBox>
                <SmallBox id="" color="green"></SmallBox>
                <SmallBox id="1" color="green"></SmallBox>
                <SmallBox id="" color="white"></SmallBox>
                <SmallBox id="" color="green"></SmallBox>
                <SmallBox id="2" color="white"></SmallBox>
                <SmallBox id="" color="white"></SmallBox>
                <SmallBox id="" color="green"></SmallBox>
                <SmallBox id="3" color="white"></SmallBox>
                <SmallBox id="" color="white"></SmallBox>
                <SmallBox id="" color="green"></SmallBox>
                <SmallBox id="4" color="white"></SmallBox>
                <SmallBox id="" color="white"></SmallBox>
                <SmallBox id="" color="green"></SmallBox>
                <SmallBox id="5" color="white"></SmallBox>
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
                <SmallBox id="7" color="white"></SmallBox>
                <SmallBox id="8" color="white"></SmallBox>
                <SmallBox id="9" color="white"></SmallBox>
                <SmallBox id="10" color="white"></SmallBox>
                <SmallBox id="11" color="white"></SmallBox>
                <SmallBox id="12" color="white"></SmallBox>
                <SmallBox id="" color="red"></SmallBox>
                <SmallBox id="" color="red"></SmallBox>
                <SmallBox id="" color="red"></SmallBox>
                <SmallBox id="" color="red"></SmallBox>
                <SmallBox id="" color="red"></SmallBox>
                <SmallBox id="13" color="white"></SmallBox>
                <SmallBox id="19" color="white"></SmallBox>
                <SmallBox id="18" color="white"></SmallBox>
                <SmallBox id="17" color="white"></SmallBox>
                <SmallBox id="16" color="white"></SmallBox>
                <SmallBox id="15" color="red"></SmallBox>
                <SmallBox id="14" color="white"></SmallBox>
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
                <SmallBox id="33" color="white"></SmallBox>
                <SmallBox id="" color="blue"></SmallBox>
                <SmallBox id="21" color="white"></SmallBox>
                <SmallBox id="32" color="white"></SmallBox>
                <SmallBox id="" color="blue"></SmallBox>
                <SmallBox id="22" color="white"></SmallBox>
                <SmallBox id="31" color="white"></SmallBox>
                <SmallBox id="" color="blue"></SmallBox>
                <SmallBox id="23" color="white"></SmallBox>
                <SmallBox id="30" color="white"></SmallBox>
                <SmallBox id="" color="blue"></SmallBox>
                <SmallBox id="24" color="white"></SmallBox>
                <SmallBox id="29" color="blue"></SmallBox>
                <SmallBox id="" color="blue"></SmallBox>
                <SmallBox id="25" color="white"></SmallBox>
                <SmallBox id="28" color="white"></SmallBox>
                <SmallBox id="27" color="white"></SmallBox>
                <SmallBox id="26" color="white"></SmallBox>
              </div>
              {/* Red Box */}
              <BigBox row={3} column={3} color={this.state.player4[0].color}>
                <SmallBox row={1} column={1} color="white"></SmallBox>
                <SmallBox row={1} column={2} color="white"></SmallBox>
                <SmallBox row={2} column={1} color="white"></SmallBox>
                <SmallBox row={2} column={2} color="white"></SmallBox>
              </BigBox>
              {/* Green Area */}
              <SmallBox id="54" color="white"></SmallBox>
              <SmallBox id="55" color="white"></SmallBox> {/*Ligne d'arrivée joueur vert*/}
              <SmallBox color="white"></SmallBox>
              <SmallBox id="53" color="white"></SmallBox>
              <SmallBox color="green"></SmallBox>
              <SmallBox id="1" color="green"></SmallBox>
              <SmallBox id="52" color="white"></SmallBox>
              <SmallBox color="green"></SmallBox>
              <SmallBox id="2" color="white"></SmallBox>
              <SmallBox id="51" color="white"></SmallBox>
              <SmallBox color="green"></SmallBox>
              <SmallBox id="3" color="white"></SmallBox>
              <SmallBox id="50" color="white"></SmallBox>
              <SmallBox color="green"></SmallBox>
              <SmallBox id="4" color="white"></SmallBox>
              <SmallBox id="49" color="white"></SmallBox>
              <SmallBox color="green"></SmallBox>
              <SmallBox id="5" color="white"></SmallBox>
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
              <SmallBox id="42" color="white"></SmallBox>
              <SmallBox id="43" color="yellow"></SmallBox> {/* Départ Jaune */}
              <SmallBox id="44" color="white"></SmallBox>
              <SmallBox id="45" color="white"></SmallBox>
              <SmallBox id="46" color="white"></SmallBox>
              <SmallBox id="47" color="white"></SmallBox>
              <SmallBox id="41" color="white"></SmallBox>
              <SmallBox id="" color="yellow"></SmallBox>
              <SmallBox id="" color="yellow"></SmallBox>
              <SmallBox id="" color="yellow"></SmallBox>
              <SmallBox id="" color="yellow"></SmallBox>
              <SmallBox id="" color="yellow"></SmallBox>
              <SmallBox id="40" color="white"></SmallBox>
              <SmallBox id="39" color="white"></SmallBox>
              <SmallBox id="38" color="white"></SmallBox>
              <SmallBox id="37" color="white"></SmallBox>
              <SmallBox id="36" color="white"></SmallBox>
              <SmallBox id="35" color="white"></SmallBox>
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
              <SmallBox id="" color="white"></SmallBox>
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
              <SmallBox id="33" color="white"></SmallBox>
              <SmallBox id="" color="blue"></SmallBox>
              <SmallBox id="21" color="white"></SmallBox>
              <SmallBox id="32" color="white"></SmallBox>
              <SmallBox id="" color="blue"></SmallBox>
              <SmallBox id="23" color="white"></SmallBox>
              <SmallBox id="32" color="white"></SmallBox>
              <SmallBox id="" color="blue"></SmallBox>
              <SmallBox id="23" color="white"></SmallBox>
              <SmallBox id="30" color="white"></SmallBox>
              <SmallBox id="" color="blue"></SmallBox>
              <SmallBox id="24" color="white"></SmallBox>
              <SmallBox id="29" color="blue"></SmallBox> {/*Départ du joueur bleu*/}
              <SmallBox id="" color="blue"></SmallBox>
              <SmallBox id="25" color="white"></SmallBox>
              <SmallBox id="" color="white"></SmallBox>
              <SmallBox id="27" color="white"></SmallBox>
              <SmallBox id="26" color="white"></SmallBox>
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
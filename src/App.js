import React, { Component } from 'react';
import BigBox from './components/BigBox';
import SmallBox from './components/Smallbox';
import 'bootstrap/dist/css/bootstrap.min.css'
// import Button from './components/Button';
import Dice from "./components/Dice"

import "./App.css"


class App extends Component {
  constructor() {
    super()
    this.state = {
      counter: 0,
      dice: 0,
      player: [
        {
          id: 0,
          name: "Player 1",
          color: "yellow",
          positionInitiale: 43,
          positionActuelle: 43,
          isActive: true
        },
        {
          id: 1,
          name: "Player 2",
          color: "green",
          positionInitiale: 1,
          positionActuelle: 1,
          isActive: true
        },
        {
          id: 2,
          name: "Player 3",
          color: "red",
          positionInitiale: 15,
          positionActuelle: 15,
          isActive: true
        },
        {
          id: 3,
          name: "Player 4",
          color: "blue",
          positionInitiale: 29,
          positionActuelle: 29,
          isActive: true
        }
      ]

    }
    // this.handlePlayerMove = this.handlePlayerMove.bind(this)
    this.handleDiceClick = this.handleDiceClick.bind(this)

  }

  // handlePlayerMove = () => {
  //   //lance le dé
  //   let playerIndex = this.state.counter
  //   // récupère le counter index
  //   const playersCloned = [...this.state.player]

  //   // vérifie que le joueur est active
  //   if (this.state.player[this.state.counter].isActive === true) {
  //     playersCloned[playerIndex].positionActuelle += this.state.dice
  //     this.setState({ player: playersCloned })
  //   }
  //   // vérifie s'il y a collision 
  //   this.handleCollision(playerIndex)
  //   // ajoute +1 au counter 
  //   this.setState({ counter: this.state.counter === 0 ? 1 : 0 })
  //   // this.handleCounter()
  // }
  handleCollision = (playerCurrentPosition) => {
    const secondPlayer = playerCurrentPosition === 0 ? 1 : 0;
    const playersCloned = [...this.state.player]
    if (playersCloned[playerCurrentPosition].positionActuelle === playersCloned[secondPlayer].positionActuelle) {
      playersCloned[secondPlayer].positionActuelle = playersCloned[secondPlayer].positionInitiale
      this.setState({ player: playersCloned })
    }
  }

  // // handlePlayerActive = () =>{
  //   if (this.state.dice === 6) {
  //     const playersCloned = [...this.state.player]
  //     playersCloned[this.state.counter].isActive = true

  //     this.setState({
  //       player: playersCloned
  //     })
  //   }

  // // }

  handleDiceClick() {
    let playersCloned = [...this.state.player]
    let playerIndex = this.state.counter
    // let randomDice = 1
    let randomDice = Math.floor(Math.random() * (6 - 1 + 1) + 1)

    if (randomDice === 6 && this.state.player[playerIndex].isActive === false) {
      playersCloned[playerIndex].isActive = true
    } else if (this.state.player[playerIndex].isActive === true) {
      playersCloned[playerIndex].positionActuelle += randomDice
    }
    if (playersCloned[playerIndex].positionActuelle > 56 && playerIndex === 0) {
      playersCloned[playerIndex].positionActuelle = playersCloned[playerIndex].positionActuelle - 56
    }
    if (playersCloned[playerIndex].positionActuelle === 42 && playerIndex === 0) {
      playersCloned[playerIndex].positionActuelle = 57
    }
    if (playersCloned[playerIndex].positionActuelle === 56 && playerIndex === 1) {
      playersCloned[playerIndex].positionActuelle = 57
    }
    if (playersCloned[playerIndex].positionActuelle === 57 && playerIndex === 2) {
      playersCloned[playerIndex].positionActuelle = 1
    }
    if (playersCloned[playerIndex].positionActuelle === 14 && playerIndex === 2) {
      playersCloned[playerIndex].positionActuelle = 57
    }
    if (playersCloned[playerIndex].positionActuelle === 57 && playerIndex === 3) {
      playersCloned[playerIndex].positionActuelle = 1
    }
    if (playersCloned[playerIndex].positionActuelle === 28 && playerIndex === 3) {
      playersCloned[playerIndex].positionActuelle = 57
    }
    // const secondPlayer = playerIndex === 0 ? 1 : 0
    playersCloned.forEach((element, index) => {
      if (playerIndex !== index) {
        if (playersCloned[playerIndex].positionActuelle === playersCloned[index].positionActuelle) {
          playersCloned[index].positionActuelle = playersCloned[index].positionInitiale
        }
      } 
    })
    // if (playersCloned[playerIndex].positionActuelle === playersCloned[secondPlayer].positionActuelle) {
    //   playersCloned[secondPlayer].positionActuelle = playersCloned[secondPlayer].positionInitiale
    // }

    this.setState({
      player: playersCloned,
      dice: randomDice,
      counter: playerIndex === 3 ? 0 : playerIndex + 1
    })

    // vérifie s'il y a collision 
    // this.handleCollision(playerIndex)
  }



  render() {

    // console.log("counter", this.state.counter)
    console.log("dice", this.state.dice)
    console.log("state player => ", this.state.player)
    console.log("position Joueur 1 ", this.state.player[0].positionActuelle);
    console.log("position Joueur 2 ", this.state.player[1].positionActuelle);
    console.log("position Joueur 3 ", this.state.player[2].positionActuelle);
    console.log("position Joueur 4 ", this.state.player[3].positionActuelle);


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

          <Dice image={this.image} handleClick={this.handleDiceClick} random={this.state.dice} />
          {/* <Button /> */}
          <div
            style={{
              height: "40vh",
              display: "grid",
              backgroundColor: "white",
              margin: "20px auto",
            }}
          >
            {/* Yellow Box */}
            <BigBox row={1} column={1} color="yellow">
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
              <SmallBox
                id="48"
                color="black"
                positionActuelle1={this.state.player[0].positionActuelle}
                positionActuelle2={this.state.player[1].positionActuelle}
                positionActuelle3={this.state.player[2].positionActuelle}
                positionActuelle4={this.state.player[3].positionActuelle}
              ></SmallBox>
              <SmallBox
                id="62"
                color="green"
                positionActuelle2={this.state.player[1].positionActuelle}
              >
              </SmallBox>
              <SmallBox
                id="6"
                color="black"
                positionActuelle1={this.state.player[0].positionActuelle}
                positionActuelle2={this.state.player[1].positionActuelle}
                positionActuelle3={this.state.player[2].positionActuelle}
                positionActuelle4={this.state.player[3].positionActuelle}
              ></SmallBox>
              <SmallBox
                id="62"
                color="yellow"
                positionActuelle1={this.state.player[0].positionActuelle}
              ></SmallBox>
              <SmallBox 
                id="63" 
                color="black" 
                positionActuelle1={this.state.player[0].positionActuelle} 
                positionActuelle2={this.state.player[1].positionActuelle}
              ></SmallBox>
              <SmallBox
                id="62"
                color="red"
                positionActuelle3={this.state.player[2].positionActuelle}
              ></SmallBox>
              <SmallBox
                id="34"
                color="black"
                positionActuelle1={this.state.player[0].positionActuelle}
                positionActuelle2={this.state.player[1].positionActuelle}
                positionActuelle3={this.state.player[2].positionActuelle}
                positionActuelle4={this.state.player[3].positionActuelle}
              ></SmallBox>
              <SmallBox 
                id="62" 
                color="blue"
                positionActuelle4={this.state.player[3].positionActuelle}
              ></SmallBox>
              <SmallBox
                id="20"
                color="black"
                positionActuelle1={this.state.player[0].positionActuelle}
                positionActuelle2={this.state.player[1].positionActuelle}
                positionActuelle3={this.state.player[2].positionActuelle}
                positionActuelle4={this.state.player[3].positionActuelle}
              ></SmallBox>
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
              <SmallBox
                id="54"
                color="white"
                positionActuelle1={this.state.player[0].positionActuelle}
                positionActuelle2={this.state.player[1].positionActuelle}
                positionActuelle3={this.state.player[2].positionActuelle}
                positionActuelle4={this.state.player[3].positionActuelle}
              >
              </SmallBox>
              <SmallBox
                id="55"
                color="white"
                positionActuelle1={this.state.player[0].positionActuelle}
                positionActuelle2={this.state.player[1].positionActuelle}
                positionActuelle3={this.state.player[2].positionActuelle}
                positionActuelle4={this.state.player[3].positionActuelle}
              >
              </SmallBox>{/*fin joueur vert*/}
              <SmallBox
                id="56"
                color="white"
                positionActuelle1={this.state.player[0].positionActuelle}
                positionActuelle3={this.state.player[2].positionActuelle}
                positionActuelle4={this.state.player[3].positionActuelle}
              >
              </SmallBox>
              <SmallBox
                id="53"
                color="white"
                positionActuelle1={this.state.player[0].positionActuelle}
                positionActuelle2={this.state.player[1].positionActuelle}
                positionActuelle3={this.state.player[2].positionActuelle}
                positionActuelle4={this.state.player[3].positionActuelle}
              >
              </SmallBox>
              <SmallBox
                id="57"
                color="green"
                positionActuelle2={this.state.player[1].positionActuelle}>
              </SmallBox>
              <SmallBox /* Départ joueur vert*/
                id="1"
                color="green"
                positionActuelle1={this.state.player[0].positionActuelle}
                positionActuelle2={this.state.player[1].positionActuelle}
                positionActuelle3={this.state.player[2].positionActuelle}
                positionActuelle4={this.state.player[3].positionActuelle}
              ></SmallBox>
              <SmallBox
                id="52"
                color="white"
                positionActuelle1={this.state.player[0].positionActuelle}
                positionActuelle2={this.state.player[1].positionActuelle}
                positionActuelle3={this.state.player[2].positionActuelle}
                positionActuelle4={this.state.player[3].positionActuelle}
              ></SmallBox>
              <SmallBox
                id="58"
                color="green"
                positionActuelle2={this.state.player[1].positionActuelle}
                positionActuelle4={this.state.player[3].positionActuelle}
              ></SmallBox>
              <SmallBox
                id="2"
                color="white"
                positionActuelle1={this.state.player[0].positionActuelle}
                positionActuelle2={this.state.player[1].positionActuelle}
                positionActuelle3={this.state.player[2].positionActuelle}
                positionActuelle4={this.state.player[3].positionActuelle}
              ></SmallBox>
              <SmallBox
                id="51"
                color="white"
                positionActuelle1={this.state.player[0].positionActuelle}
                positionActuelle2={this.state.player[1].positionActuelle}
                positionActuelle3={this.state.player[2].positionActuelle}
                positionActuelle4={this.state.player[3].positionActuelle}
              >
              </SmallBox>
              <SmallBox
                id="59"
                color="green"
                positionActuelle2={this.state.player[1].positionActuelle}
              ></SmallBox>
              <SmallBox
                id="3"
                color="white"
                positionActuelle1={this.state.player[0].positionActuelle}
                positionActuelle2={this.state.player[1].positionActuelle}
                positionActuelle3={this.state.player[2].positionActuelle}
                positionActuelle4={this.state.player[3].positionActuelle}
              ></SmallBox>
              <SmallBox
                id="50"
                color="white"
                positionActuelle1={this.state.player[0].positionActuelle}
                positionActuelle2={this.state.player[1].positionActuelle}
                positionActuelle3={this.state.player[2].positionActuelle}
                positionActuelle4={this.state.player[3].positionActuelle}
              >
              </SmallBox>
              <SmallBox
                id="60"
                color="green"
                positionActuelle2={this.state.player[1].positionActuelle}
              ></SmallBox>
              <SmallBox
                id="4"
                color="white"
                positionActuelle1={this.state.player[0].positionActuelle}
                positionActuelle2={this.state.player[1].positionActuelle}
                positionActuelle3={this.state.player[2].positionActuelle}
                positionActuelle4={this.state.player[3].positionActuelle}
              ></SmallBox>
              <SmallBox
                id="49"
                color="white"
                positionActuelle1={this.state.player[0].positionActuelle}
                positionActuelle2={this.state.player[1].positionActuelle}
                positionActuelle3={this.state.player[2].positionActuelle}
                positionActuelle4={this.state.player[3].positionActuelle}
              ></SmallBox>
              <SmallBox
                id="61"
                color="green"
                positionActuelle2={this.state.player[1].positionActuelle}
              ></SmallBox>
              <SmallBox id="5"
                color="white"
                positionActuelle1={this.state.player[0].positionActuelle}
                positionActuelle2={this.state.player[1].positionActuelle}
                positionActuelle3={this.state.player[2].positionActuelle}
                positionActuelle4={this.state.player[3].positionActuelle}
              ></SmallBox>
            </div>
            {/* Green Box */}
            <BigBox row={1} column={3} color="green">
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
              <SmallBox
                id="42"
                color="white"
                positionActuelle2={this.state.player[1].positionActuelle}
                positionActuelle3={this.state.player[2].positionActuelle}
                positionActuelle4={this.state.player[3].positionActuelle}
              >
              </SmallBox>
              <SmallBox
                id="43"
                color="yellow"
                positionActuelle1={this.state.player[0].positionActuelle}
                positionActuelle2={this.state.player[1].positionActuelle}
                positionActuelle3={this.state.player[2].positionActuelle}
                positionActuelle4={this.state.player[3].positionActuelle}
              >
              </SmallBox> {/* départ joueur jaune*/}
              <SmallBox
                id="44"
                color="white"
                positionActuelle1={this.state.player[0].positionActuelle}
                positionActuelle2={this.state.player[1].positionActuelle}
                positionActuelle3={this.state.player[2].positionActuelle}
                positionActuelle4={this.state.player[3].positionActuelle}
              >
              </SmallBox>
              <SmallBox
                id="45"
                color="white"
                positionActuelle1={this.state.player[0].positionActuelle}
                positionActuelle2={this.state.player[1].positionActuelle}
                positionActuelle3={this.state.player[2].positionActuelle}
                positionActuelle4={this.state.player[3].positionActuelle}
              >
              </SmallBox>
              <SmallBox
                id="46"
                color="white"
                positionActuelle1={this.state.player[0].positionActuelle}
                positionActuelle2={this.state.player[1].positionActuelle}
                positionActuelle3={this.state.player[2].positionActuelle}
                positionActuelle4={this.state.player[3].positionActuelle}
              >
              </SmallBox>
              <SmallBox
                id="47"
                color="white"
                positionActuelle1={this.state.player[0].positionActuelle}
                positionActuelle2={this.state.player[1].positionActuelle}
                positionActuelle3={this.state.player[2].positionActuelle}
                positionActuelle4={this.state.player[3].positionActuelle}
              >
              </SmallBox>
              <SmallBox
                id="41"
                color="white"
                positionActuelle1={this.state.player[0].positionActuelle}
                positionActuelle2={this.state.player[1].positionActuelle}
                positionActuelle3={this.state.player[2].positionActuelle}
                positionActuelle4={this.state.player[3].positionActuelle}
              >
              </SmallBox> {/*fin joueur jaune*/}
              <SmallBox
                id="57"
                color="yellow"
                positionActuelle1={this.state.player[0].positionActuelle}
              ></SmallBox>
              <SmallBox
                id="58"
                color="yellow"
                positionActuelle1={this.state.player[0].positionActuelle}
              ></SmallBox>
              <SmallBox
                id="59"
                color="yellow"
                positionActuelle1={this.state.player[0].positionActuelle}
              ></SmallBox>
              <SmallBox
                id="60"
                color="yellow"
                positionActuelle1={this.state.player[0].positionActuelle}
              ></SmallBox>
              <SmallBox
                id="61"
                color="yellow"
                positionActuelle1={this.state.player[0].positionActuelle}
              ></SmallBox>
              <SmallBox
                id="40"
                color="white"
                positionActuelle1={this.state.player[0].positionActuelle}
                positionActuelle2={this.state.player[1].positionActuelle}
                positionActuelle3={this.state.player[2].positionActuelle}
                positionActuelle4={this.state.player[3].positionActuelle}
              >
              </SmallBox>
              <SmallBox
                id="39"
                color="white"
                positionActuelle1={this.state.player[0].positionActuelle}
                positionActuelle2={this.state.player[1].positionActuelle}
                positionActuelle3={this.state.player[2].positionActuelle}
                positionActuelle4={this.state.player[3].positionActuelle}
              >
              </SmallBox>
              <SmallBox
                id="38"
                color="white"
                positionActuelle1={this.state.player[0].positionActuelle}
                positionActuelle2={this.state.player[1].positionActuelle}
                positionActuelle3={this.state.player[2].positionActuelle}
                positionActuelle4={this.state.player[3].positionActuelle}
              >
              </SmallBox>
              <SmallBox
                id="37"
                color="white"
                positionActuelle1={this.state.player[0].positionActuelle}
                positionActuelle2={this.state.player[1].positionActuelle}
                positionActuelle3={this.state.player[2].positionActuelle}
                positionActuelle4={this.state.player[3].positionActuelle}
              >
              </SmallBox>
              <SmallBox
                id="36"
                color="white"
                positionActuelle1={this.state.player[0].positionActuelle}
                positionActuelle2={this.state.player[1].positionActuelle}
                positionActuelle3={this.state.player[2].positionActuelle}
                positionActuelle4={this.state.player[3].positionActuelle}
              >
              </SmallBox>
              <SmallBox
                id="35"
                color="white"
                positionActuelle1={this.state.player[0].positionActuelle}
                positionActuelle2={this.state.player[1].positionActuelle}
                positionActuelle3={this.state.player[2].positionActuelle}
                positionActuelle4={this.state.player[3].positionActuelle}
              >
              </SmallBox>
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
              <SmallBox id="7"
                color="white"
                positionActuelle1={this.state.player[0].positionActuelle}
                positionActuelle2={this.state.player[1].positionActuelle}
                positionActuelle3={this.state.player[2].positionActuelle}
                positionActuelle4={this.state.player[3].positionActuelle}
              ></SmallBox>
              <SmallBox
                id="8"
                color="white"
                positionActuelle1={this.state.player[0].positionActuelle}
                positionActuelle2={this.state.player[1].positionActuelle}
                positionActuelle3={this.state.player[2].positionActuelle}
                positionActuelle4={this.state.player[3].positionActuelle}
              ></SmallBox>
              <SmallBox
                id="9"
                color="white"
                positionActuelle1={this.state.player[0].positionActuelle}
                positionActuelle2={this.state.player[1].positionActuelle}
                positionActuelle3={this.state.player[2].positionActuelle}
                positionActuelle4={this.state.player[3].positionActuelle}
              ></SmallBox>
              <SmallBox
                id="10"
                color="white"
                positionActuelle1={this.state.player[0].positionActuelle}
                positionActuelle2={this.state.player[1].positionActuelle}
                positionActuelle3={this.state.player[2].positionActuelle}
                positionActuelle4={this.state.player[3].positionActuelle}
              ></SmallBox>
              <SmallBox
                id="11"
                color="white"
                positionActuelle1={this.state.player[0].positionActuelle}
                positionActuelle2={this.state.player[1].positionActuelle}
                positionActuelle3={this.state.player[2].positionActuelle}
                positionActuelle4={this.state.player[3].positionActuelle}
              ></SmallBox>
              <SmallBox
                id="12"
                color="white"
                positionActuelle1={this.state.player[0].positionActuelle}
                positionActuelle2={this.state.player[1].positionActuelle}
                positionActuelle3={this.state.player[2].positionActuelle}
                positionActuelle4={this.state.player[3].positionActuelle}
              ></SmallBox>
              <SmallBox
                id="61"
                color="red"
                positionActuelle3={this.state.player[2].positionActuelle}
              ></SmallBox>
              <SmallBox
                id="60"
                color="red"
                positionActuelle3={this.state.player[2].positionActuelle}
              ></SmallBox>
              <SmallBox
                id="59"
                color="red"
                positionActuelle3={this.state.player[2].positionActuelle}
              ></SmallBox>
              <SmallBox
                id="58"
                color="red"
                positionActuelle3={this.state.player[2].positionActuelle}
              ></SmallBox>
              <SmallBox
                id="57"
                color="red"
                positionActuelle3={this.state.player[2].positionActuelle}
              ></SmallBox>
              <SmallBox
                id="13"
                color="white"
                positionActuelle1={this.state.player[0].positionActuelle}
                positionActuelle2={this.state.player[1].positionActuelle}
                positionActuelle3={this.state.player[2].positionActuelle}
                positionActuelle4={this.state.player[3].positionActuelle}
              ></SmallBox> { /*fin joueur rouge*/}
              <SmallBox
                id="19"
                color="white"
                positionActuelle1={this.state.player[0].positionActuelle}
                positionActuelle2={this.state.player[1].positionActuelle}
                positionActuelle3={this.state.player[2].positionActuelle}
                positionActuelle4={this.state.player[3].positionActuelle}
              ></SmallBox>
              <SmallBox
                id="18"
                color="white"
                positionActuelle1={this.state.player[0].positionActuelle}
                positionActuelle2={this.state.player[1].positionActuelle}
                positionActuelle3={this.state.player[2].positionActuelle}
                positionActuelle4={this.state.player[3].positionActuelle}
              ></SmallBox>
              <SmallBox
                id="17"
                color="white"
                positionActuelle1={this.state.player[0].positionActuelle}
                positionActuelle2={this.state.player[1].positionActuelle}
                positionActuelle3={this.state.player[2].positionActuelle}
                positionActuelle4={this.state.player[3].positionActuelle}
              ></SmallBox>
              <SmallBox
                id="16"
                color="white"
                positionActuelle1={this.state.player[0].positionActuelle}
                positionActuelle2={this.state.player[1].positionActuelle}
                positionActuelle3={this.state.player[2].positionActuelle}
                positionActuelle4={this.state.player[3].positionActuelle}
              ></SmallBox>
              <SmallBox /*départ joueur rouge*/
                id="15"
                color="red"
                positionActuelle1={this.state.player[0].positionActuelle}
                positionActuelle2={this.state.player[1].positionActuelle}
                positionActuelle3={this.state.player[2].positionActuelle}
                positionActuelle4={this.state.player[3].positionActuelle}
              ></SmallBox>
              <SmallBox
                id="14"
                color="white"
                positionActuelle1={this.state.player[0].positionActuelle}
                positionActuelle2={this.state.player[1].positionActuelle}
                positionActuelle4={this.state.player[3].positionActuelle}
              ></SmallBox>
            </div>
            {/* Blue Box */}
            <BigBox row={3} column={1} color="blue">
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
              <SmallBox
                id="33"
                color="white"
                positionActuelle1={this.state.player[0].positionActuelle}
                positionActuelle2={this.state.player[1].positionActuelle}
                positionActuelle3={this.state.player[2].positionActuelle}
                positionActuelle4={this.state.player[3].positionActuelle}
              ></SmallBox>
              <SmallBox
                id="61"
                color="blue"
                positionActuelle4={this.state.player[3].positionActuelle}
              ></SmallBox>
              <SmallBox
                id="21"
                color="white"
                positionActuelle1={this.state.player[0].positionActuelle}
                positionActuelle2={this.state.player[1].positionActuelle}
                positionActuelle3={this.state.player[2].positionActuelle}
                positionActuelle4={this.state.player[3].positionActuelle}
              ></SmallBox>
              <SmallBox
                id="32"
                color="white"
                positionActuelle1={this.state.player[0].positionActuelle}
                positionActuelle2={this.state.player[1].positionActuelle}
                positionActuelle3={this.state.player[2].positionActuelle}
                positionActuelle4={this.state.player[3].positionActuelle}
              ></SmallBox>
              <SmallBox
                id="60"
                color="blue"
                positionActuelle4={this.state.player[3].positionActuelle}
              ></SmallBox>
              <SmallBox
                id="22"
                color="white"
                positionActuelle1={this.state.player[0].positionActuelle}
                positionActuelle2={this.state.player[1].positionActuelle}
                positionActuelle3={this.state.player[2].positionActuelle}
                positionActuelle4={this.state.player[3].positionActuelle}
              ></SmallBox>
              <SmallBox
                id="31"
                color="white"
                positionActuelle1={this.state.player[0].positionActuelle}
                positionActuelle2={this.state.player[1].positionActuelle}
                positionActuelle3={this.state.player[2].positionActuelle}
                positionActuelle4={this.state.player[3].positionActuelle}
              ></SmallBox>
              <SmallBox
                id="59"
                color="blue"
                positionActuelle4={this.state.player[3].positionActuelle}
              ></SmallBox>
              <SmallBox
                id="23"
                color="white"
                positionActuelle1={this.state.player[0].positionActuelle}
                positionActuelle2={this.state.player[1].positionActuelle}
                positionActuelle3={this.state.player[2].positionActuelle}
                positionActuelle4={this.state.player[3].positionActuelle}
              ></SmallBox>
              <SmallBox
                id="30"
                color="white"
                positionActuelle1={this.state.player[0].positionActuelle}
                positionActuelle2={this.state.player[1].positionActuelle}
                positionActuelle3={this.state.player[2].positionActuelle}
                positionActuelle4={this.state.player[3].positionActuelle}
                ></SmallBox>
              <SmallBox 
                id="58" 
                color="blue"
                positionActuelle4={this.state.player[3].positionActuelle}
              ></SmallBox>
              <SmallBox
                id="24"
                color="white"
                positionActuelle1={this.state.player[0].positionActuelle}
                positionActuelle2={this.state.player[1].positionActuelle}
                positionActuelle3={this.state.player[2].positionActuelle}
                positionActuelle4={this.state.player[3].positionActuelle}
              ></SmallBox>
              <SmallBox
                id="29"
                color="blue"
                positionActuelle1={this.state.player[0].positionActuelle}
                positionActuelle2={this.state.player[1].positionActuelle}
                positionActuelle3={this.state.player[2].positionActuelle}
                positionActuelle4={this.state.player[3].positionActuelle}
              ></SmallBox> { /* départ joueur bleu*/}
              <SmallBox
                id="57"
                color="blue"
                positionActuelle4={this.state.player[3].positionActuelle}
              ></SmallBox>
              <SmallBox
                id="25"
                color="white"
                positionActuelle1={this.state.player[0].positionActuelle}
                positionActuelle2={this.state.player[1].positionActuelle}
                positionActuelle3={this.state.player[2].positionActuelle}
                positionActuelle4={this.state.player[3].positionActuelle}
              ></SmallBox>
              <SmallBox
                id="28"
                color="white"
                positionActuelle1={this.state.player[0].positionActuelle}
                positionActuelle2={this.state.player[1].positionActuelle}
                positionActuelle3={this.state.player[2].positionActuelle}
              ></SmallBox>
              <SmallBox
                id="27"
                color="white"
                positionActuelle1={this.state.player[0].positionActuelle}
                positionActuelle2={this.state.player[1].positionActuelle}
                positionActuelle3={this.state.player[2].positionActuelle}
                positionActuelle4={this.state.player[3].positionActuelle}
              ></SmallBox> { /* fin joueur bleu}*/}
              <SmallBox
                id="26"
                color="white"
                positionActuelle1={this.state.player[0].positionActuelle}
                positionActuelle2={this.state.player[1].positionActuelle}
                positionActuelle3={this.state.player[2].positionActuelle}
                positionActuelle4={this.state.player[3].positionActuelle}
              ></SmallBox>
            </div>
            {/* Red Box */}
            <BigBox row={3} column={3} color="red">
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
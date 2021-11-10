import React, { Component } from 'react';
import BigBox from './components/BigBox';
import SmallBox from './components/Smallbox';
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from './components/Button';


class App extends Component {
  constructor(){
    super()
    this.state = {
      counter: 0,
      player: [
        { 
          id : 0,
          name : "Player 1",
          color : "yellow",
          positionInitiale : 43,
          positionActuelle : 43,
          positionFinale1: 56
        },
        {
          id : 1,
          name : "Player 2",
          color : "red",
          positionInitiale : 0,
          positionActuelle : 6
        }
      ]
     
    }
    this.handlePlayerMove= this.handlePlayerMove.bind(this)
    this.handleCounter=this.handleCounter.bind(this)

  }
  handleCounter=()=>{
    let checkCounter = this.state.counter
    if (checkCounter >= 1 ){
      checkCounter = 0
      this.setState({counter: checkCounter})
    }
    
   }
  handlePlayerMove=()=>{           //e=dice//
    let playerIndex = this.state.counter
    console.log("index player", playerIndex)
    const playersCloned = [...this.state.player]
    playersCloned[playerIndex].positionActuelle += 6
    console.log(" joueur modifir => ",playersCloned[playerIndex])

    this.setState({player: playersCloned})
    this.handleCollision(playerIndex)
    this.setState({counter:  this.state.counter === 0 ? 1 : 0})
    // this.handleCounter()
  }
  handleCollision=(playerCurrentPosition)=>{
    const secondPlayer = playerCurrentPosition === 0 ? 1 : 0;
    const playersCloned = [...this.state.player]
    if ( playersCloned[playerCurrentPosition].positionActuelle === playersCloned[secondPlayer].positionActuelle){
      playersCloned[secondPlayer].positionActuelle = playersCloned[secondPlayer].positionInitiale
      this.setState({player : playersCloned})
    }
  }

  handleDice() {

    if (this.state.dice === 6) {
      const playersCloned = [...this.state.player]
      playersCloned[0].isActive = true

      this.setState({
        player: playersCloned
      })
    }
  }



  render() {

    console.log("counter", this.state.counter)

    console.log("state player => " ,this.state.player)
    
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
            <button onClick={this.handlePlayerMove}>test</button>
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
                <SmallBox id="48" color="black"></SmallBox>
                <SmallBox id="62" color="green"></SmallBox>
                <SmallBox id="6" color="black"></SmallBox>
                <SmallBox id="62" color="yellow"></SmallBox>
                <SmallBox id="63" color="black"></SmallBox>
                <SmallBox id="62" color="red"></SmallBox>
                <SmallBox id="34" color="black"></SmallBox>
                <SmallBox id="62" color="blue"></SmallBox>
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
                <SmallBox id="54"color="white"></SmallBox>
                <SmallBox id="55" color="white"></SmallBox>{/*fin joueur vert*/}
                <SmallBox id="56" color="white"></SmallBox>
                <SmallBox id="53" color="white"></SmallBox>
                <SmallBox id="57" color="green"></SmallBox>
                <SmallBox id="1" color="green" ></SmallBox> {/* Départ joueur vert*/}
                <SmallBox id="52" color="white"></SmallBox>
                <SmallBox id="58" color="green"></SmallBox>
                <SmallBox id="2" color="white"></SmallBox>
                <SmallBox id="51" color="white"></SmallBox>
                <SmallBox id="59" color="green"></SmallBox>
                <SmallBox id="3" color="white"></SmallBox>
                <SmallBox id="50" color="white"></SmallBox>
                <SmallBox id="60" color="green"></SmallBox>
                <SmallBox id="4" color="white"></SmallBox>
                <SmallBox id="49" color="white" positionActuelle={this.state.player[0].positionActuelle}></SmallBox>
                <SmallBox id="61" color="green"></SmallBox>
                <SmallBox id="5" color="white"></SmallBox>
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
                <SmallBox id="42" color="white"></SmallBox>
                <SmallBox id="43" color="yellow" positionActuelle={this.state.player[0].positionActuelle}></SmallBox> {/* départ joueur jaune*/}
                <SmallBox id="44" color="white"></SmallBox>
                <SmallBox id="45" color="white"></SmallBox>
                <SmallBox id="46" color="white"></SmallBox>
                <SmallBox id="47" color="white"></SmallBox>
                <SmallBox id="41" color="white"></SmallBox> {/*fin joueur jaune*/}
                <SmallBox id="57" color="yellow"></SmallBox>
                <SmallBox id="58" color="yellow"></SmallBox>
                <SmallBox id="59" color="yellow"></SmallBox>
                <SmallBox id="60" color="yellow"></SmallBox>
                <SmallBox id="61" color="yellow"></SmallBox>
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
                <SmallBox id="7" color="white"></SmallBox>
                <SmallBox id="8" color="white"></SmallBox>
                <SmallBox id="9" color="white"></SmallBox>
                <SmallBox id="10" color="white"></SmallBox>
                <SmallBox id="11" color="white"></SmallBox>
                <SmallBox id="12" color="white"></SmallBox>
                <SmallBox id="61" color="red"></SmallBox>
                <SmallBox id="60" color="red"></SmallBox>
                <SmallBox id="59" color="red"></SmallBox>
                <SmallBox id="58" color="red"></SmallBox>
                <SmallBox id="57" color="red"></SmallBox>
                <SmallBox id="13" color="white"></SmallBox> { /*fin joueur rouge*/ }
                <SmallBox id="19" color="white"></SmallBox>
                <SmallBox id="18" color="white"></SmallBox>
                <SmallBox id="17" color="white"></SmallBox>
                <SmallBox id="16" color="white"></SmallBox>
                <SmallBox id="15" color="red"></SmallBox> {/*départ joueur rouge*/}
                <SmallBox id="14" color="white"></SmallBox>
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
                <SmallBox id="33" color="white"></SmallBox>
                <SmallBox id="61" color="blue"></SmallBox>
                <SmallBox id="21" color="white"></SmallBox>
                <SmallBox id="32" color="white"></SmallBox>
                <SmallBox id="60" color="blue"></SmallBox>
                <SmallBox id="22" color="white"></SmallBox>
                <SmallBox id="31" color="white"></SmallBox>
                <SmallBox id="59" color="blue"></SmallBox>
                <SmallBox id="23" color="white"></SmallBox>
                <SmallBox id="30" color="white"></SmallBox>
                <SmallBox id="58" color="blue"></SmallBox>
                <SmallBox id="24" color="white"></SmallBox>
                <SmallBox id="29" color="blue"></SmallBox> { /* départ joueur bleu*/}
                <SmallBox id="57" color="blue"></SmallBox>
                <SmallBox id="25" color="white"></SmallBox>
                <SmallBox id="28" color="white"></SmallBox>
                <SmallBox id="27" color="white"></SmallBox> { /* fin joueur bleu}*/}
                <SmallBox id="26" color="white"></SmallBox>
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
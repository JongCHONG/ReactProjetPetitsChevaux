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
          color : "blue",
          positionInitiale : 0,
          positionActuelle : 0,
          positionFinale: 56
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

  }
  handlePlayerMove=()=>{           //e=dice//
    const playersCloned = [...this.state.player]
    playersCloned[0].positionActuelle += 6
    this.setState({player: playersCloned})
    this.handleCollision(playersCloned[0].positionActuelle)
  }
  handleCollision=(position)=>{
    const playersCloned = [...this.state.player]
    if ( playersCloned[1].positionActuelle === position){
      playersCloned[1].positionActuelle = playersCloned[1].positionInitiale
      this.setState({player : playersCloned})
    }

  }

  render() {

    console.log("state player => " ,this.state.player)
    return (
      <>

          <div>
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
                <SmallBox  id="" color="white"></SmallBox>
                <SmallBox id="" color="white"></SmallBox>
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
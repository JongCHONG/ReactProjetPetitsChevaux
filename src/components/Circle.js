import React, { Component } from 'react'
// import horseYellow from '../img/horseYellow.svg'
// import horseGreen from '../img/horseGreen'
// import horseRed from '../img/horseRed'
// import horseBlue from ' ../img/'

class Circle extends Component {
    render() {
        // let yellow = require ("../img/horseYellow.svg")
        return(
            <>
            {/* {this.props.counter === 0 && <img src = {yellow}/>} */}
            {/* {this.props.counter === 1 && <img url = "../img/horseRed.svg"/>}
            {this.props.counter === 2 && <img url = "../img/horseGreen.svg"/>}
            {this.props.counter === 3 && <img url = "../img/horseBlue.svg"/>} */}

            <img className="pawn" src={this.props.player} alt="pions" />
            </>
        )
    }
}
export default Circle


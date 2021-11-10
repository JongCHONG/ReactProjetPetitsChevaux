import React, { Component } from 'react';


class Dice extends Component {




    render() {
        const { handleClick, image, randomDice } = this.props
        const random = randomDice
        var diceClassName = ""
        if (this.props.random === 1) {
            diceClassName = "firstDice"
        } else if (this.props.random === 2) {
            diceClassName = "secondDice"
        } else if (this.props.random === 3) {
            diceClassName = "thirdDice"
        } else if (this.props.random === 4) {
            diceClassName = "fourthDice"
        } else if (this.props.random === 5) {
            diceClassName = "fifthDice"
        } else if (this.props.random === 6) {
            diceClassName = "sixthDice"
        } else {
            diceClassName = "defaultDice"
        }
        return (
            <div className="down">
                <div className={diceClassName} onClick={handleClick}></div>
                
            </div >
        );
    }
}

export default Dice;
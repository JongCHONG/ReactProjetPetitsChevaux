import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiceOne } from '@fortawesome/free-solid-svg-icons'
import { faDiceTwo } from '@fortawesome/free-solid-svg-icons'
import { faDiceThree } from '@fortawesome/free-solid-svg-icons'
import { faDiceFour } from '@fortawesome/free-solid-svg-icons'
import { faDiceFive } from '@fortawesome/free-solid-svg-icons'
import { faDiceSix } from '@fortawesome/free-solid-svg-icons'

class Dice extends Component {
    render() {
        const { handleClick, playerIndex } = this.props
        var diceClassName = ""
        var dicefontawesome = ""
        if (this.props.random === 1) {
            if (playerIndex === 0) {
                dicefontawesome = <FontAwesomeIcon icon={faDiceOne} size="4x" color='#ffd700'/>
            }
            if (playerIndex === 1) {
                dicefontawesome = <FontAwesomeIcon icon={faDiceOne} size="4x" color='green'/>
            }
            if (playerIndex === 2) {
                dicefontawesome = <FontAwesomeIcon icon={faDiceOne} size="4x" color='red'/>
            }
            if (playerIndex === 3) {
                dicefontawesome = <FontAwesomeIcon icon={faDiceOne} size="4x" color='blue'/>
            }
        } else if (this.props.random === 2) {
            if (playerIndex === 0) {
                dicefontawesome = <FontAwesomeIcon icon={faDiceTwo} size="4x" color='#ffd700'/>
            }
            if (playerIndex === 1) {
                dicefontawesome = <FontAwesomeIcon icon={faDiceTwo} size="4x" color='green'/>
            }
            if (playerIndex === 2) {
                dicefontawesome = <FontAwesomeIcon icon={faDiceTwo} size="4x" color='red'/>
            }
            if (playerIndex === 3) {
                dicefontawesome = <FontAwesomeIcon icon={faDiceTwo} size="4x" color='blue'/>
            }
        } else if (this.props.random === 3) {
            if (playerIndex === 0) {
                dicefontawesome = <FontAwesomeIcon icon={faDiceThree} size="4x" color='#ffd700'/>
            }
            if (playerIndex === 1) {
                dicefontawesome = <FontAwesomeIcon icon={faDiceThree} size="4x" color='green'/>
            }
            if (playerIndex === 2) {
                dicefontawesome = <FontAwesomeIcon icon={faDiceThree} size="4x" color='red'/>
            }
            if (playerIndex === 3) {
                dicefontawesome = <FontAwesomeIcon icon={faDiceThree} size="4x" color='blue'/>
            }
        } else if (this.props.random === 4) {
            if (playerIndex === 0) {
                dicefontawesome = <FontAwesomeIcon icon={faDiceFour} size="4x" color='#ffd700'/>
            }
            if (playerIndex === 1) {
                dicefontawesome = <FontAwesomeIcon icon={faDiceFour} size="4x" color='green'/>
            }
            if (playerIndex === 2) {
                dicefontawesome = <FontAwesomeIcon icon={faDiceFour} size="4x" color='red'/>
            }
            if (playerIndex === 3) {
                dicefontawesome = <FontAwesomeIcon icon={faDiceFour} size="4x" color='blue'/>
            }
        } else if (this.props.random === 5) {
            if (playerIndex === 0) {
                dicefontawesome = <FontAwesomeIcon icon={faDiceFive} size="4x" color='#ffd700'/>
            }
            if (playerIndex === 1) {
                dicefontawesome = <FontAwesomeIcon icon={faDiceFive} size="4x" color='green'/>
            }
            if (playerIndex === 2) {
                dicefontawesome = <FontAwesomeIcon icon={faDiceFive} size="4x" color='red'/>
            }
            if (playerIndex === 3) {
                dicefontawesome = <FontAwesomeIcon icon={faDiceFive} size="4x" color='blue'/>
            }
        } else if (this.props.random === 6) {
            if (playerIndex === 0) {
                dicefontawesome = <FontAwesomeIcon icon={faDiceSix} size="4x" color='#ffd700'/>
            }
            if (playerIndex === 1) {
                dicefontawesome = <FontAwesomeIcon icon={faDiceSix} size="4x" color='green'/>
            }
            if (playerIndex === 2) {
                dicefontawesome = <FontAwesomeIcon icon={faDiceSix} size="4x" color='red'/>
            }
            if (playerIndex === 3) {
                dicefontawesome = <FontAwesomeIcon icon={faDiceSix} size="4x" color='blue'/>
            }
        } else {
            diceClassName = "defaultDice"
        }
        return (
            <div>
                <div className={diceClassName} onClick={handleClick}>
                    {dicefontawesome}
                </div>
                
            </div >
        );
    }
}

export default Dice;
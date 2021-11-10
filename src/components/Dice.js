import React, { Component } from 'react';
import firstImage from "../img/dicefive.png"
import defaultImage from "../img/dices.png"

class Dice extends Component {

    render() {
        const { handleClick, image } = this.props
        return (
            <div className="down" onClick={handleClick}>
                <img src={defaultImage} alt="dé"  />
            </div>
        );
    }
}

export default Dice;
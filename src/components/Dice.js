import React, { Component } from 'react';

class Dice extends Component {

    render() {
        const { handleClick, image } = this.props
        return (
            <div className="down">
                <button
                    className="dice"
                    type="button"
                    onClick={handleClick}
                    image={image}
                >
                    <img src={image} alt="image du dé"/>
                </button>
            </div>
        );
    }
}

export default Dice;
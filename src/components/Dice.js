import React, { Component } from 'react';

class Dice extends Component {

    render() {
        return (
            <div>
                <button
                    type="button"
                    onClick={this.props.handleClick}
                    image = {this.props.image}
                >
                </button>
            </div >
        );
    }
}

export default Dice;
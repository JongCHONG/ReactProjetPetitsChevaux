import React, { Component } from 'react';

class Square extends Component {
    render() {
        return (
            <div>
                <div className={this.props.className}></div>
            </div>
        );
    }
}

export default Square;
import React, { Component } from 'react';

class Square extends Component {
    render() {
        return (
            <>
                <div className={this.props.className}></div>
            </>
        );
    }
}

export default Square;
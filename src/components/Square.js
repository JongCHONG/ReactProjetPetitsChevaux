import React, { Component } from 'react'
import Circle from './Circle';

class Square extends Component {
    render() {
        return (
            <>
                <div className="col-5">
                    {this.props.className === "top-left" &&
                        <div className="big-square d-flex">
                            <div className="top-left"></div>
                            <Circle />
                         </div>
                    }
                    {this.props.className === "top-right" && 
                        <div className="big-square d-flex justify-content-end ">
                            <div className="top-right"></div>
                        </div>
                    }
                    {this.props.className === "bottom-left" &&
                        <div className="big-square d-flex align-items-end">
                            <div className="bottom-left"></div>
                        </div>
                    }
                    {this.props.className === "bottom-right" && 
                        <div className="big-square d-flex justify-content-end align-items-end">
                            <div className="bottom-right"></div>
                        </div>
                    }
                </div>
            </>
        );
    }
}

export default Square;

import React from "react"
import Circle from "./Circle";

class SmallBox extends React.Component {
  render() {
    const { positionActuelle, column, color, id } = this.props
    return (
      <div
        style={{
          gridColumn: `${column}`,
          width: "50px",
          height: "50px",
          backgroundColor: `${color}`,
          padding: "10px",
          border: "1px solid black",
          id: `${id}`,
        }}
      > 
        {Number(id) === positionActuelle && <Circle />}
      </div>
    )
  }
}
export default SmallBox;

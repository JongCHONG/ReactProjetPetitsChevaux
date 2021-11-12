import React from "react"
import Circle from "./Circle";

class SmallBox extends React.Component {
  render() {
    const { positionActuelle1, positionActuelle2, positionActuelle3, positionActuelle4, column, color, id } = this.props
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
        {Number(id) === positionActuelle1 && <Circle player="1"/>}
        {Number(id) === positionActuelle2 && <Circle player="2"/>}
        {Number(id) === positionActuelle3 && <Circle player="3"/>}
        {Number(id) === positionActuelle4 && <Circle player="4"/>}
      </div>
    )
  }
}
export default SmallBox;

import React from "react";

class BigBox extends React.Component {
  render() {
    return (
      <div
        style={{
          display: "grid",
          justifyContent: "space-between",
          alignContent: "center,",
          gridRow: `${this.props.row}`,
          gridColumn: `${this.props.column}`,
          width: "300px",
          height: "300px",
          border: `3px solid black`,
          padding: "40px",
          backgroundColor: `${this.props.color}`,
        }}
      >
        {this.props.children}
      </div>
    );
  }
}
export default BigBox;
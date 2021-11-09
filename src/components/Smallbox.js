import React from "react";

class SmallBox extends React.Component {
  
  render() {console.log(this.props)
    return (
      <div
        style={{
          gridColumn: `${this.props.column}`,
          width: "50px",
          height: "50px",
          backgroundColor: `${this.props.color}`,
          padding: "10px",
          border: "1px solid black",
          id: `${this.props.id}`,
        }}
      >
      </div>
    );
  }
}
export default SmallBox;

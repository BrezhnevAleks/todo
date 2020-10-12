import React from "react";

class ClearButton extends React.Component {
  render() {
    return (
      <button
        style={
          this.props.items.filter((item) => !item.flag).length
            ? { opacity: "1" }
            : { opacity: "0" }
        }
        onClick={(e) => this.props.handleComplited(e)}
      >
        Clear completed [{this.props.items.filter((item) => !item.flag).length}]
      </button>
    );
  }
}

export default ClearButton;

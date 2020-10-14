import React from "react";

class ClearButton extends React.Component {
  render() {
    if (this.props.items.filter((item) => item.flag).length) {
      return (
        <button onClick={(e) => this.props.handleCompleted(e)}>
          Clear completed [{this.props.items.filter((item) => item.flag).length}
          ]
        </button>
      );
    }
    return null;
  }
}

export default ClearButton;

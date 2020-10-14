import React from "react";

class ClearButton extends React.Component {
  render() {
    let { items } = this.props;
    return (
      <button onClick={(e) => this.props.handleCompleted(e)}>
        Clear completed [{items.filter((item) => item.flag).length}]
      </button>
    );
  }
}

export default ClearButton;

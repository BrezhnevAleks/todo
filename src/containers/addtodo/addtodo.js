import React from "react";
import connect from "./connect";
import "./style.css";

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    let { text } = this.state;
    this.props.addTodo(text);
    this.setState({ text: "" });
  };

  handleChangeAll = (e) => {
    e.preventDefault();
    this.props.toggleAll();
  };

  render() {
    const { allin, items } = this.props;
    const { text } = this.state;

    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <div
          className="choose-all"
          onClick={this.handleChangeAll}
          style={allin ? { color: "#737373" } : { color: "" }}
        >
          <span
            style={items.length ? { color: "" } : { color: "white" }}
            className="marker"
          >
            ❯
          </span>
        </div>
        <input
          placeholder="What needs to be done?"
          id="new-todo"
          className="new-todo"
          onChange={(e) => this.handleChange(e)}
          value={text}
        />
      </form>
    );
  }
}

export default connect(AddTodo);

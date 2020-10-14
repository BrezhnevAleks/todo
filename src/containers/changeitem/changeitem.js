import React from "react";
import connect from "./connect";
import "./style.css";

class ChangeItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.item.text,
    };
  }

  handleNewChange = (e) => {
    e.preventDefault();
    this.setState({ text: e.target.value });
  };

  handleNewSubmit = (e, index) => {
    e.preventDefault();
    const { text } = this.state;
    this.props.createNewChange(index, text);
    this.props.pickNewChange(index);
  };

  handleNewBlur = (e) => {
    e.preventDefault();
    const { item } = this.props;
    this.setState({ text: item.text });
  };

  render() {
    const { item } = this.props;
    const { text } = this.state;

    if (item.formDisplay) {
      return (
        <div className="change-item">
          <form
            onSubmit={(e) => this.handleNewSubmit(e, item.id)}
            onKeyDown={(e) => {
              if (e.keyCode === 27) {
                this.props.handleNewPick(e, item.id);
                this.setState({ text: item.text });
              }
            }}
          >
            <input
              onChange={(e) => this.handleNewChange(e)}
              onBlur={(e) => this.handleNewBlur(e)}
              type="text"
              value={text}
              autoFocus={true}
            />
          </form>
        </div>
      );
    }
    return null;
  }
}

export default connect(ChangeItem);

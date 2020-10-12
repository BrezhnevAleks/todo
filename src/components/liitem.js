import React from "react";

class LiItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li
        key={this.key}
        text={this.text}
        style={{ display: this.props.items[this.props.index].display }}
        className={
          !!this.props.items[this.props.index].flag ? "active" : "complited"
        }
      >
        <input
          className="checkbox"
          type="checkbox"
          style={
            !this.props.items[this.props.index].formDisplay
              ? { display: "" }
              : { display: "none" }
          }
          checked={!this.props.items[this.props.index].flag}
          onChange={(e) => this.props.flagChange(e, this.props.index)}
        />
        <div
          className="item"
          onDoubleClick={(e) => this.props.handleNewText(e, this.props.index)}
          onClick={(e) => this.props.handleNewTextDeactive(e)}
        >
          <form>
            <label className="text">{this.props.text}</label>
          </form>
          <button
            onClick={(e) => this.props.deleteElement(e, this.props.index)}
            className="destroy"
          ></button>
        </div>

        <div className="change-item">
          <form
            onSubmit={(e) => this.props.handleNewSubmit(e, this.props.index)}
            onKeyDown={(e) => {
              if (e.keyCode === 27)
                this.props.handleNewText(e, this.props.index);
            }}
            style={
              this.props.items[this.props.index].formDisplay
                ? { display: "block" }
                : { display: "none" }
            }
          >
            <input
              onSubmit={(e) => this.props.handleNewText(e, this.props.index)}
              onChange={(e) => this.props.handleNewChange(e, this.props.index)}
              onBlur={(e) => this.props.handleNewBlur(e, this.props.index)}
              type="text"
              value={this.props.items[this.props.index].formText}
              style={{ display: "block" }}
              ref={(ref) => (this.props.refArray[this.props.index] = ref)}
            />
          </form>
        </div>
      </li>
    );
  }
}

export default LiItem;

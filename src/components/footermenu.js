import React from "react";

class FooterMenu extends React.Component {
  render() {
    return (
      <ul className="footer-menu">
        <button
          className={this.props.showSwitch === 1 ? "active-button" : ""}
          onClick={(e) => this.props.handleShow(e, 1)}
        >
          All
        </button>
        <button
          className={this.props.showSwitch === 2 ? "active-button" : ""}
          onClick={(e) => this.props.handleShow(e, 2)}
        >
          Active
        </button>
        <button
          className={this.props.showSwitch === 3 ? "active-button" : ""}
          onClick={(e) => this.props.handleShow(e, 3)}
        >
          Complited
        </button>
      </ul>
    );
  }
}

export default FooterMenu;

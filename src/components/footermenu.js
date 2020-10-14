import React from "react";

class FooterMenu extends React.Component {
  render() {
    return (
      <ul className="footer-menu">
        <button
          className={this.props.showFilter === 1 ? "active-button" : ""}
          onClick={(e) => this.props.handleFilter(e, 1)}
        >
          All
        </button>
        <button
          className={this.props.showFilter === 2 ? "active-button" : ""}
          onClick={(e) => this.props.handleFilter(e, 2)}
        >
          Active
        </button>
        <button
          className={this.props.showFilter === 3 ? "active-button" : ""}
          onClick={(e) => this.props.handleFilter(e, 3)}
        >
          Complited
        </button>
      </ul>
    );
  }
}

export default FooterMenu;

import React, { Component } from "react";

class Navbar extends Component {
  constructor() {
    super();
    console.log("Navbar-Costructor");
  }
  state = {};
  render() {
    console.log("NavBar-Render");
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar{" "}
          <span className="badge badge-pill badge-secodary">
            {this.props.cartCount}
          </span>
        </a>
      </nav>
    );
  }
}

export default Navbar;

import React from "react";
import "./style.scss";
import { NavLink } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <>
        <div className="topnav container">
          <NavLink to="/home" activeClassName="selected">
            home
          </NavLink>
          <NavLink to="/todo" activeClassName="selected">
            To do
          </NavLink>
          <NavLink to="/about" activeClassName="selected">
            About
          </NavLink>
          <NavLink to="/product" activeClassName="selected">
            Products
          </NavLink>
        </div>
      </>
    );
  }
}

export default Nav;

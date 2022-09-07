import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <nav className="Navigation navbar navbar-expand-md">
      <div className="container-fluid">
        <div className="navbar-brand"><NavLink className="link" to="/">Jobly</NavLink></div>
        <ul className="navbar-nav ms-auto">
          <li className="nav-item me-4"><NavLink className="link" to="/companies">Companies</NavLink></li>
          <li className="nav-item me-4"><NavLink className="link" to="/jobs">Jobs</NavLink></li>
        </ul>
      </div>
    </nav>
  );

}

export default Navigation;
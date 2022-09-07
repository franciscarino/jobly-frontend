import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav style={{backgroundColor: 'lightblue'}}>
    <ul>
      <li><NavLink to="/">Jobly</NavLink></li>
      <li><NavLink to="/companies">Companies</NavLink></li>
      <li><NavLink to="/jobs">Jobs</NavLink></li>
    </ul>
    </nav>
  );

}

export default Navigation;
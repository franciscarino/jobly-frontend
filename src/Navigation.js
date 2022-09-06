import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <ul>
      <li><NavLink to="/">Jobly</NavLink></li>
      <li><NavLink to="/companies">Companies</NavLink></li>
      <li><NavLink to="/jobs">Jobs</NavLink></li>
    </ul>
  );

}

export default Navigation;
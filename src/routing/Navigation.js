import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
import { useContext } from "react";
import userContext from "../userContext";

function Navigation({ logout }) {

  //TODO: fix destructuring?
  const user = useContext(userContext);

  return (
    <nav className="Navigation navbar navbar-expand-md">
      <div className="container-fluid">
        <div className="navbar-brand"><NavLink className="link" to="/">Jobly</NavLink></div>
        {user === null &&
          <ul className="navbar-nav ms-auto">
            <li className="nav-item me-4"><NavLink className="link" to="/signup">Signup</NavLink></li>
            <li className="nav-item me-4"><NavLink className="link" to="/login">Login</NavLink></li>
          </ul>
        }
        {user !== null &&
          <ul className="navbar-nav ms-auto">
            <li className="nav-item me-4"><NavLink className="link" to="/companies">Companies</NavLink></li>
            <li className="nav-item me-4"><NavLink className="link" to="/jobs">Jobs</NavLink></li>
            <li className="nav-item me-4"><NavLink className="link" to="/profile">Profile</NavLink></li>
            <li className="nav-item me-4"><NavLink className="link" to="/" onClick={logout}> Log out {user.username}</NavLink></li>
          </ul>
        }
      </div>
    </nav>
  );

}

export default Navigation;
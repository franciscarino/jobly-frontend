import { useState } from "react";
import JoblyApi from "../api";
import './SignupForm.css';
import { useNavigate } from "react-router-dom";

const defaultInitialFormData = {
  username: "",
  password: "",
  firstName: "",
  lastName: "",
  email: ""
};


/** Signup Form
 *
 * Accept profile data, make post request, return token
 *
 * Props: updateToken
 * 
 * State: formData
 */

function SignupForm({ updateToken }) {
  const [formData, setFormData] = useState(defaultInitialFormData);
  const navigate = useNavigate();

  /** Update form input. */
  function handleChange(evt) {
    const input = evt.target;
    setFormData(formData => ({
      ...formData,
      [input.name]: input.value,
    }));
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    let response = await JoblyApi.register(formData);
    updateToken(response);
    console.log(response);
    navigate("/");
  }


  return (
    <div className="SignupForm">
      <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
        <h2 className="mb-3">Sign Up</h2>
        <div className="card">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  id="signupForm-username"
                  name="username"
                  placeholder="Username"
                  className="form-control"
                  onChange={handleChange}
                  value={formData.username}
                  aria-label="username"
                />
              </div>
              <div className="mb-3">
                <input
                  id="signupForm-password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="form-control"
                  onChange={handleChange}
                  value={formData.password}
                  aria-label="password"
                />
              </div>
              <div className="mb-3">
                <input
                  id="signupForm-firstName"
                  name="firstName"
                  placeholder="First Name"
                  className="form-control"
                  onChange={handleChange}
                  value={formData.firstName}
                  aria-label="firstName"
                />
              </div>
              <div className="mb-3">
                <input
                  id="signupForm-lastName"
                  name="lastName"
                  placeholder="Last Name"
                  className="form-control"
                  onChange={handleChange}
                  value={formData.lastName}
                  aria-label="lastName"
                />
              </div>
              <div className="mb-3">
                <input
                  id="signupForm-email"
                  name="email"
                  placeholder="Email"
                  className="form-control"
                  onChange={handleChange}
                  value={formData.email}
                  aria-label="email"
                />
              </div>
              <div className="d-grid">
                <button className="btn btn-primary" onClick={handleSubmit}>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

  );

}


export default SignupForm;

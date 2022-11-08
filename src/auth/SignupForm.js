import { useState } from "react";
import JoblyApi from "../api";
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
    <div className="row justify-content-md-center mb-3 mt-5">
      <form className="signupForm" onSubmit={handleSubmit}>
        <div className="mb-3">
          {/* <h5>Username</h5> */}
          <input
            id="signupForm-username"
            name="username"
            placeholder="Username"
            onChange={handleChange}
            value={formData.username}
            aria-label="username"
          />
        </div>
        <div className="mb-3">
          {/* <h5>Password</h5> */}
          <input
            id="signupForm-password"
            name="password"
            type="password"
            plceceholder="Password"
            onChange={handleChange}
            value={formData.password}
            aria-label="password"
          />
        </div>
        <div className="mb-3">
          {/* <h5>First Name</h5> */}
          <input
            id="signupForm-firstName"
            name="firstName"
            onChange={handleChange}
            value={formData.firstName}
            aria-label="firstName"
          />
        </div>
        <div className="mb-3">
          {/* <h5>Last Name</h5> */}
          <input
            id="signupForm-lastName"
            name="lastName"
            onChange={handleChange}
            value={formData.lastName}
            aria-label="lastName"
          />
        </div>
        <div className="mb-3">
          {/* <h5>Email</h5> */}
          <input
            id="signupForm-email"
            name="email"
            onChange={handleChange}
            value={formData.email}
            aria-label="email"
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>

  );

}


export default SignupForm;

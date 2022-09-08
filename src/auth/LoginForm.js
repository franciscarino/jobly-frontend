import { useState } from "react";
import JoblyApi from "../api";
import { useNavigate } from "react-router-dom";

const defaultInitialFormData = { username: "", password: "" };


/** Login Form
 *
 * Accept credentials, make post request, return token
 *
 * Props: updateToken
 * 
 * State:
 *  - formData
 */
function LoginForm({ updateToken }) {
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
    let response = await JoblyApi.login(formData);
    updateToken(response);
    console.log(response);
    navigate("/");
  }


  return (
    <div>
      <form className="LoginForm" onSubmit={handleSubmit}>
        <div className="mb-3">
          <h5>Username</h5>
          <input
            id="loginForm-username"
            name="username"
            // className="form-control"
            onChange={handleChange}
            value={formData.username}
            aria-label="username"
          />
        </div>
        <div className="mb-3">
          <h5>Password</h5>
          <input
            id="loginForm-password"
            name="password"
            type="password"
            // className="form-control"
            onChange={handleChange}
            value={formData.password}
            aria-label="password"
          />
        </div>
        <button>Submit</button>
      </form>
    </div>

  );

}

export default LoginForm;


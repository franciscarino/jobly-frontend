import { useState } from "react";
import JoblyApi from "../api";

const defaultInitialFormData = { username: "", password: "" };


/** Login Form
 * 
 * Accept credentials, make post request, return token
 * 
 * State:
 *  - formData
 */
function LoginForm() {
  const [formData, setFormData] = useState(defaultInitialFormData);

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
  }


  return (<></>);

}


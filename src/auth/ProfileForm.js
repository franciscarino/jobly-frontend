import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import userContext from "../userContext";
import JoblyApi from "../api";

/** Signup Form
 *
 * Accept profile data, make post request, return token
 *
 * Props: updateToken
 * 
 * State: formData
 */

//can't change username (setting on form?)

function ProfileForm({ updateProfile }) {

    const user = useContext(userContext);

    const [formData, setFormData] = useState(user);
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
        let updatedFormData = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email
        }
        updateProfile(updatedFormData);
        navigate('/')
    }


    return (
        <div>
            <form className="signupForm" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <h5>Username</h5>
                    <input
                        id="signupForm-username"
                        name="username"
                        onChange={handleChange}
                        value={formData.username}
                        aria-label="username"
                        disabled
                    />
                </div>
                <div className="mb-3">
                    <h5>First Name</h5>
                    <input
                        id="signupForm-firstName"
                        name="firstName"
                        onChange={handleChange}
                        value={formData.firstName}
                        aria-label="firstName"
                    />
                </div>
                <div className="mb-3">
                    <h5>Last Name</h5>
                    <input
                        id="signupForm-lastName"
                        name="lastName"
                        onChange={handleChange}
                        value={formData.lastName}
                        aria-label="lastName"
                    />
                </div>
                <div className="mb-3">
                    <h5>Email</h5>
                    <input
                        id="signupForm-email"
                        name="email"
                        onChange={handleChange}
                        value={formData.email}
                        aria-label="email"
                    />
                </div>
                <button>Submit</button>
            </form>
        </div>

    );

}


export default ProfileForm;

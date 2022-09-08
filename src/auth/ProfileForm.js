import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import userContext from "../userContext";
import Spinner from "../common/Spinner";

/** Profile Form
 *
 * Props: updateProfile
 * 
 * State: formData
 */


function ProfileForm({ updateProfile }) {

    const navigate = useNavigate();
    const user = useContext(userContext);

    const [formData, setFormData] = useState(user);

    //Update with user information after initial render:
    useEffect(function updateUserFormData() {
        async function updateData() {
            setFormData(user);
        }
        updateData();
    }, [user]);


    /** Update form input. */
    function handleChange(evt) {
        const input = evt.target;
        setFormData(formData => ({
            ...formData,
            [input.name]: input.value,
        }));
    }

    /** Handle form submission in parent component. */
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

    if (formData === null) return <Spinner />;

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

import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import userContext from "../userContext";
import './ProfileForm.css';
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
        };
        updateProfile(updatedFormData);
        navigate('/');
    }

    if (formData === null) return <Spinner />;

    return (
        <div className="ProfileForm col-md-6 col-lg-4 offset-md-3 offset-lg-4">
            <h2>Profile</h2>
            <div className="card">
                <div className="card-body">
                    <form className="signupForm" onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <input
                                id="signupForm-username"
                                name="username"
                                placeholder="Username"
                                className="form-control"
                                onChange={handleChange}
                                value={formData.username}
                                aria-label="username"
                                disabled
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
                        <button className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>

    );

}


export default ProfileForm;

import userContext from "../userContext";
import { useContext } from "react";
import "./Homepage.css";


/** Presentational component for homepage.
 * 
 * RoutesList -> Homepage
 */

function Homepage() {
    const user = useContext(userContext);
    return (
        <div className="homepage">
            <h1>Jobly</h1>
            <p>All the jobs in one, convenient place.</p>
            {user &&
                <h3>Welcome back, {user.firstName}!</h3>}
        </div>);
}


export default Homepage;
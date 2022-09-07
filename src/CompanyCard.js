/** Presentational component to display simple info on a company.
 * 
 * Props: { name, description, handle, logo }
 * 
 */

import { Link } from "react-router-dom";

function CompanyCard({ name, description, handle, logoUrl }) {

    //TODO: Double check company logo image render.

    return (
        <Link to={`/companies/${handle}`}>
            <div>
                <h3>{name}</h3>
                <p>{description}</p>
                {logoUrl &&
                    <img src={logoUrl} alt={handle} />
                }
            </div>
        </Link>
    );

}



export default CompanyCard;
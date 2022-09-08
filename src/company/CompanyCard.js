import { Link } from "react-router-dom";
import "./CompanyCard.css";

/** Presentational component to display simple info on a company.
 * 
 * Props: { name, description, handle, logo }
 * 
 * CompanyList -> CompanyCard
 * 
 */


function CompanyCard({ name, description, handle, logoUrl }) {

    return (
        <Link to={`/companies/${handle}`} className="CompanyCard card" >
            <div className="card-body">
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
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
                <h6 className="card-title">{name}
                    {logoUrl &&
                        <img src={logoUrl} alt={handle} className="float-end ms-5" />
                    }
                </h6>
                <p><small>{description}</small></p>
            </div>
        </Link>
    );

}



export default CompanyCard;
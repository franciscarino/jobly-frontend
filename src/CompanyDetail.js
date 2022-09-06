/** Show detail on a single company by handle.
 *   Detail is: name, description, logo, jobs
 * 
 * Props: 
 * 
 * CompanyDetail -> JobCardList -> JobCard
 */

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "./api";

function CompanyDetail() {

    const [company, setCompany] = useState({name: null, description: null});

    const handle = useParams(); // {handle: ...}

    useEffect(function renderCompanyDetails() {
        async function fetchCompany() {
            const companyResult = await JoblyApi.getCompany(handle.handle);
            setCompany(companyResult);
        }

        fetchCompany();
    }, [])

    //need to call useEffect after initial mount? 

    //TODO: CIRLCE BACK ON STEP 5 FOR JOB LIST

    return(
        <div>
            <h1>{company.name}</h1>
            <p>{company.description}</p>
            {/* JOB LIST */}
        </div>
    )

}

export default CompanyDetail;
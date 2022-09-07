/** Show detail on a single company by handle.
 *   Detail is: name, description, logo, jobs
 * 
 * Props: 
 * 
 * CompanyDetail -> JobCardList -> JobCard
 */

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "../api";
import JobCardList from "../jobs/JobCardList";

function CompanyDetail() {

    const [company, setCompany] = useState({
        isLoading: true});

    const handleParam = useParams(); // {handleParam: ...}

    useEffect(function renderCompanyDetails() {
        async function fetchCompany() {
            const companyResult = await JoblyApi.getCompany(handleParam.handle);
            setCompany({
                ...companyResult,
                isLoading: false
            });
        }

        fetchCompany();
    }, [handleParam]) // Why is this giving errors when left off?

    //return spinner component
    if (company.isLoading) return <i>Loading...</i>;

    return(
        <div>
            <h1>{company.name}</h1>
            <p>{company.description}</p>
            <JobCardList jobs={company.jobs} />
        </div>
    )

}

export default CompanyDetail;
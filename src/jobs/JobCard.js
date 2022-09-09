/** Presentational component to display info on a job.
 * 
 * Props: { title, description, handle, logo }
 * 
 * JobCardList -> JobCard
 * 
 */

function JobCard({ title, companyName, salary, equity }) {

    return (
        <div className="CompanyCard card">
            <h6>{title}</h6>
            <p>{companyName}</p>
            {salary &&
                <div><small>Salary:{salary}</small></div>}
            {equity &&
                <div><small>Equity:{equity}</small></div>}
        </div>
    );

}



export default JobCard;
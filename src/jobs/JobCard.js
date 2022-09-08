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
            <h3>{title}</h3>
            <h4>{companyName}</h4>
            {salary &&
            <h5>Salary:{salary}</h5> }
            {equity &&
            <h5>Equity:{equity}</h5> }
        </div>
    );

}



export default JobCard;
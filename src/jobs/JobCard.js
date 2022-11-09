import "./JobCard.css";

/** Presentational component to display info on a job.
 * 
 * Props: { title, description, handle, logo }
 * 
 * JobCardList -> JobCard
 * 
 */

function JobCard({ title, companyName, salary, equity }) {

    return (
        <div className="JobCard card">
            <div className="card-body">
                <h6 className="card-title">{title}</h6>
                <p>{companyName}</p>
                {salary &&
                    <div><small>Salary:{salary}</small></div>}
                {equity &&
                    <div><small>Equity:{equity}</small></div>}
            </div>
        </div >
    );

}



export default JobCard;
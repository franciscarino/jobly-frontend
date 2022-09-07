import JobCard from "./JobCard"

/** Presentational component for list of jobs 
 * 
 * Props: array of job objects
 * [{id,title,salary,equity,companyHandle,companyName}...]
 * 
 */


function JobCardList({jobs}) {

    return(jobs.map(j => <JobCard 
        title={j.title}
        companyName={j.companyName}
        salary={j.salary}
        equity={j.equity}
        key={j.id}
        />
    ))

}


export default JobCardList;
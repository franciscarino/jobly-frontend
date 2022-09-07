import { useState, useEffect } from "react";
import JoblyApi from "../api";
import SearchForm from "../common/SearchForm";
import JobCardList from "./JobCardList";

/** Render full list of jobs
 *  TODO:Add detail
 * 
 * State:
 *  - jobs
 */

function JobList() {

    const [jobs, setJobs] = useState({
        data: [],
        isLoading: true,
    });

    useEffect(function renderJobs() {
        async function getJobs() {
            const jobsResults = await JoblyApi.getAllJobs();
            setJobs({
                data: jobsResults,
                isLoading: false
            });
        }
        getJobs();
    }, []);

    /**Search for jobs */
    async function filterJobs(title) {
        let jobsResults = await JoblyApi.getJobsByQuery(title);
        setJobs({
            ...jobs,
            data: jobsResults
        });
    }

    if (jobs.isLoading) return <i>Loading...</i>;

    return (
        <div>
            {<SearchForm submitQuery={filterJobs} />}
            <JobCardList jobs={jobs.data} />
        </div>
    );


}


export default JobList;
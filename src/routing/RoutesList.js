import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Homepage from "../common/Homepage";
import CompanyList from "../company/CompanyList";
import CompanyDetail from "../company/CompanyDetail"
import JobList from "../jobs/JobList";

/**RoutesList component
 * 
 * RoutesList -> {Homepage, CompanyList, CompanyDetail, JobList}
 */
function RoutesList() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/companies" element={<CompanyList />} />
      <Route path="/companies/:handle" element={<CompanyDetail />} />
      <Route path="/jobs" element={<JobList />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default RoutesList;
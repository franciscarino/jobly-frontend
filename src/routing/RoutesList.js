import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Homepage from "../common/Homepage";
import CompanyList from "../company/CompanyList";
import CompanyDetail from "../company/CompanyDetail"
import JobList from "../jobs/JobList";
import LoginForm from "../auth/LoginForm";
import SignupForm from "../auth/SignupForm";
import ProfileForm from "../auth/ProfileForm";


/**RoutesList component
 * 
 * RoutesList -> {Homepage, CompanyList, CompanyDetail, JobList}
 */
function RoutesList({updateUser}) {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/companies" element={<CompanyList />} />
      <Route path="/companies/:handle" element={<CompanyDetail />} />
      <Route path="/jobs" element={<JobList />} />
      <Route path="/profile" element={<ProfileForm />} />
      <Route path="/login" element={<LoginForm updateUser={updateUser}/>} />
      <Route path="/signup" element={<SignupForm />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default RoutesList;
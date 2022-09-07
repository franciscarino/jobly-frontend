import { useState, useEffect } from "react";
import JoblyApi from "./api";
import CompanyCard from "./CompanyCard";
import SearchForm from "./SearchForm";

//NEED SEARCH FROM


/** Render full list of companies
 * 
 * State:
 *  - companies
 */
function CompanyList() {
  const [companies, setCompanies] = useState([]);

  useEffect(function renderCompanies() {
    async function getCompanies() {
      const companiesResult = await JoblyApi.getAllCompanies();

      setCompanies(companiesResult);
    }
    getCompanies();
  }, []);

  /**Search for company */
  async function filterCompanies(name) {
    let companies = await JoblyApi.getCompaniesByQuery(name);
    setCompanies(companies);
  }

  return (
    <div>
      {<SearchForm submitQuery={filterCompanies} />}
      {companies.map(c =>
        <CompanyCard
          name={c.name}
          handle={c.handle}
          description={c.description}
          logoUrl={c.logoUrl}
          key={c.handle}
        />)}
    </div>
  );


}

export default CompanyList;
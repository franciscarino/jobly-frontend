import { useState, useEffect } from "react";
import JoblyApi from "../api";
import CompanyCard from "./CompanyCard";
import SearchForm from "../common/SearchForm";
import Spinner from "../common/Spinner";

/** Render full list of companies

 * State:
 *  - companies
 * 
 * RoutesList -> CompanyList -> {CompanyCard, SearchForm}
 * 
 */

function CompanyList() {
  const [companies, setCompanies] = useState({
    data: [],
    isLoading: true,
  });

  useEffect(function renderCompanies() {
    async function getCompanies() {
      const companiesResult = await JoblyApi.getAllCompanies();

      setCompanies({
        data: companiesResult,
        isLoading: false
      });
    }
    getCompanies();
  }, []);

  /**Search for company */
  async function filterCompanies(name) {
    let companiesResult = await JoblyApi.getCompaniesByQuery(name);
    setCompanies({
      ...companies,
      data: companiesResult
    });
  }

  if (companies.isLoading) return <Spinner />;


  return (
    <div>
      {<SearchForm submitQuery={filterCompanies} />}
      {companies.data.map(c =>
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
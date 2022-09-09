import { useState } from "react";


/**
 * 
 * Accept text, on submit, passes search query to parent component.
 * 
 * Prop: 
 *  - submitQuery
 * 
 * {CompanyList, JobList} -> SearchForm
 */

function SearchForm({ submitQuery }) {
  const [formData, setFormData] = useState("");

  /** Update form input. */
  function handleChange(evt) {
    const searchValue = evt.target.value;
    setFormData(searchValue);
  }

  /** Search form input */
  function handleSubmit(evt) {
    evt.preventDefault();

    submitQuery(formData);

    setFormData("");
  }



  return (
    <>
      <div className="SearchForm mb-4">
        <form onSubmit={handleSubmit}>
          <div className="row justify-content-center justify-content-lg-start gx-0">
            <div className="col-8">
              <input
                type="text"
                onChange={handleChange}
                placeholder="Enter search term..."
                name="searchField"
                value={formData}
                className="form-control form-control-lg"
              />
            </div>
            <div className="col-auto">
              <button className="btn btn-lg btn-primary">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default SearchForm;
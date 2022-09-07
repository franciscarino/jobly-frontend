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
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          placeholder="Enter search term..."
          name="searchField"
          value={formData}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default SearchForm;
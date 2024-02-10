import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Compo.css'

function CompanyForm() {
  const [companyDetails, setCompanyDetails] = useState({
    name: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCompanyDetails(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted company details:', companyDetails);
    // Add logic to handle form submission (e.g., send data to backend)
  };

  return (
<form className="form-container" onSubmit={handleSubmit}>
  <label className="form-label">
    Company Name:
    <input
      className="form-input"
      type="text"
      name="name"
      // placeholder="Company"
      value={companyDetails.name}
      onChange={handleChange}
    />
  </label>
  <br />
  <label className="form-label">
    Location:
    <input
      className="form-input"
      type="text"
      name="Location"
      placeholder="Location"
      value={companyDetails.Location}
      onChange={handleChange}
    />
  </label>
  <br />


      <Link to="/companyDetail"><button type="submit">Submit</button></Link>
      
    </form>
  );
}

export default CompanyForm;

import React, { useState } from 'react';

const CompanyList = () => {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async (municipalityNumber, year) => {
    try {
      setLoading(true);

      // Example API URL with parameters
      const apiUrl = `https://data.brreg.no/unitsregisteret/api/devices?municipalityNumber=${municipalityNumber}&size=10000&fromFoundationDate=${year}-01-01&tilStiftelsesdato=${year}-12-31`;

      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await response.json();
      setCompanies(data); // Assuming the API response is an array of companies
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  // Example function to trigger the API call
  const handleSearch = (municipalityNumber, year) => {
    fetchData(municipalityNumber, year);
  };

  return (
    <div>
      <h2>Company List</h2>

      {/* Button to trigger the API call */}
      <button onClick={() => handleSearch(selectedMunicipality, selectedYear)}>
        Find Companies
      </button>

      {/* Display the list of companies */}
      {loading && <p>Loading...</p>}
      {companies.length > 0 ? (
        <ul>
          {companies.map((company) => (
            <li key={company.organizationNumber}>
              {company.name} - {company.foundationDate} - {company.organizationNumber}
            </li>
          ))}
        </ul>
      ) : (
        <p>No companies found.</p>
      )}
    </div>
  );
};

export default CompanyList;

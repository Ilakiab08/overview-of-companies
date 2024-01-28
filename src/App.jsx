import React, { useState } from 'react';
import CompanySearchForm from "./components/CompanySearchForm";
import CompanyData from "./components/CompanyData";
import List from "./components/List";

function App() {
  const [companies, setCompanies] = useState([]);

  const handleSearch = async (municipality, year) => {
    console.log("Search initiated with:", municipality, year);
    const fetchedCompanies = await fetchCompanies(municipality, year);
    setCompanies(fetchedCompanies);
  };

  async function fetchCompanies(municipality, year) {
    try {
      const response = await fetch(`https://data.brreg.no/enhetsregisteret/api/devices?municipalityNumber=${municipality}&fromFoundationDate=${year}-01-01&toFoundationDate=${year}-12-31`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Failed to fetch companies:', error);
      return [];
    }
  }

  return (
    <div className="App">
      <CompanySearchForm onSearch={handleSearch} />
      <CompanyData>
        {(companies) => <List companies={companies} />}
      </CompanyData>
    </div>
  );
}

export default App;

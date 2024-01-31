
import CompanySearchForm from "./components/CompanySearchForm";
import CompanyData from "./components/CompanyData";
import List from "./components/List";
import './App.css';
import React, { useState, useEffect } from 'react';

const App = () => {
  const [municipalities, setMunicipalities] = useState([]);
  const [selectedMunicipality, setSelectedMunicipality] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
   
    fetch('https://data.ssb.no/api/klass/v1/versions/1847.json')
      .then(response => response.json())
      .then(data => {
        const municipalitiesData = data?.classificationItems || [];
        setMunicipalities(municipalitiesData);
      })
      .catch(error => console.error('Error fetching municipalities:', error));
  }, []);

  const handleSearch = () => {
    if (!selectedMunicipality || !selectedYear) {
      alert('Please select a municipality and a year.');
      return;
    }
   

    
    const apiUrl = `https://data.brreg.no/enhetsregisteret/api/enheter?kommunenummer=${selectedMunicipality}&size=10000&fraStiftelsesdato=${selectedYear}-01-01&tilStiftelsesdato=${selectedYear}-12-31`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const companiesData = data?._embedded?.enheter || [];
        setSearchResults(companiesData);
      })
      .catch(error => console.error('Error fetching companies:', error));
  };

  return (
    <div>
      <h1>Company Search</h1>

      <label>
        Select Municipality:
        <select
          value={selectedMunicipality}
          onChange={(e) => setSelectedMunicipality(e.target.value)}
        >
          <option value="">-- Select Municipality --</option>
          {municipalities.map((municipality) => (
            <option key={municipality.code} value={municipality.code}>
              {municipality.name}
            </option>
          ))}
        </select>
      </label>

      <label>
        Enter Year:
        <input
          type="number"
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
        />
      </label>

      <button onClick={handleSearch}>Find Companies</button>

      <h2>Search Results</h2>
      <ul>
        {searchResults.map((company) => (
          <li key={company.organisasjonsnummer}>
            {company.navn} - {company.organisasjonsnummer} (Established: {company.stiftelsesdato})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

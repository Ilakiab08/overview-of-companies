
import React, { useState } from 'react';

function CompanySearchForm({ onSearch }) {
  const municipalities = ['Oslo', 'Bergen', 'Trondheim'];
  const [selectedMunicipality, setSelectedMunicipality] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedMunicipality && selectedYear) {
      onSearch(selectedMunicipality, selectedYear);
    } else {
      alert("Please select a municipality and enter a year.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <select value={selectedMunicipality} onChange={(e) => setSelectedMunicipality(e.target.value)}>
        <option value="" disabled>Select a municipality</option>
        {municipalities.map((municipality, index) => (
          <option key={index} value={municipality}>{municipality}</option>
        ))}
      </select>
      <input type="number" placeholder="Year" value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)} />
      <button type="submit">Find companies</button>
    </form>
  );
}

export default CompanySearchForm;

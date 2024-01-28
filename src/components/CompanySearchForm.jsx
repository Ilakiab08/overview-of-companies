import { useState } from 'react';

function CompanySearchForm() {
 const municipalities = ['Oslo', 'Bergen', 'Trondheim'];
 const [selectedMunicipality, setSelectedMunicipality] = useState(null);
 const [selectedYear, setSelectedYear] = useState(null);

 const handleSubmit = (event) => {
   event.preventDefault();
   // Fetch companies here
 };

 return (
    <form onSubmit={handleSubmit}>
      <select onChange={(e) => setSelectedMunicipality(e.target.value)}>
        {municipalities.map((municipality, index) => (
          <option key={index} value={index}>{municipality}</option>
        ))}
      </select>
      <input type="number" placeholder="Year" onChange={(e) => setSelectedYear(e.target.value)} />
      <button type="submit">Find companies</button>
    </form>
 );
}
export  default  CompanySearchForm;
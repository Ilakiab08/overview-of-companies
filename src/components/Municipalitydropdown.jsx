

import React, { useState, useEffect } from 'react';

const MunicipalityDropdown = ({ onSelectMunicipality }) => {

  const [municipalities, setMunicipalities] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        try {
         
          const response = await fetch('/path/to/json/file');
          const data = await response.json();
          setMunicipalities(data.municipalities);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      
      
      fetchData();
  }, []);


  const handleSelectChange = (event) => {
    const selectedMunicipality = event.target.value;
    onSelectMunicipality(selectedMunicipality);
  };

  return (
    <div>
      <label htmlFor="municipalityDropdown">Select Municipality:</label>
      <select id="municipalityDropdown" onChange={handleSelectChange}>
        <option value="">Select...</option>
       
        {municipalities.map((municipality) => (
          <option key={municipality.id} value={municipality.id}>
            {municipality.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MunicipalityDropdown;

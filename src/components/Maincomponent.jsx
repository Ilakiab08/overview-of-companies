

import React, { useState } from 'react';
import MunicipalityDropdown from './Municipalitydropdown';

const MainComponent = () => {
  // State to store the selected municipality
  const [selectedMunicipality, setSelectedMunicipality] = useState('');

  // Handle municipality selection
  const handleSelectMunicipality = (municipality) => {
    setSelectedMunicipality(municipality);

  };

  return (
    <div>
      <h1>Your Main Component</h1>
      <MunicipalityDropdown onSelectMunicipality={handleSelectMunicipality} />
      
    </div>
  );
};

export default MainComponent;

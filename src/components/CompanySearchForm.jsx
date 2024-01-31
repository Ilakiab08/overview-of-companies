
import React from 'react';

const CompanySearchForm = ({ municipalities, selectedMunicipality, selectedYear, onMunicipalityChange, onYearChange, onSearch }) => {
  return (
    <div>
      <label>
        Select Municipality:
        <select
          value={selectedMunicipality}
          onChange={(e) => onMunicipalityChange(e.target.value)}
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
          onChange={(e) => onYearChange(e.target.value)}
        />
      </label>

      <button onClick={onSearch}>Find Companies</button>
    </div>
  );
};

export default CompanySearchForm;

import { useState, useEffect } from 'react';

function CompanyData({ municipality, year, children }) {
 const [companies, setCompanies] = useState([]);

 useEffect(() => {
   if (municipality && year) {
     fetchCompanies(municipality, year).then(setCompanies);
   }
 }, [municipality, year]);

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

 return children(companies);
}
export default  CompanyData;
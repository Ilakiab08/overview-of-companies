
import React from "react";
import CompanySearchForm from  "./components/CompanySearchForm"
import CompanyData from "./components/CompanyData" 
import List from "./components/List"
function App() {
    return (
       <div className="App">
         <CompanySearchForm />
         <CompanyData>
           {(companies) => <List companies={companies} />}
         </CompanyData>
       </div>
    );
   }
   
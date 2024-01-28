
import React from "react";
import CompanySearchForm from  ". /./CompanySearchForm"
function App() {
    return (
       <div className="App">
         <CompanySearchForm />
         <CompanyDataProvider>
           {(companies) => <CompanyList companies={companies} />}
         </CompanyDataProvider>
       </div>
    );
   }
   
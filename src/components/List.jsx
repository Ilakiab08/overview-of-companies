
import React from "react";

function List({ companies }) {
  return (
    <ul>
      {companies.map(company => (
        <li key={company.organizationNumber}>
          {company.name}, founded on {company.foundationDate}
        </li>
      ))}
    </ul>
  );
}

export default List;

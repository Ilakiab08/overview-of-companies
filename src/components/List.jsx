import React from 'react';

function List({ companies }) {
  console.log('Companies in List component:', companies);

  return (
    <ul>
      {companies.map(company => (
        <li key={company.organizationNumber}>
          {company.name}, founded on {new Date(company.foundationDate).toLocaleDateString()}
        </li>
      ))}
    </ul>
  );
}

export default List;

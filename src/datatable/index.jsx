import React from 'react';

const Datatable = ({ data = [] }) => {
  const columns = data[0] && Object.keys(data[0]);
  console.log(columns);

  return (
    <table cellPadding={0} cellSpacing={0}>
      <thead>
        <tr>
          {data[0] &&
            columns.map((heading, index) => <th key={index}>{heading}</th>)}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => {
          return (
            <tr key={index}>
              {columns.map((column, index) => {
                return <td key={index}>{row[column]}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Datatable;

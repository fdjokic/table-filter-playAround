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
          console.log(row);
          return (
            <tr key={index}>
              {columns.map((column, index) => {
                if (row[column].toString().includes('http')) {
                  return <td></td>;
                }
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

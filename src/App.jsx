import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Datatable from './datatable';

require('es6-promise').polyfill();
require('isomorphic-fetch');

function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');
  const [searchColumns, setSearchColumns] = useState(['name']);

  const fetchData = async (url) => {
    try {
      const resp = await axios.get(url);
      setData(resp.data.results);
    } catch (error) {}
  };

  const search = (rows) => {
    const columns =
      rows[0] && Object.keys(rows[0]).filter((item) => item !== Array.isArray);

    return rows.filter((row) =>
      searchColumns.some(
        (column) =>
          row[column].toString().toLowerCase().indexOf(query.toLowerCase()) > -1
      )
    );
  };

  useEffect(() => {
    fetchData('https://swapi.dev/api/people');
  }, []);
  console.dir(data);

  const columns =
    data[0] && Object.keys(data[0]).filter((item) => item !== Array.isArray);

  return (
    <div>
      <div>
        <input
          type='text'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {columns &&
          columns.map((column, index) => (
            <label key={index}>
              <input
                type='checkbox'
                checked={searchColumns.includes(column)}
                onChange={(e) => {
                  const checked = searchColumns.includes(column);
                  setSearchColumns((prev) =>
                    checked
                      ? prev.filter((item) => item !== column)
                      : [...prev, column]
                  );
                }}
              />
              {column}
            </label>
          ))}
      </div>
      <Datatable data={search(data)} />
    </div>
  );
}

export default App;

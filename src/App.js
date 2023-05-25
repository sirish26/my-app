import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export default function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    // Fetch the data from the API
    fetchData()
      .then((data) => {
        setData(data);
        setFilteredData(data);

        // Extract column names from the data keys
        if (data.length > 0) {
          const columnNames = Object.keys(data[0]);
          const generatedColumns = columnNames.map((name) => ({
            name,
            selector: (row) => row[name],
            sortable: true,
            cell: (row) => {
              if (typeof row[name] === 'object') {
                // Handle object values
                return JSON.stringify(row[name]);
              }
              return row[name];
            },
          }));
          setColumns(generatedColumns);
        }
      })
      .catch((error) => {
        console.log('Error fetching data:', error);
      });
  }, []);

  // Function to fetch data from the API
  const fetchData = async () => {
    try {
      const response = await fetch('https://retoolapi.dev/K0z4Cb/data');
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(error);
    }
  };

  // Function to handle search input change
  const handleSearchInputChange = (event) => {
    const searchText = event.target.value.toLowerCase();
    const filteredResults = data.filter((row) => {
      return Object.values(row).some((value) =>
        value.toString().toLowerCase().includes(searchText)
      );
    });
    setFilteredData(filteredResults);
  };

  const CustomFooter = ({ paginationProps, filteredData }) => (
    <div className="custom-footer" style={{ textAlign: "left" }}>
      <span>
        Showing {filteredData.length} out of {data.length} rows
      </span>
    </div>
  );

  return (
    <div>
      <div className="jumbotron jumbotron-fluid text-center">
        <div className="container">
          <h1>Full Stack Task</h1>
           <h2>Assignment : </h2>

      <p class="justified"> Your task is to create the above table UI using React JS and Build a backend using Python/NodeJS(Database of your choice) with the functionalities mentioned below. Your assignment will be judged based on the code quality, modularity, reusability and readability. UI (CSS) can be designed as per your own taste but should be neat and clean to look at. You can use dummy Data but it needs to be stored in a Database. 
</p>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row justify-content-end mt-4 md-4">
          <div className="col-auto">
            <div className="input-group">
              <input
                type="text"
                placeholder="Search..."
                onChange={handleSearchInputChange}
                className="form-control"
              />
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            <DataTable
              columns={columns}
              data={filteredData}
              pagination
              paginationPerPage={15}
              highlightOnHover
              striped
              responsive
              customStyles={customStyles}
              customFooter={CustomFooter}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const customStyles = {
  table: {
    style: {
      backgroundColor: 'rgb(255, 228, 233)',
    },
  },
  headCells: {
    style: {
      backgroundColor: 'pink',
      fontWeight: 'bold',
      textTransform: 'uppercase',
    },
  },
  cells: {
    style: {
      fontSize: '12px',
      color: '#333333',
    },
  },
};

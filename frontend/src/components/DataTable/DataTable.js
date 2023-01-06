import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';

const BikeJourneyDataTable = () => {
  const [bikeJourneys, setBikeJourneys] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(30);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [count, setCount] = useState(0);

  //useEffect(() => {
    const fetchData = async page => {
        setLoading(true);
      const response = await axios.get(`/api/bikejourneys?page=${page}&per_page=${perPage}&delay=1`);
      setBikeJourneys(response.data.data); //.map(bj => ({ ...bj, id: bj._id }))
      setTotalPages(response.data.pages);
      setTotalRows(response.data.pageSize)
      setCount(response.data.count);
      setLoading(false);
    };

    const handlePageChange = page => {
		fetchData(page);
    };

        const handlePerRowsChange = async (newPerPage, page) => {
            setLoading(true);

            const response = await axios.get(`/api/bikejourneys?page=${page}&per_page=${perPage}&delay=1`);

            setBikeJourneys(response.data.data);
            setPerPage(newPerPage);
            setLoading(false);
	};
useEffect(() => {
    fetchData(1);
}, []);
//     fetchData();
// }, []);

// const handleChangePage = (page) => {
// setPage(page + 1);
//};

// const handleSort = (column, sortDirection) => {
// // Add code to handle sorting
// };

// const handleFilter = (column, filterValue) => {
// // Add code to handle filtering
// };

const columns = [
    { name: 'ID', selector: row => row._id },
    { name: 'Departure', selector: row => row.departure },
    { name: 'Return', selector: row => row.return }, 
    { name: 'DepartureStationId', selector: row => row.departureStationId },
    { name: 'departureStationName', selector: row => row.departureStationName },
    { name: 'returnStationId', selector: row => row.returnStationId },
    { name: 'returnStationName', selector: row => row.returnStationName },
    { name: 'distance', selector: row => row.distance },
    { name: 'duration', selector: row => row.duration},
];

return (
    <div style={{ height: '100px' }}>
        <DataTable
            title="Bikejourneys May 2021"
            columns={columns}
            data={bikeJourneys}
            progressPending={loading}
            pagination
            paginationServer
            paginationTotalRows={totalPages}
            paginationRowsPerPageOptions={[30]}
            paginationPerPage={30}
            onChangeRowsPerPage={handlePerRowsChange}
            onChangePage={handlePageChange}
            fixedHeader
            fixedHeaderScrollHeight="500px"
            responsive="true"
            theme="dark"
            // onSort={handleSort}
            // onFilter={handleFilter}
            // page={page - 1}
            // pages={totalPages}
            // perPage={100}
            // filterable
            // sortable
            noDataComponent="No bike journeys found"
        />
</div>
);
};

export default BikeJourneyDataTable;
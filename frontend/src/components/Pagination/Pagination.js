import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';


const BikeJourneyList = () => {
  const [bikeJourneys, setBikeJourneys] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`/api/bikejourneys?page=${page}&limit=100`);
      setBikeJourneys(result.data.data.map(bikeJourneys => ({ ...bikeJourneys, id: bikeJourneys._id })));
      setPage(result.data.page);
      setTotalPages(result.data.pages);
      setCount(result.data.count);
    };

    fetchData();
  }, [page]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage + 1);
  };
  const columns=[
            { field: '_id', 
            headerName: 'ID', 
            
           },
            {
              field: 'departure',
              headerName: 'Departure',
              
            },
            {
              field: 'return',
              headerName: 'Return',
             
            },
            {
              field: 'departureStationId',
              headerName: 'DepartureStationId',
             
          },
          {
              field: 'departureStationName',
              headerName: 'DepartureStationName',
              
          },
          {
              field: 'returnStationId',
              headerName: 'ReturnStationId',
             
          },
          {
              field: 'returnStationName',
              headerName: 'ReturnStationName',
              
          },
          {
              field: 'distance',
              headerName: 'Distance',
          },
          {
              field: 'duration',
              headerName: 'Duration',
          },
          ];

  return (
    <div style={{ height: '500px' }}>
    <DataGrid
      columns={columns}
      rows={bikeJourneys}
      count={count}
      onChangePage={handleChangePage}
      page={page - 1}
      rowsPerPage={100}
      totalPages={totalPages}
      getRowId={row => row._id}
    />
    </div>
  );
};

export default BikeJourneyList;

// function BikejourneysList() {
//   const [bikejourneys, setBikejourneys] = useState([]);
//   const [page, setPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
  
//   useEffect(() => {
//     const fetchBikejourneys = async () => {
//       const res = await axios.get(`/bikejourneys`); //?page=${page}
//       setBikejourneys(res.data.data);
//       setTotalPages(res.data);
//     };

//     fetchBikejourneys();
//   }, [page]);

//   // const handlePrevClick = () => {
//   //   if (page > 1) {
//   //     setPage(page - 1);
//   //   }
//   // };

//   // const handleNextClick = () => {
//   //   if (page < totalPages) {
//   //     setPage(page + 1);
//   //   }
//   // };
 
// //   return (
// //     <DataGrid
// //       data={result}
// //       page={page - 1}
// //       onChangePage={this.handleChangePage}
// //       count={result.length}
// //       rowsPerPage={pageSize}
// //       totalPages={totalPages}
// //     >
// //       {/* add columns here */}
// //     </DataGrid>
// //   );
// // }

//   return (
//     <div style={{ display: 'flex', height: '100%' }}>
//   <div style={{ flexGrow: 1 }}>
    


    
//     <DataGrid
//       rows={[page]}
//       columns={[
//         { field: '_id', 
//         headerName: 'ID', 
        
//        },
//         {
//           field: 'departure',
//           headerName: 'Departure',
          
//         },
//         {
//           field: 'return',
//           headerName: 'Return',
         
//         },
//         {
//           field: 'departureStationId',
//           headerName: 'DepartureStationId',
         
//       },
//       {
//           field: 'departureStationName',
//           headerName: 'DepartureStationName',
          
//       },
//       {
//           field: 'returnStationId',
//           headerName: 'ReturnStationId',
         
//       },
//       {
//           field: 'returnStationName',
//           headerName: 'ReturnStationName',
          
//       },
//       {
//           field: 'distance',
//           headerName: 'Distance',
//       },
//       {
//           field: 'duration',
//           headerName: 'Duration',
//       },
//       ]}
//     />
//     {/* <button onClick={handlePrevClick} disabled={page === 1}>Previous</button>
//     <button onClick={handleNextClick} disabled={page === totalPages}>Next</button> */}
//   </div>

//   </div>

//   );
// }
// export default BikejourneysList;
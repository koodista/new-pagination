

import * as React from 'react';
//import Box from '@mui/material/Box'; //30.12
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { useState, useEffect } from 'react';

//import App from '../../App'; //30.12

function DataGridForBikeJourneys() {
    const [data, setData] = useState([]);
    const [page, setPage] = useState();
    const [pages, setPages] = useState([])
    const [pageSize, setPageSize] = useState({})
    const [pageState, setPageState] = useState({
          isLoading: false,
          data: [],
          total: 0,
          page: 1,
          pageSize: [100],
        });
    

    const getBikejourneyData = async() => {
        await axios.get(`http://localhost:3001/api/bikejourneys?page=${page}`).then((res) => {
            setData(res.data.data);
        });
    };

    useEffect(() => {
        getBikejourneyData();
    }, []);

    const columns = [
          { field: '_id', 
          headerName: 'ID', 
          width: 90,
         },
          {
            field: 'departure',
            headerName: 'Departure',
            type: 'date',
            width: 150,
            editable: true,
          },
          {
            field: 'return',
            headerName: 'Return',
            type: 'date',
            width: 150,
            editable: true,
          },
          {
            field: 'departureStationId',
            headerName: 'DepartureStationId',
            type: 'number',
            width: 110,
            editable: true,
        },
        {
            field: 'departureStationName',
            headerName: 'DepartureStationName',
            type: 'string',
            width: 110,
            editable: true,
        },
        {
            field: 'returnStationId',
            headerName: 'ReturnStationId',
            type: 'number',
            width: 110,
            editable: true,
        },
        {
            field: 'returnStationName',
            headerName: 'ReturnStationName',
            type: 'string',
            width: 110,
            editable: true,
        },
        {
            field: 'distance',
            headerName: 'Distance',
            type: 'number',
            width: 110,
            editable: true,
        },
        {
            field: 'duration',
            headerName: 'Duration',
            type: 'number',
            width: 110,
            editable: true,
        },
        ];

        const rows = data.map((row) => ({       //rows
            id: row.id,
            departure: row.departure,
            return: row.return,
            departureStationId: row.departureStationId,
            departureStationName: row.departureStationName,
            returnStationId: row.returnStationId,
            returnStationName: row.returnStationName,
            distance: row.distance,
            duration: row.duration,
        }))

    console.log(data);

    return (
        <div style={{ height: 400, width: '100%' }}>
            
            <DataGrid 
            autoHeight
            rows={data}
            getRowId={(rows) => rows._id} 
            
            loading={false}
            rowsPerPageOptions={[100]}
            pagination
            page={page}
            
            autoPageSize
            paginationMode="server"
            onPageChange={(newPage) => setPageState(newPage)}
            // {
            //   setPageState(old => ({...old, page: newPage + 1}))
            // }}
            onPageSizeChange={(newPageSize) => setPageState(newPageSize)}
            columns={columns}
       
            />
           
        </div>
    
)};

export default DataGridForBikeJourneys;




// // const rows = [
// //   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
// //   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
// //   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
// //   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
// //   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
// //   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
// //   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
// //   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
// //   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// // ];

// // export default function bikejourney() {
// //   return (
// //     <Box sx={{ height: 400, width: '100%' }}>
// //       <DataGrid
// //         rows={rows}
// //         columns={columns}
// //         pageSize={5}
// //         rowsPerPageOptions={[5]}
// //         checkboxSelection
// //         disableSelectionOnClick
// //         experimentalFeatures={{ newEditingApi: true }}
// //       />
// //     </Box>
// //   );
// // }

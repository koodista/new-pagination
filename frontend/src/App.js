
import { useState, useEffect } from 'react';
import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material';
import DataGridForBikeJourneys from './components/DataGrid/DataGrid';
import { DataGrid } from '@mui/x-data-grid';




  // const columns = [
  //   { field: '_id', 
  //   headerName: 'ID', 
  //   width: 90,
  //  },
  //   {
  //     field: 'departure',
  //     headerName: 'Departure',
  //     type: 'date',
  //     width: 150,
  //     editable: true,
  //   },
  //   {
  //     field: 'return',
  //     headerName: 'Return',
  //     type: 'date',
  //     width: 150,
  //     editable: true,
  //   },
  //   {
  //     field: 'departureStationId',
  //     headerName: 'DepartureStationId',
  //     type: 'number',
  //     width: 110,
  //     editable: true,
  // },
  // {
  //     field: 'departureStationName',
  //     headerName: 'DepartureStationName',
  //     type: 'string',
  //     width: 110,
  //     editable: true,
  // },
  // {
  //     field: 'returnStationId',
  //     headerName: 'ReturnStationId',
  //     type: 'number',
  //     width: 110,
  //     editable: true,
  // },
  // {
  //     field: 'returnStationName',
  //     headerName: 'ReturnStationName',
  //     type: 'string',
  //     width: 110,
  //     editable: true,
  // },
  // {
  //     field: 'distance',
  //     headerName: 'Distance',
  //     type: 'number',
  //     width: 110,
  //     editable: true,
  // },
  // {
  //     field: 'duration',
  //     headerName: 'Duration',
  //     type: 'number',
  //     width: 110,
  //     editable: true,
  // },
  // ];





const  App = () => {  //{ match }
    // const [rowCountState, setRowCountState] = useState(rowCount);
    // const [pageState, setPageState] = useState({
    //   isLoading: false,
    //   data: [],
    //   total: 0,
    //   page: 1,
    //   pageSize: 100,
    // })
    
       


    //const pageNumber = match.params.pageNumber || 1;
  
    // const [bikejourneys, setBikejourneys] = useState();  //30.12
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState(false);
  
    // const [page, setPage] = useState();  //pageNumber
    // const [pages, setPages] = useState();
  
    // useEffect(() => {
    //   const fecthBikejourneys = async () => {
    //     setLoading(true);
    //     try {
    //       const res = await fetch(`/api/bikejourneys`);  //?page=${page}
  
    //       const { data, pages: totalPages } = await res.json();
  
    //       setPages(totalPages);
    //       setBikejourneys(data);
    //       setLoading(false);
    //     } catch (error) {
    //       console.log(error);
    //       setLoading(false);
    //       setError("Some error occured");
    //     }
    //   };
  
    //   fecthBikejourneys();
    // }, []);

  

  

    // useEffect(() => {
    //   const fetchData = async () => {
    //     setPageState(old => ({...old, isLoading: true}))
       
    //     const response = await fetch(`http://localhost:3001/api/bikejourneys?page${pageState.page}&limit=${pageState.pageSize}`)
    //     const json = await response.json()
    //     setRowCountState((prevRowCountState) => rowCount !== undefined ? rowCount : prevRowCountState,);
    //     setPageState(old => ({...old, isLoading: false, data: json.data, total: json.total}))
        
    //   }    
    //   fetchData()
    // }, [pageState.page, pageState.pageSize, rowCount, setRowCountState])

      

    return <Box>
      <AppBar>
        <Toolbar>
          <Typography variant='h6' component="div">
            Bikejourneys
          </Typography>
        </Toolbar>
      </AppBar>
      <Container style={{marginTop: 100, marginBottom: 100 }}>
        
      <DataGridForBikeJourneys />
        
      </Container>
    </Box>
}
export default App;

{/* <DataGrid 
          autoHeight
          rows={pageState.data}
          getRowId={(rows) => rows._id} 
          rowCount={rowCount}
          loading={pageState.isLoading}
          rowsPerPageOptions={[100]}
          pagination={true}
          page={pageState.page - 1}
          pageSize={pageState.pageSize}
          paginationMode="server"
          onPageChange={(newPage) => setPageState(newPage)}
          // {
          //   setPageState(old => ({...old, page: newPage + 1}))
          // }}
          onPageSizeChange={(newPageSize) => setPageState(newPageSize)}
          columns={columns} */}


//         <div className="app">

//             <DataGridForBikeJourneys />

//           {/* {loading ? (
//             <h3 className="loading-text">Loading...</h3>
//           ) : error ? (
//             <h3 className="error-text">{error}</h3>
//           ) : (
//             <>
//               <Pagination page={page} pages={pages} changePage={setPage} />
//               <div className="app__posts">
//                 {bikejourneys.map((bikejourney) => (
//                   <Card key={bikejourney._id} bikejourney={bikejourney} />
//                 ))}
//               </div>
//               <Pagination page={page} pages={pages} changePage={setPage} />
//         </>
//       )} */}
//     </div>
//   );
   
          
// };




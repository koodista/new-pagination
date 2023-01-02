//import DataGridForBikeJourneys from "./DataGrid/DataGrid";
import "./Card.css";

const Card = ({ bikejourney }) => {
    return (
      <div className="card">
        

        <p className="card__body">{bikejourney.departure}</p>
        <p className="card__author">{bikejourney.return}</p>
        <p className="card__author">{bikejourney.departureStationId}</p>
        <p className="card__title">{bikejourney.departureStationName}</p>
        <p className="ccard__author">{bikejourney.returnStationId}</p>
        <p className="ard__title">{bikejourney.returnStationName}</p>
        <p className="card__body">{bikejourney.distance}</p>
        <p className="card__body">{bikejourney.duration}</p> 
      </div>
    );
  };
  
   export default Card;

  
// import React, { useEffect, useState } from "react";
// import * as React from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// // //import axios from "axios";



// const rows = [];

// export default function DynamicTable({ match }) {
//   // const pageNumber = match.params.pageNumber || 1;
//   // const [bikejourneys, setBikejourneys] = useState([]);
//   //   const [loading, setLoading] = useState(false);
//   //   const [error, setError] = useState(false);
  
//   //   const [page, setPage] = useState(pageNumber);  //pageNumber
//   //   const [pages, setPages] = useState(1);
  
//   //   useEffect(() => {
//   //     const fecthBikejourneys = async () => {
//   //       setLoading(true);
//   //       try {
//   //         const res = await fetch(`/api/bikejourneys?page=${page}`);  //?page=${page}
  
//   //         const { data, pages: totalPages } = await res.json();
  
//   //         setPages(totalPages);
//   //         setBikejourneys(data);
//   //         setLoading(false);
//   //       } catch (error) {
//   //         console.log(error);
//   //         setLoading(false);
//   //         setError("Some error occured");
//   //       }
//   //     };
  
//   //     fecthBikejourneys();
//   //   }, []);
// //   const [page, setPage] = useState(1);
// //   const [data, setData] = useState([]);

// //   const fecthBikejourneys = async() => {
// //     await axios.get(`http://localhost:3001/api/bikejourneys?page=${page}`).then((res) => {     //?page=${page}
// //         setData(res.data.data);
// //     });
// // };

// // useEffect(() => {
// //     fecthBikejourneys();
// // }, []);
//   // useEffect(() => {
//   //   axios
//   //     .get(`http://localhost:3001/api/bikejourneys?`)  //?page=${page}
//   //     .then((res) => {
//   //       setData(res.data.data);
//   //       console.log("Result:", data);
//   //     })
//   //     .catch((error) => {
//   //       console.log(error);
//   //     });
//   // }, []);


// export const Card =() => {       //[{ bikejourney }]
//   const bikejourney = [bikejourney]
//   return (
//     <TableContainer component={Paper}>
//       <Table aria-label="simple table" stickyHeader>
//         <TableHead>
//           <TableRow>
//             <TableCell>departureStationId</TableCell>
//             <TableCell >departureStationName</TableCell>
//             <TableCell >returnStationId</TableCell>
//             <TableCell >returnStationName</TableCell>
//             <TableCell >duration</TableCell>
//             <TableCell >distance</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {bikejourney.map((row) => (
//             <TableRow key={row._id}>
//               <TableCell component="th" scope="row">
//                 {row.name}
//               </TableCell>
//               <TableCell >{bikejourney.departureStationId}</TableCell>
//               <TableCell >{bikejourney.departureStationName}</TableCell>
//               <TableCell >{bikejourney.returnStationId}</TableCell>
//               <TableCell >{bikejourney.returnStationName}</TableCell>
//               <TableCell >{bikejourney.distance}</TableCell>
//               <TableCell >{bikejourney.duration}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }

// export default Card;

// const Card = ({ bikejourney }) => {


// const columns = [
//     { field: '_id', 
//     headerName: 'ID', 
//     width: 90,
//    },
//     {
//       field: 'departure',
//       headerName: 'Departure',
//       type: 'date',
//       width: 150,
//       editable: true,
//     },
//     {
//       field: 'return',
//       headerName: 'Return',
//       type: 'date',
//       width: 150,
//       editable: true,
//     },
//     {
//       field: 'departureStationId',
//       headerName: 'DepartureStationId',
//       type: 'number',
//       width: 110,
//       editable: true,
//   },
//   {
//       field: 'departureStationName',
//       headerName: 'DepartureStationName',
//       type: 'string',
//       width: 110,
//       editable: true,
//   },
//   {
//       field: 'returnStationId',
//       headerName: 'ReturnStationId',
//       type: 'number',
//       width: 110,
//       editable: true,
//   },
//   {
//       field: 'returnStationName',
//       headerName: 'ReturnStationName',
//       type: 'string',
//       width: 110,
//       editable: true,
//   },
//   {
//       field: 'distance',
//       headerName: 'Distance',
//       type: 'number',
//       width: 110,
//       editable: true,
//   },
//   {
//       field: 'duration',
//       headerName: 'Duration',
//       type: 'number',
//       width: 110,
//       editable: true,
//   },
//   ];

//   const rows = bikejourney.map((row) => ({       //rows
//       id: row.id,
//       departure: row.departure,
//       return: row.return,
//       departureStationId: row.departureStationId,
//       departureStationName: row.departureStationName,
//       returnStationId: row.returnStationId,
//       returnStationName: row.returnStationName,
//       distance: row.distance,
//       duration: row.duration,
//   }))

// console.log(bikejourney);

// return (
  
//         <TableContainer component={Paper}>
//           <Table aria-label="simple table" stickyHeader>
//             <TableHead>
//               <TableRow>
//                 <TableCell>departureStationId</TableCell>
//                 <TableCell >departureStationName</TableCell>
//                 <TableCell >returnStationId</TableCell>
//                 <TableCell >returnStationName</TableCell>
//                 <TableCell >duration</TableCell>
//                 <TableCell >distance</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {rows.map((row) => (
//                 <TableRow key={row._id}>
//                   <TableCell component="th" scope="row">
//                     {row.name}
//                   </TableCell>
//                   <TableCell >{bikejourney.departureStationId}</TableCell>
//                   <TableCell >{bikejourney.departureStationName}</TableCell>
//                   <TableCell >{bikejourney.returnStationId}</TableCell>
//                   <TableCell >{bikejourney.returnStationName}</TableCell>
//                   <TableCell >{bikejourney.distance}</TableCell>
//                   <TableCell >{bikejourney.duration}</TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       );
//     }



// export default Card;
import "./Table.css";

const Table = ({bikejourney}) => {
    
    return (
      
                <table>
                        <thead>
                            <tr>
                            <th>departure</th>
                            <th>return</th>
                            <th>departureStationId</th>
                            <th>departureStationName</th>
                            <th>returnStationId</th>
                            <th>returnStationName</th>
                            <th>distance</th>
                            <th>duration</th>
                            </tr>
                            </thead>
                            
                           
                            <tbody>
                            <tr >
                                <td>{bikejourney.departure}</td>
                                <td>{bikejourney.return}</td>
                                <td>{bikejourney.departureStationId}</td>
                                <td>{bikejourney.departureStationName}</td>
                                <td>{bikejourney.returnStationId}</td>
                                <td>{bikejourney.returnStationName}</td>
                                <td>{bikejourney.distance}</td>
                                <td>{bikejourney.duration}</td>
                            </tr>
                           
                            </tbody>
                   
                </table>


    )}
    export default Table;




    

import { useState, useEffect } from 'react';






import DataGridForBikeJourneys from './components/DataGrid/DataGrid';

const  App = () => {  //{ match }
    
    //const pageNumber = match.params.pageNumber || 1;
  
    const [bikejourneys, setBikejourneys] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
  
    const [page, setPage] = useState();  //pageNumber
    const [pages, setPages] = useState();
  
    useEffect(() => {
      const fecthBikejourneys = async () => {
        setLoading(true);
        try {
          const res = await fetch(`/api/bikejourneys`);  //?page=${page}
  
          const { data, pages: totalPages } = await res.json();
  
          setPages(totalPages);
          setBikejourneys(data);
          setLoading(false);
        } catch (error) {
          console.log(error);
          setLoading(false);
          setError("Some error occured");
        }
      };
  
      fecthBikejourneys();
    }, []);


    return (
        <div className="app">

            <DataGridForBikeJourneys />

          {/* {loading ? (
            <h3 className="loading-text">Loading...</h3>
          ) : error ? (
            <h3 className="error-text">{error}</h3>
          ) : (
            <>
              <Pagination page={page} pages={pages} changePage={setPage} />
              <div className="app__posts">
                {bikejourneys.map((bikejourney) => (
                  <Card key={bikejourney._id} bikejourney={bikejourney} />
                ))}
              </div>
              <Pagination page={page} pages={pages} changePage={setPage} />
        </>
      )} */}
    </div>
  );
   
          
};


export default App;


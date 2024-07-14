import React from "react";
// import api from "../utils/apiMovies";
import Galery from "./Galery";

export default function Popular ({ handleZoomClick}) {
    
  const [popularCards, setPopularCards] = React.useState([]);

  React.useEffect(() => {
    api.getPopular().then(data => {
      setPopularCards(data.results)
    })
}, [])
    return (
        <>
        <div>
          <main className="main"> 
            
            <Galery cards={popularCards} handleZoomClick={handleZoomClick} /> 
    
            
          </main>
        </div>
        </>
      );
}
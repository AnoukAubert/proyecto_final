import React from "react";
import api from "../utils/apiMovies";
import Galery from "./Galery";
import Preloader from "./Preloader.js";

export default function Popular ({ handleZoomClick}) {
    
  const [loader, setLoader] = React.useState(false);
  const [popularCards, setPopularCards] = React.useState([]);

  React.useEffect(() => {
    setLoader(true);
    api.getPopular().then(data => {
      setPopularCards(data.results)
    })
      setTimeout(() => {
        setLoader(false);
    }, 3000)
}, [])
    return (
        <>
        <div>
          <main className="main"> 
            
            {loader ? (
              <div className="preloader-wrapper"> <Preloader /> </div>
            ) : null}
            <Galery cards={popularCards} handleZoomClick={handleZoomClick} /> 
    
            
          </main>
        </div>
        </>
      );
}
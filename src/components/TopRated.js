import React from "react";
import api from "../utils/apiMovies";
import Galery from "./Galery";
import Preloader from "./Preloader.js";

export default function TopRated ({ handleZoomClick}) {
    
    const [loader, setLoader] = React.useState(false);
    const [topRatedCards, setTopRatedCards] = React.useState([]);

  React.useEffect(() => {
    setLoader(true);
    api.getTopRated().then(data => {
      setTopRatedCards(data.results)
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
            <Galery cards={topRatedCards} handleZoomClick={handleZoomClick} /> 
    
            
          </main>
        </div>
        </>
      );
}
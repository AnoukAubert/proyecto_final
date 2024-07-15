import React from "react";
import api from "../utils/apiMovies";
import Galery from "./Galery";
import Preloader from "./Preloader.js";

export default function Upcoming ({ handleZoomClick}) {
    
    const [loader, setLoader] = React.useState(false);
    const [upcomingCards, setUpcomingCards] = React.useState([]);

  React.useEffect(() => {
    setLoader(true);
    api.getUpcoming().then(data => {
      setUpcomingCards(data.results)
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
            <Galery cards={upcomingCards} handleZoomClick={handleZoomClick} /> 
    
            
          </main>
        </div>
        </>
      );
}
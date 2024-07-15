import React from "react";
import api from "../utils/apiMovies";
import Galery from "./Galery";
import Preloader from "./Preloader.js";

export default function NowPlaying ({ handleZoomClick}) {
    
    const [loader, setLoader] = React.useState(false);
    const [nowPlayingCards, setNowPlayingCards] = React.useState([]);

  React.useEffect(() => {
    setLoader(true);
    api.getNowPlaying().then(data => {
      setNowPlayingCards(data.results)
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
            <Galery cards={nowPlayingCards} handleZoomClick={handleZoomClick} /> 
    
            
          </main>
        </div>
        </>
      );
}
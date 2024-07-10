import React from "react";
import Galery from "./Galery.js";
// import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
// import Article from "./Article.js";

export default function Main({cards, handleZoomClick}) {
  // const user = React.useContext(CurrentUserContext); 
  return (
    <>
    <div>
      <main className="content"> 
        

        <Galery cards={cards} handleZoomClick={handleZoomClick} />

        {/* <Article /> */}

        
      </main>
    </div>
    </>
  );
}

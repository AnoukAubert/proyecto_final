import React from "react";
import Galery from "./Galery.js";

export default function Main({cards, handleZoomClick}) {
  return (
    <>
    <div>
      <main className="content"> 
        

        <Galery cards={cards} handleZoomClick={handleZoomClick} />


        
      </main>
    </div>
    </>
  );
}

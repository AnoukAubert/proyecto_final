import React from "react";

export default function Main({cards, handleZoomClick}) {
  return (
    <>
    <div>
      <main className="main"> 

        <button className="main__button">Ahora en Cines</button>
        <button className="main__button">Popular</button>
        <button className="main__button">Los más Valorados</button>
        <button className="main__button">Próximamente</button>
        
      </main>
    </div>
    </>
  );
}

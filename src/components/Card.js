import React from "react";

export default function Card({
  name,
  link,
  handleClick,
})
{
  return (
    <>
      <div className="movie__card">
        <img
          onClick={() => {
            handleClick(name, `https://image.tmdb.org/t/p/w220_and_h330_face${link}`);      //esto seria el popup (zoom)  --title redirecciona a Article-->
          }}
          className="movie__image"
          src={`https://image.tmdb.org/t/p/w220_and_h330_face${link}`}
          alt={name}
        />
        
        <div className="movie__description">   
          <h2 className="movie__title">{name}</h2> 
        </div>
      </div>
    </>
  );
}

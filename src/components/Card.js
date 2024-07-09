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
            handleClick(name, link);      //esto seria el popup (zoom)  --title redirecciona a Article-->
          }}
          className="movie__image"
          src={link}
          alt={name}
        />
        
        <div className="movie__description">   
          <h2 className="movie__title">{name}</h2> 
        </div>
      </div>
    </>
  );
}

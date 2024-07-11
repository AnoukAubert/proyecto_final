import React from "react";

export default function Article({
  title,
  name,
  link,
  handleClick,
  overview
}) {
  return (
    <>
      <article className="article">  
          <h2 className="article__title">{title}</h2> 
          
          <img
          onClick={() => {                //tengo que configurar title para que me traiga el título de la ruta
            handleClick(name, link);      //esto seria el popup (zoom)
          }}
            className="article__picture"
            src={link}
            alt={name}
          />

          <p className="article__paragraph">{overview}</p>
      </article>

        
    </>
  );
}

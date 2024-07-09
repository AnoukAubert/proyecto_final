import React from "react";

export default function Article({
  name,
  link,
  handleClick,
  overview
}) {
  return (
    <>
      <article className="article">
          <h2 className="article__title">{name}</h2>
        
          <img
          onClick={() => {
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

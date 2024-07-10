import React from "react";
import Card from "../components/Card";

export default function Galery({handleZoomClick, cards}) {
  return (
  <>
  <section className="galery">
          {cards.map((item, index) => {
            return (
              <Card
                key={index}
                handleClick={handleZoomClick}
                card={item}
                name={item.title} //¿como puedo hacer para que al clickear en name redireccione a Article?
                link={item.poster_path}
              />
            );
          })}
        </section>
  </>
)}

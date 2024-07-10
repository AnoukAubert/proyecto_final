import React from "react";
import { Switch, Route } from "react-router-dom";
import Card from "../components/Card";

export default function Galery({handleZoomClick, cards}) {
  return (
  <>
  <section className="galery">
          {cards.map((item, index) => {
            return (
              <>
              <Switch>
                <Route>
              <Card
                key={index}
                handleClick={handleZoomClick}
                card={item}
                name={item.title} //¿como puedo hacer para que al clickear en name redireccione a Article?
                link={item.poster_path}
              />
              </Route>
              </Switch>
              </>
            );
          })}
        </section>
  </>
)}

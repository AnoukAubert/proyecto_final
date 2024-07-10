import React from "react";
import { Route, Link } from "react-router-dom";

export default function Navigation({}) {
    
  return (
    <>
    <Route>
      <nav class="navigation">
        <ul class="navigation__list">
          <li class="navigation__item">
            <Link path="/" class="navigation__link">
              Inicio
            </Link>
          </li>
          <li class="navigation__item">
            <Link path="/now-playing" class="navigation__link">
              Ahora en Cines
            </Link>
          </li>
          <li class="navigation__item">
            <Link path="/popular" class="navigation__link">
              Popular
            </Link>
          </li>
          <li class="navigation__item">
            <Link path="/top-rated" class="navigation__link">
              Los Más Valorados
            </Link>
          </li>
          <li class="navigation__item">
            <Link path="/upcoming" class="navigation__link">
              Proximamente
            </Link>
          </li>
        </ul>
      </nav>
      </Route>
    </>
  );
}

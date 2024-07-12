import React from "react";
import { Link } from "react-router-dom";

export default function Navigation({}) {
   return (
    <>
      <nav className="navigation">
        <ul className="navigation__list">
          <li className="navigation__item">
            <Link to="/" className="navigation__link">
              Inicio
            </Link>
          </li>
          <li className="navigation__item">
            <Link to="/now-playing" className="navigation__link">
              Ahora en Cines
            </Link>
          </li>
          <li className="navigation__item">
            <Link to="/popular" className="navigation__link">
              Popular
            </Link>
          </li>
          <li className="navigation__item">
            <Link to="/top-rated" className="navigation__link">
              Los Más Valorados
            </Link>
          </li>
          <li className="navigation__item">
            <Link to="/upcoming" className="navigation__link">
              Proximamente
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

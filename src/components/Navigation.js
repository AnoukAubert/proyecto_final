import React from "react";
import { Route, Link } from "react-router-dom";

export default function Navigation({}) {
  const [linknContent, setLinkContent] = React.useState();
  const getApiValues = {};
  const handleSubmit = (evt) => { 
    evt.preventDefault();
    handleSubmit(getApiValues()).finally(() => {
      setLinkContent();
     });
   }
  return (
    <>
    <Route>
      <nav className="navigation">
        <ul className="navigation__list">
          <li className="navigation__item">
            <Link to="/" className="navigation__link" handleSubmit={linknContent}>
              Inicio
            </Link>
          </li>
          <li className="navigation__item">
            <Link to="/now-playing" className="navigation__link" handleSubmit={linknContent}>
              Ahora en Cines
            </Link>
          </li>
          <li className="navigation__item">
            <Link to="/popular" className="navigation__link" handleSubmit={linknContent}>
              Popular
            </Link>
          </li>
          <li className="navigation__item">
            <Link to="/top-rated" className="navigation__link" handleSubmit={linknContent}>
              Los Más Valorados
            </Link>
          </li>
          <li className="navigation__item">
            <Link to="/upcoming" className="navigation__link" handleSubmit={linknContent}>
              Proximamente
            </Link>
          </li>
        </ul>
      </nav>
      </Route>
    </>
  );
}

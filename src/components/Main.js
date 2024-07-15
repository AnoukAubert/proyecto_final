import React from "react";
import { Link } from "react-router-dom";

export default function Main({}) {
  return (
    <>
      <div>
        <main className="main">
          <div className="main__container">
            <Link to="/now-playing" className="main__button">
              Ahora en Cines
            </Link>
            <Link to="/popular" className="main__button">
              Popular
            </Link>
            <Link to="/top-rated" className="main__button">
              Los más Valorados
            </Link>
            <Link to="/upcoming" className="main__button">
              Próximamente
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}

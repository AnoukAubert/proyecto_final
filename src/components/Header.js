import React from "react";
import logo from "../images/logo.png";
import mainPic from "../images/Portada.png";

export default function Header({}) {
  return (
    <>
      <header className="header">
        <img className="header__logo" src={logo} alt="logo TripleTen" />
        <h1 className="header__title">TripleTen Movie Center</h1>
        <img
          className="header__main-ilustration"
          alt="compilación de posters de peliculas, Avengers Endgame, En Busca de la Felicidad, El Club de la Pelea, Raya y el Último Dragón, Star Wars El Despertar de la Fuerza."
          src={mainPic}
        />
        <h4 className="header__subtitle">
          ¿No sabés qué mirar? Acá te podés encontrar con recomendaciones de peliculas de todos los géneros, animate a probar algo nuevo y disfruta de unas palomitas en tu sillón.
        </h4>
      </header>
    </>
  );
}

import React from "react";

export default function Navigation({}) {
    return (
    <>

<nav class="navigation">
    <ul class="navigation__list">
        <li class="navigation__item">
            <a href="/" class="navigation__link">Inicio</a>
        </li>
        <li class="navigation__item">
            <a href="/now-playing" class="navigation__link">Ahora en Cines</a>
        </li>
        <li class="navigation__item">
            <a href="/popular" class="navigation__link">Popular</a>
        </li>
        <li class="navigation__item">
            <a href="/top-rated" class="navigation__link">Los Más Valorados</a>
        </li>
        <li class="navigation__item">
            <a href="/upcoming" class="navigation__link">Proximamente</a>
        </li>
    </ul>
</nav>

</>
    );}
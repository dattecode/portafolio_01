import React, { useState } from "react";
import "./styles/mainCss.css";
import imgBg from "./img/fondo_intro.gif";
import { Link } from "react-router-dom";

const Intro = () => {
  useState(() => {}, []);

  return (
    <article className="containerIntro">
      <img src={imgBg} className="imgBg" />
      <div className="containerText">
        <h2 className="introTitle">¡Bienvenido a mi Portafolio!</h2>
        <section className="presentacion">
          <p className="pa1">
            Soy un programador apasionado por la tecnología y la programación.
            Mi objetivo es crear soluciones innovadoras y resolver problemas a
            través del código.
          </p>
          <p className="pa2">
            En este portafolio, encontrarás una muestra de mis proyectos y
            habilidades. Estoy emocionado de compartir mi trabajo contigo.
          </p>
        </section>
        <Link to={"/home"} className="homeBtn">
          {" "}
          Portafolio{" "}
        </Link>
      </div>
    </article>
  );
};

export default Intro;

import React from "react";
import "./styles/homeCss.css";
import jsImg from "./img/home_icon/javas.png";
import reactImg from "./img/home_icon/react_logof.png";
import cssLogo from "./img/home_icon/pngwing.com.png";
import habLogo from "./img/neon1.gif";
import userProj from "./img/imgProj/imgUsers.png";
import pokedex from "./img/imgProj/projPokemon.png";
import RyM from "./img/imgProj/projRyM.png";

const Home = () => {
  return (
    <>
      <article className="containerHome">
        <header className="header">
          <h1 className="nameHeader">Leonardo Valenzuela</h1>
        </header>

        <div className="sectionHome">
          <section className="desc">
            <h3 className="descTit"> Sobre Mi Desarrollo Como Programador</h3>
            <p className="textDesc">
              desde hace 1 año y medio, he estado persiguiendo mi sueño de
              convertirme en programador. Durante el primer año, me sumergí en
              la programación de forma autodidacta, centrándome en Python. Esta
              experiencia me permitió explorar mi pasión por la resolución de
              problemas a través del código. Hace algún tiempo, decidí dar un
              paso más allá y me inscribí en un Bootcamp de desarrollo Full
              Stack. Actualmente, me encuentro inmerso en esta emocionante
              jornada de aprendizaje y crecimiento. Para mí, la programación es
              un campo en constante evolución, y estoy comprometido en
              mantenerme actualizado y mejorar constantemente mis habilidades.
              En resumen, soy un apasionado programador en desarrollo,
              comprometido con el aprendizaje continuo.
            </p>
          </section>

          <section className="habilidades">
            <h2 className="titleHab">Habilidades</h2>
            <img src={habLogo} className="habLogo" />
            <div className="sectionHab">
              <div className="habCard">
                <img src={jsImg} className="imgHab" />
                <p className="pHab">
                  {" "}
                  Comprensión sobre lógica de programación en JavaScript para la
                  ejecución de funciones dentro del proyecto y su aplicación en
                  el frontEnd y su conexión con el backend en forma de API Rest.
                </p>
              </div>
              <div className="habCard">
                <img src={cssLogo} className="imgHab cssImg" />
                <p className="pHab">
                  uso avanzado de Css y html en función con Js con dominio en
                  Css Flexbox y Responsive Design
                </p>
              </div>
              <div className="habCard">
                <img src={reactImg} className="imgHab reactImg" />
                <p className="pHab">
                  Desarrollo de front end Utilizando react Para el general de lo
                  que se usa en el desarrollo, uso de librerías como Axios,
                  React-router-dom, Redux Toolkit, para la implementación en los
                  proyectos, con conocimiento correcto de buenas prácticas en la
                  separación de componentes y su renderizado.{" "}
                </p>
              </div>
            </div>
          </section>

          <section className="proyectos">
            <h2 className="tittleProj">Proyectos</h2>
            <div className="containerProj">
              <div className="projUser">
                <img src={userProj} className="projImg" />
                <h3>Gestion Users</h3>
                <p>vs_01</p>
                <a
                  href="https://darling-madeleine-ebda0c.netlify.app"
                  className="btnProj"
                  target="_blank"
                >
                  Ir al Proyecto
                </a>
              </div>

              <div className="projUser">
                <img src={pokedex} className="projImg" />
                <h3>Pokedex</h3>
                <p>vs_01</p>
                <a
                  href="https://incandescent-sherbet-db0855.netlify.app"
                  className="btnProj"
                  target="_blank"
                >
                  Ir al Proyecto
                </a>
              </div>

              <div className="projUser">
                <img src={RyM} className="projImg" />
                <h3>Rick And Morty</h3>
                <p>vs_01</p>
                <a
                  href="https://stellar-sunshine-f0d900.netlify.app"
                  className="btnProj"
                  target="_blank"
                >
                  Ir al Proyecto
                </a>
              </div>
            </div>
          </section>

          <section className="contacto">
            <h3>Contacto</h3>
            <ul className="titleCont">
              <li className="liCont">
                <strong>Correo Electrónico:</strong>{" "}
                <a href="mailto:dattecode@gmail.com" className="linkCont">
                  Enviar Mail
                </a>
              </li>
              <li className="liCont">
                <strong>Twitter:</strong>{" "}
                <a
                  href="https://twitter.com/dattecode"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="linkCont"
                >
                  Ir a Twitter
                </a>
              </li>
              <li className="liCont">
                <strong>GitHub:</strong>{" "}
                <a
                  href="https://github.com/tu-usuario"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="linkCont"
                >
                  Ir a GitHub
                </a>
              </li>
            </ul>
          </section>
        </div>
      </article>
    </>
  );
};

export default Home;

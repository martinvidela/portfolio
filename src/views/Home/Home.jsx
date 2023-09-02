import React from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import martosnow from "../../assets/img/martosnow.jpeg";
import { faMapPin } from "@fortawesome/free-solid-svg-icons";
import { Skills } from "../Skills/Skills";
import github from "../../assets/img/svg/github.svg";
import linkedin from "../../assets/img/svg/linkedin.svg";
import { OpenToWork } from "../../Components/OpenToWork";

export const Home = () => {
  return (
    <div>
      <div className="container-home">
        <div className="header-main">
          <img className="marto" src={martosnow} alt="martinvidela" />
          <div className="header-text">
            <h1>Martín Videla</h1>
            <p>⚛️React frontend developer.</p>
            <p className="header-text-pin">
              <FontAwesomeIcon icon={faMapPin} /> Argentina
            </p>
            <OpenToWork/>
            <div className="social-media">
              <a href="https://github.com/martinvidela" target="_blank">
                <img className="github" src={github} alt="github" />
              </a>
              <a
                href="https://www.linkedin.com/in/martin-videla-frontdev/"
                target="_blank">
                <img className="linkedin" src={linkedin} alt="linkedin" />
              </a>
            </div>
          </div>
        </div>
        <div className="header-body">
          <h2>Sobre mí</h2>
          <p>  Soy desarrollador web, vivo en argentina, y me apasiona la programación. Actualmente me enfoco en el Frontend especializandome en React, aplicando Clean Code, Principios Solid y Custom Hooks.  </p>
          <br />
          <p>También me gusta jugar en la computadora y Spider-Man🕸️</p>
        </div>
      </div>
      <Skills />
    </div>
  );
};

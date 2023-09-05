import React from "react";
import "./Projects.css";
import Rim from "../../assets/img/Rim.png";
import weatherapp from "../../assets/img/weatherapp.png";
import begreater from "../../assets/img/begreater.png";
import gifApp from '../../assets/img/gifApp.png'
export const Projects = () => {
  return (
    <div className="container-projects">
      <div className="cards-container">
        <div className="card-project">
          <a
            href="https://rick-and-morty-app-flax-phi.vercel.app/"
            target="_blank"
          >
            <h3>Rick&Morty</h3>
            <img className="rim" src={Rim} alt="" />
          </a>
          <p>React - Redux - Javascript - Css</p>
        </div>
        <div className="card-project">
          <a
            href="https://react-weather-app-lemon-one.vercel.app/"
            target="_blank"
          >
            <h3>Weather App</h3>
            <img className="weatherapp" src={weatherapp} alt="" />
          </a>
          <p>React - Javascript - CSS</p>
        </div>
        <div className="card-project">
          <a href="https://martinvidela.github.io/BeGreater-ecommerce/"
          target="_blank">
            <h3>Be Greater</h3>
            <img className="begreater" src={begreater} alt="" />
          </a>
          <p>React - Redux - Javascript - CSS</p>
        </div>
        <div className="card-project">
          <a href="https://martinvidela.github.io/React-Gif-App/">
            <h3>Giphy App</h3>
            <img className="gifApp" src={gifApp} alt="" />
          </a>
          <p>React - Javascript - Css</p>
        </div>
      </div>
    </div>
  );
};

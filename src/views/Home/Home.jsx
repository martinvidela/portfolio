import React from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import martosnow from "../../assets/img/martosnow.jpeg";
import { faMapPin } from "@fortawesome/free-solid-svg-icons";
import { Skills } from "../Skills/Skills";
import github from "../../assets/svg/github.svg";
import linkedin from "../../assets/svg/linkedin.svg";
import { OpenToWork } from "../../Components/OpenToWork";
import { Experience } from "../Experience/Experience";
import { useTranslation } from "react-i18next";

export const Home = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <div style={{ padding: "5px" }}>
      <div className="container-home">
        <div className="header-main">
          <img className="marto" src={martosnow} alt="martinvidela" />
          <div className="header-text">
            <h1>Martín Videla</h1>
            <p>⚛️React frontend developer.</p>
            <p className="header-text-pin">
              <FontAwesomeIcon icon={faMapPin} /> Argentina
            </p>
            <OpenToWork />
            <div className="social-media">
              <a href="https://github.com/martinvidela" target="_blank">
                <img className="github" src={github} alt="github" />
              </a>
              <a
                href="https://www.linkedin.com/in/martin-videla-frontdev/"
                target="_blank"
              >
                <img className="linkedin" src={linkedin} alt="linkedin" />
              </a>
              <a
                target="_blank"
                href="https://drive.google.com/file/d/1T4ybT5QiannU24AlXmCdJAb2_bgFZ7C6/view?usp=sharing"
              >
                <button className="cv">Resume</button>
              </a>
            </div>
          </div>
        </div>
        <div className="header-body">
          <h1>{t("header.title")}</h1>
          <p>{t("header.aboutMe")}</p>
          <br />
          <p>
           {t("header.aboutMe2")}
          </p>
        </div>
      </div>
      <Experience />
      <Skills />
    </div>
  );
};

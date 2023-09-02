import React from "react";
import "./Skills.css";

export const Skills = () => {
  return (
    <div id="skills" className="container-skills">
      <h1 className="title">My skills</h1>
      <h2 align='center'>Frontend</h2>
      <div className="skills-icons">
        <p align="center">
          <a href="https://skillicons.dev">
            <img className="skills-img" src="https://skillicons.dev/icons?i=html,css,bootstrap,sass,js,vite,react,styledcomponents,redux" />
          </a>
        </p>
      </div>
      <h2 style={{marginTop:'10px'}} align="center">Backend</h2>
      <div className="skills-icons">
        <p align="center">
          <a href="https://skillicons.dev">
            <img className="skills-img" src="https://skillicons.dev/icons?i=nodejs,express,firebase,mongodb" />
          </a>
        </p>
      </div>
    </div>
  );
};

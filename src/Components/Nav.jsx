import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
export const Nav = () => {
  return (
    <div className="container-nav">
      <div className="me">
        <Link to={"/"} className="controls">
          <h3>Yo</h3>
        </Link>
      </div>
      <div className="technologies">
      </div>
      <div className="projects">
        <Link to={'/projects'} className="controls">
          <h3>Proyectos</h3>
        </Link>
      </div>
    </div>
  );
};

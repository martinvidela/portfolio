import React from "react";
import "./Nav.css";
import { Link, useNavigate } from "react-router-dom";
export const Nav = () => {
  const navigate = useNavigate();

  const handleSkillsClick = () => {
    // Redirige primero al inicio y luego a habilidades después de un pequeño retraso
    navigate("/");
    setTimeout(() => {
      document.getElementById("skills").scrollIntoView({ behavior: "smooth" });
    }, 500); // Cambia este valor si necesitas ajustar la velocidad de desplazamiento
  };
  return (
    <div className="container-nav">
      <div className="me">
        <Link to={"/"} className="controls">
          <h3>Yo</h3>
        </Link>
      </div>
      <div className="technologies"></div>
      <div className="projects">
        <Link to={"/projects"} className="controls">
          <h3>Proyectos</h3>
        </Link>
      </div>
      <div className="projects">
        <a
          style={{ cursor: "pointer" }}
          href="#skills"
          onClick={handleSkillsClick}
          className="controls"
        >
          <h3>Habilidades</h3>
        </a>
      </div>
    </div>
  );
};

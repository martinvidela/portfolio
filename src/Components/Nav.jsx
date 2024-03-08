import React from "react";
import ar from "../../src/assets/img/ar.png";
import uk from "../../src/assets/img/uk.png";
import "./Nav.css";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
export const Nav = () => {
  const navigate = useNavigate();
  const [t, i18n] = useTranslation("global");
  const handleSkillsClick = () => {
    navigate("/");
    setTimeout(() => {
      document.getElementById("skills").scrollIntoView({ behavior: "smooth" });
    }, 500);
  };
  return (
    <div className="container-nav">
      <div style={{ display: "flex" }}>
        <div className="me">
          <Link to={"/"} className="controls">
            <h3>{t("navBar.me")}</h3>
          </Link>
        </div>
        <div className="technologies"></div>
        <div className="projects">
          <Link to={"/projects"} className="controls">
            <h3>{t("navBar.projects")}</h3>
          </Link>
        </div>
        <div className="projects">
          <a
            style={{ cursor: "pointer" }}
            href="#skills"
            onClick={handleSkillsClick}
            className="controls"
          >
            <h3>{t("navBar.skills")}</h3>
          </a>
        </div>
      </div>
      <div className="container-flags">
        <img onClick={()=> i18n.changeLanguage("es")} src={ar} alt="ar" />
        <img onClick={()=> i18n.changeLanguage("en")}src={uk} alt="uk" />
      </div>
    </div>
  );
};

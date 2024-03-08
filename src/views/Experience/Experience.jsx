import "./experience.css";
import { useTranslation } from "react-i18next";
export const Experience = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <div className="container-experience">
      <h1 className="title-experience">{t("workExperience.title")}</h1>
      <div style={{ padding: "10px" }}>
        <div>
          <div className="subtitle-container">
            <h3 className="subtitle-experience">
              Frontend Developer{" "}
              <small className="ultracore">(UltraCore)</small>
            </h3>
            <h3 style={{ fontWeight: "lighter" }}>
              08/2023 - {t("workExperience.1stExperience.present")}
            </h3>
          </div>
          <ul className="list-experience">
            <li>{t("workExperience.1stExperience.1st")}</li>
            <li>{t("workExperience.1stExperience.2nd")}</li>
            <li> {t("workExperience.1stExperience.3rd")}</li>
          </ul>
        </div>
        <div style={{ marginTop: "50px" }}>
          <div className="subtitle-container">
            <h3 className="subtitle-experience">
              Frontend Developer <small className="ultracore">(SPA)</small>
            </h3>
            <h3 style={{ fontWeight: "lighter" }}>06/2023 - 07/2023</h3>
          </div>
          <ul className="list-experience">
            <li>{t("workExperience.2ndExperience.1st")}</li>
            <li>{t("workExperience.2ndExperience.2nd")}</li>
            <li>{t("workExperience.2ndExperience.3rd")}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

import "./experience.css";
export const Experience = () => {
  return (
    <div className="container-experience">
      <h1 className="title-experience">Experiencia Laboral</h1>
      <div style={{padding:'10px'}}>
        <div>
          <div className="subtitle-container">
            <h3 className="subtitle-experience">
              Frontend Developer{" "}
              <small className="ultracore">(UltraCore)</small>
            </h3>
            <h3 style={{ fontWeight: "lighter" }}>08/2023 - Actualidad</h3>
          </div>
          <ul className="list-experience">
            <li>
              Desarollo de sitios web utilizando React | React Native | Redux |
              Custom Hooks | Tailwind CSS | Wordpress | NextJS
            </li>
            <li>
              Dentro de las mismas me encargo de la estética y arquitectura, y
              de refactorizar con el fin de mejorar la funcionalidad de los
              sitios.
            </li>
            <li>Trabajamos con metodología Scrum</li>
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
            <li>
              Desarollador de una SPA (single page application) utilizando React
              | TailwindCSS
            </li>
            <li>
              Implemente las conexiones al Backend utilizando Axios para
              conectarme a la base de datos.
            </li>
            <li>Trabajamos con metodología Scrum</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

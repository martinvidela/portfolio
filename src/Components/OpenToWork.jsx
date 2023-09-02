import React, { useEffect, useState } from "react";

export const OpenToWork = () => {
  const [titilando, setTitilando] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTitilando((titilando) => !titilando);
    }, 500);
    return () => {
        clearInterval(intervalId)
    };
  });

  const estiloParrafo = titilando
    ? {
        color: "rgb(255, 238, 0)",
        marginLeft: "4px",
        fontStyle: "italic",
        marginTop: "4px",
      }
    : { color: "transparent", marginTop: "4px" };
  return (
    <div>
      <p style={estiloParrafo}>Open To Work!</p>
    </div>
  );
};

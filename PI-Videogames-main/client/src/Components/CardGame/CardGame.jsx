import React from "react";
import { Link } from "react-router-dom";
import "./CardGame.css";
export default function CardGame({ image, name, genres, id }) {
  const divStyle = {
    backgroundRepeat: "no-repeat",
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    backgroundColor: "#80afcd",
    display: "flex",
    justifyContent: "flex-start",
    lineHeight: 1.5,
    background: `url(${image})`,
    backgroundPosition: "center",
    backgroundSize: "500px 500px",
    width: "350px",
    height: "500px",
    boxShadow: ` ${0} ${0} 50px rgba(${(0, 0, 0, 0.315)})`,
  };
  return (
    <div className="general">
      <Link className="link" to={`/videogames/${id}`}>
        <div style={divStyle}>
          <div className="card-body-info">
            <p>{}</p>
            <p className="name">{name}</p>
            <div>
              {Object.values(genres).map((gen) => (
                <p className="genres" key={gen.genresId}>
                  {gen.genresName}
                </p>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

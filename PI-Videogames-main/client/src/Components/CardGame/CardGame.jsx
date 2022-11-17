import React from "react";
import "./CardGame.css";
import { useDispatch, useSelector } from "react-redux";
export default function CardGame({ image, name, genres }) {
  return (
    <div className="general">
      <div className="card-body">
        <div className="card-body-info">
          <p className="name">{name}</p>
          <div>
            {genres.map((gen) => (
              <p className="genres">{gen}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

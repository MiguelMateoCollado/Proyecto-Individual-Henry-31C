import React from "react";
import "./buttons.css";
export default function ResetButton(event) {
  return (
    <div className="input-search">
      <div className="wrapper">
        <button onClick={event}>Reset</button>
      </div>
    </div>
  );
}

import React from "react";
import "./InputSearch.css";
export default function InputSearch() {
  return (
    <div className="form__group field">
      <input
        type="input"
        className="form__field"
        placeholder="Search Videogame..."
        name="name"
        id="name"
        required
      />
    </div>
  );
}

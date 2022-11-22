const axios = require("axios");
const express = require("express");
const { Genres } = require("../db.js");
const genres = express.Router();
// obtiene todos los generos de juegos y los agrega a una tabla
genres.get("/", async (req, res) => {
  try {
    const genres = await axios(
      `https://api.rawg.io/api/genres?key=9094a53c63b44a4bb20f4371bb277ede`
    );
    let generos = await genres.data.results.map((genres) => {
      Genres.findOrCreate({
        where: { name: genres.name, id: genres.id },
      });
    });
    const allGeneros = await Genres.findAll();
    res.status(200).json(allGeneros);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = genres;

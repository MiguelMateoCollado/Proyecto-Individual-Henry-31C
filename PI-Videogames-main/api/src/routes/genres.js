const axios = require("axios");
const express = require("express");
const { Genres } = require("../db.js");
const genres = express.Router();
const getGenres = require("./genres/getGenres");
// obtiene todos los generos de juegos y los agrega a una tabla
genres.get("/", async (req, res) => {
  try {
    await getGenres();
    const allGeneros = await Genres.findAll();
    res.status(200).json(await allGeneros);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = genres;

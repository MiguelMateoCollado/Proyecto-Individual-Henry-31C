const getPlatforms = require("./platforms/getPlatforms");
const express = require("express");
const { Plataformas } = require("../db.js");
const platforms = express.Router();
// obtiene todos los generos de juegos y los agrega a una tabla
platforms.get("/", async (req, res) => {
  try {
    await getPlatforms();
    const allplatforms = await Plataformas.findAll();
    res.status(200).json(allplatforms);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = platforms;

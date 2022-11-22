const axios = require("axios");
const express = require("express");
const { Plataformas } = require("../db.js");
const platforms = express.Router();
// obtiene todos los generos de juegos y los agrega a una tabla
platforms.get("/", async (req, res) => {
  try {
    const platforms = await axios(
      `https://api.rawg.io/api/platforms/lists/parents?key=9094a53c63b44a4bb20f4371bb277ede`
    );
    let plataformas = await platforms.data.results.map((platform) => {
      Plataformas.findOrCreate({
        where: { name: platform.name, id: platform.id },
      });
    });
    const allplatforms = await Plataformas.findAll();
    res.status(200).json(allplatforms);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = platforms;

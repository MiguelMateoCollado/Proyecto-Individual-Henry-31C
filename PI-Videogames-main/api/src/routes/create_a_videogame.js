const express = require("express");
const create_a_videogame = express.Router();
const { Videogame, Genres, Plataformas } = require("../db.js");
// crea un juego nuevo
create_a_videogame.post("/", async (req, res) => {
  try {

    const {
      name,
      id,
      date,
      description,
      rating,
      platforms,
      createInDb,
      image,
      genres,
    } = req.body;

    const newGame = await Videogame.create({
      name,
      id,
      date,
      description,
      rating,
      image,
      createInDb,
      platforms,
      genres,
    });

    let genresDB = await Genres.findAll({
      where: {
        name: genres,
      },
    });
    
    let platformsDB = await Plataformas.findAll({
      where: {
        name: platforms,
      },
    });

    newGame.addGenres(genresDB);
    newGame.addPlataformas(platformsDB);
    res.status(200).json("se creo");
  } catch (error) {
    res.status(400).send(error.message);
  }
});
module.exports = create_a_videogame;
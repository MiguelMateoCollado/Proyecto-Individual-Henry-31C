const express = require("express");
const create_a_videogame = express.Router();
const { Videogame } = require("../db.js");
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
      background_image,
      generoId,
    } = req.body;
    const newGame = await Videogame.create({
      name: name,
      id: id,
      date: date,
      description: description,
      rating: rating,
      image: background_image,
      platforms: platforms,
    });

    if (typeof generoId === "object") {
      for (const gen of generoId) {
        newGame.addGenero(gen);
      }
    } 
    newGame.addGenero(generoId);
    
    res.status(200).json(newGame);
  } catch (error) {
    res.status(400).send(error.message);
  }
});
module.exports = create_a_videogame;

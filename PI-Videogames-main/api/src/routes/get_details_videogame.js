const express = require("express");
const get_details_videogame = express.Router();
const axios = require("axios");
const { Videogame, Genres } = require("../db.js");
const getGames = require("./videogames/getGames.js");

get_details_videogame.get("/:id", async (req, res) => {
  // Esta parte analiza lo que pasaron por name y si encuentra algo en la base de datos lo trae
  try {
    let list = await getGames()
    
    const { id } = req.params;

    if (isNaN(id)) {
      const videogame = await Videogame.findOne({
        where: {
          id: req.params.id,
        },
        include: {
          model: Genres,
          through: {
            where: {
              videogameId: req.params.id,
            },
            attributes: [],
          },
        },
      });
      return res.json(videogame);
    }

    let videoGame = list.filter((game) => game.id === parseInt(id));

    const GameDetail = {
      name: videoGame[0].name,
      date: videoGame[0].released,
      image: videoGame[0].background_image,
      rating: videoGame[0].rating,
      platforms: videoGame[0].platforms.map(
        (platform) => platform.platform.name
      ),
      genres: videoGame[0].genres.map((gen) => gen.name),
    };
    
    return res.json(GameDetail);
  } catch (error) {
    res.json(error.message);
  }
});

module.exports = get_details_videogame;

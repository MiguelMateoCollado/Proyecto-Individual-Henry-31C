const express = require("express");
const videogame_lists = express.Router();
const { Videogame, Genres } = require("../db.js");
const axios = require("axios");
const getGames = require("./videogames/getGames");
// trae la lista de juegos.
videogame_lists.get("/", async (req, res) => {
  try {
    let videogames = await getGames();
    let gamesDB = await Videogame.findAll({
      include: Genres,
      through: {
        attributes: [],
      },
    });
    let query_name = req.query.name;

    videogames = await videogames.map((game) => {
      const newGame = {
        id: game.id,
        name: game.name,
        platforms: game.platforms.map((platform) => platform.platform.name),
        genres: game.genres.map((gen) => gen.name),
        date: game.released,
        rating: game.rating,
        image: game.background_image,
      };
      return newGame;
    });

    gamesDB = await gamesDB.map((game) => {
      const newGame = {
        id: game.id,
        name: game.name,
        platforms: game.platforms,
        genres: game.genres.map((gen) => gen.name),
        date: game.date,
        rating: game.rating,
        image: game.image,
        createdInDb: game.createdInDb,
      };
      return newGame;
    });

    videogames = await videogames.concat(gamesDB);

    // esta parte trae 120 juegos desde la API
    if (query_name) {
      // Crea la lista de juegos
      query_name = query_name.toLowerCase();

      games_by_filter = await videogames.filter((game) =>
        game.name.toLowerCase().includes(query_name)
      );

      // Crea la lista de juegos
      return res.status(200).json(games_by_filter);
    }
    return res.status(200).json(await videogames);
  } catch (error) {
    res.json({ error: "Estos juegos no existen" });
  }
});

// trae los primeros 15 juegos que coincidan con las letras del params

module.exports = videogame_lists;

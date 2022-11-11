const express = require("express");
const get_details_videogame = express.Router();
const axios = require("axios");
const { Videogame } = require("../db.js");

get_details_videogame.get("/:name", async (req, res) => {
/*
  const find_game = await Videogame.findByPk(req.params.name);

  if (find_game.length !== 0) {
    const { name, description, date, rating, platforms, background_image } =
      find_game;

    let game_detail = {
      name: name,
      image: background_image,
      description: description,
      date: date,
      rating: rating,
    };
    return res.json(game_detail);
  }
*/  
  const videogame = await axios(
    `https://api.rawg.io/api/games/${req.params.id}?key=9094a53c63b44a4bb20f4371bb277ede&page_size=100`
  );

  const {
    background_image,
    name,
    genres,
    description,
    date,
    rating,
    platforms,
  } = videogame.data;

  let game_detail = {
    name: name,
    image: background_image,
    genres: genres.map((genre) => {
      return genre.name;
    }),
    description: description,
    date: date,
    rating: rating,
    platforms: platforms.map((platform) => {
      return platform.platform.name;
    }),
  };
  res.json(game_detail);
});

module.exports = get_details_videogame;

const express = require("express");
const videogame_lists = express.Router();
const { Videogame } = require("../models/Videogame.js");
const axios = require("axios");
// trae la lista de juegos.
videogame_lists.get("/", async (req, res) => {
  try {
    // esta parte trae 120 juegos desde la API
    let key = "9094a53c63b44a4bb20f4371bb277ede";
    // trae una un array de la api con todos los detalles pero el que nos interesa es el result
    var url1 = await axios.get(
      `https://api.rawg.io/api/games?key=${key}&page_size=40`
    );
    var url2 = await axios.get(
      `https://api.rawg.io/api/games?key=${key}&page_size=40&page=2`
    );
    var url3 = await axios.get(
      `https://api.rawg.io/api/games?key=${key}&page_size=40&page=3`
    );
    let videogames = await axios.all([url1, url2, url3]).then(
      axios.spread((...responses) => {
        const responseOne = responses[0].data.results;
        const responseTwo = responses[1].data.results;
        const responesThree = responses[2].data.results;
        let combine = responseOne.concat(responseTwo).concat(responesThree);
        return combine;
      })
    );
    // esta parte trae 120 juegos desde la API
    let query_name = req.query.name;

    if (query_name) {
      let abjustment_name = await query_name.split(" ");

      //transforma la primera letra del texto en mayuscula
      abjustment_name = await abjustment_name
        .map((name) => name[0].toUpperCase() + name.substr(1))
        .join(" ");
      //transforma la primera letra del texto en mayuscula

      // Crea la lista de juegos
      games_by_filter = await videogames.filter((game) =>
        game.name.includes(abjustment_name)
      );
      // Crea la lista de juegos
      let list_of_games = await games_by_filter.map((game) => {
        let games = {
          id: game.id,
          name: game.name,
          image: game.background_image,
          genres: game.genres.map((genre) => {
            return genre.name;
          }),
        };
        return games;
      });
      return res.status(200).json(list_of_games);
    } else {
      let list_of_games = await videogames.map((game) => {
        let games = {
          id: game.id,
          name: game.name,
          image: game.background_image,
          genres: game.genres.map((genre) => {
            return { genresName: genre.name, genresId: genre.id };
          }),
        };
        return games;
      });

      return res.status(200).json(list_of_games);
    }
  } catch (error) {
    res.json({ error: "Estos juegos no existen" });
  }
});

// trae los primeros 15 juegos que coincidan con las letras del params

module.exports = videogame_lists;

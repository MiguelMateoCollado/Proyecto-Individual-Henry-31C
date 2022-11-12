const express = require("express");
const get_details_videogame = express.Router();
const axios = require("axios");
const { Videogame, Genero } = require("../db.js");

get_details_videogame.get("/:id", async (req, res) => {
  // Esta parte analiza lo que pasaron por name y si encuentra algo en la base de datos lo trae
  try {
    let key = "9094a53c63b44a4bb20f4371bb277ede";
    let url1 = await axios.get(
      `https://api.rawg.io/api/games?key=${key}&page_size=40`
    );
    let url2 = await axios.get(
      `https://api.rawg.io/api/games?key=${key}&page_size=40&page=2`
    );
    let url3 = await axios.get(
      `https://api.rawg.io/api/games?key=${key}&page_size=40&page=3`
    );
    const { id } = req.params;

    if (isNaN(id)) {
      const videogame = await Videogame.findOne({
        where: {
          id: req.params.id,
        },
        include: {
          model: Genero,
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

    let list = await axios.all([url1, url2, url3]).then(
      axios.spread(async (...responses) => {
        const responseOne = responses[0].data.results;
        const responseTwo = responses[1].data.results;
        const responesThree = responses[2].data.results;
        let combine = await responseOne
          .concat(responseTwo)
          .concat(responesThree);
        return await combine;
      })
    );
    let lista = list.filter((game) => game.id === parseInt(id));
    return res.json(lista);
  } catch (error) {
    res.json(error.message);
  }
});

module.exports = get_details_videogame;

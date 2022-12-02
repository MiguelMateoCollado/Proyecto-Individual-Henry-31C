const { Genres } = require("../../db");
const axios = require("axios");
async function getGenres() {
  const genres = await axios(
    `https://api.rawg.io/api/genres?key=9094a53c63b44a4bb20f4371bb277ede`
  );
  let generos = await genres.data.results.map((genres) => {
    Genres.findOrCreate({
      where: { name: genres.name, id: genres.id },
    });
  });
  return await generos;
}
module.exports = getGenres;

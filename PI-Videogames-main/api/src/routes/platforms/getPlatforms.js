const axios = require("axios");
const {Plataformas} = require("../../db")
async function getPlatforms() {
  const platforms = await axios(
    `https://api.rawg.io/api/platforms/lists/parents?key=9094a53c63b44a4bb20f4371bb277ede`
  );
  let plataformas = await platforms.data.results.map((platform) => {
    Plataformas.findOrCreate({
      where: { name: platform.name, id: platform.id },
    });
  });
  return await plataformas;
}

module.exports = getPlatforms
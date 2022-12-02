const axios = require("axios");

async function getGames() {
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
  let list = await axios.all([url1, url2, url3]).then(
    axios.spread(async (...responses) => {
      const responseOne = responses[0].data.results;
      const responseTwo = responses[1].data.results;
      const responesThree = responses[2].data.results;
      let combine = await responseOne.concat(responseTwo).concat(responesThree);
      return await combine;
    })
  );
  return list
}

module.exports = getGames;

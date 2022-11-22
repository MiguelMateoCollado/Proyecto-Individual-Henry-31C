const { Router } = require("express");
const videogame_lists = require("./videogame_lists.js");
const genres = require("./genres.js");
const get_details_videogame = require("./get_details_videogame.js");
const create_a_videogame = require("./create_a_videogame.js");
const platforms = require("./platforms.js")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();
router.use("/videogames", create_a_videogame);
router.use("/videogames", videogame_lists);
router.use("/genres", genres);
router.use("/platforms", platforms);
router.use("/videogames", get_details_videogame);
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;

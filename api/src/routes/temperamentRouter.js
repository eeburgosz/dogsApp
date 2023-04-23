const { Router } = require("express");
const { temperamentHandler } = require('../handlers/temperamentsHandler');

const temperamentRouter = Router();

// temperamentRouter.get('/', (req, res) => {
//    res.status(200).send("NIY: Ruta para obtener todos los temperamentos");
// });
temperamentRouter.get('/', temperamentHandler);


module.exports = temperamentRouter;
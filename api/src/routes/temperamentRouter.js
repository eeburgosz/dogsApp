const { Router } = require("express");

const temperamentRouter = Router();

temperamentRouter.get('/', (req, res) => {
   res.status(200).send("NIY: Ruta para obtener todos los temperamentos");
});


module.exports = temperamentRouter;
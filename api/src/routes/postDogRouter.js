const { Router } = require("express");

const postDogRouter = Router();
const { createDogHandler } = require("../handlers/dogsHandlers");


// postDogRouter.post('/', (req, res) => {
//    res.status(201).send("NIY: Ruta para crear un perro");
// });
postDogRouter.post('/', createDogHandler);

module.exports = postDogRouter;
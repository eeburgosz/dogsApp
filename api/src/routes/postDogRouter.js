const { Router } = require("express");

const postDogRouter = Router();
const { createDogHandler } = require("../handlers/dogsHandlers");

postDogRouter.post('/', createDogHandler);

module.exports = postDogRouter;
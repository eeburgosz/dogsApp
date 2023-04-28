const { Router } = require("express");
const postDogRouter = Router();
const { createDogHandler } = require("../handlers/dogsHandlers");
const { validatePost } = require("../middlewares/validations");

postDogRouter.post('/', validatePost, createDogHandler);

module.exports = postDogRouter;
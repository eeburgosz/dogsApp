const { Router } = require("express");
const { temperamentHandler } = require('../handlers/temperamentsHandler');

const temperamentRouter = Router();

temperamentRouter.get('/', temperamentHandler);

module.exports = temperamentRouter;
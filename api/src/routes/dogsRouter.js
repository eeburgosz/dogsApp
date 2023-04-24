const { Router } = require("express");

const dogsRouter = Router();
const { getDogsHandler, getDogByIdHandler } = require("../handlers/dogsHandlers");

//! Modularizo para sacar aparte los handlers "(req, res)=>{}"

dogsRouter.get('/', getDogsHandler);
dogsRouter.get('/:id', getDogByIdHandler);

module.exports = dogsRouter;
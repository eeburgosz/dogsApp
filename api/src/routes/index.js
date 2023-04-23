const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const dogsRouter = require("./dogsRouter.js");
const postDogRouter = require("./postDogRouter.js");
const temperamentRouter = require("./temperamentRouter.js");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//!-------------------------------------------
//! Paso 1. Modularizo las rutas de dogs y temperament
// router.get('/dogs', (req, res) => {
//    res.status(200).send("NIY: Ruta para obtener todos los perros");
// });
router.use("/api/dogs", dogsRouter);
router.use("/api/dog", postDogRouter);
router.use("/api/temperament", temperamentRouter);
//!-------------------------------------------


module.exports = router;

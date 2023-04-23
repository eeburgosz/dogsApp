const { createDog } = require('../controllers/dogsControllers');

const getDogsHandler = (req, res) => {
   const { name } = req.query;
   // console.log(name);
   name
      ? res.status(200).send("NIY: Ruta para obtener un perro por nombre")
      : res.status(200).send("NIY: Ruta para obtener todos los perros");
};
const getDogByIdHandler = (req, res) => {
   const { id } = req.params;
   res.status(200).send(`NIY: Obtiene el detalle del perro con ID ${id}`);
};
const createDogHandler = async (req, res) => {
   //! Como mi handler no debe interactuar con el modelo, creo un controller que lo haga. Por razones de buena práctica, no se le pasa la request al controller, por eso se desestructuran aquí en en hanlder y se le pasan como parámetro en la función.
   try {
      const { name, temperament, alturaMax, alturaMin, pesoMax, pesoMin, edadProm } = req.body;
      const newDog = await createDog(name, temperament, alturaMax, alturaMin, pesoMax, pesoMin, edadProm);
      res.status(201).json(newDog);
   } catch (error) {
      res.status(400).send({ error: error.message });
   }
};

module.exports = {
   getDogsHandler,
   getDogByIdHandler,
   createDogHandler,
};
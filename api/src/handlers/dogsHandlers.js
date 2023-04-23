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
const createDogHandler = (req, res) => {
   const { name, temperament } = req.body;
   res.status(201).send(`${name} - ${temperament}`);
};

module.exports = {
   getDogsHandler,
   getDogByIdHandler,
   createDogHandler,
};
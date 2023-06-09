const { createDog, getDogById, searchDogByName, getAllDogs } = require('../controllers/dogsControllers');

const createDogHandler = async (req, res) => {
   const { name, temperament, maxHeight, minHeight, maxWeight, minWeight, life_span, img, description } = req.body;
   try {
      const newDog = await createDog(name, temperament, maxHeight, minHeight, maxWeight, minWeight, life_span, img, description);
      res.status(201).json(newDog);
   } catch (error) {
      res.status(400).send({ error: error.message });
   }
};

const getDogsHandler = async (req, res) => {
   const { name } = req.query;
   try {
      const result = name ? await searchDogByName(name) : await getAllDogs();
      res.status(200).json(result);
   } catch (error) {
      res.status(400).json({ error: error.message });
   }
};

const getDogByIdHandler = async (req, res) => {
   const { id } = req.params;
   const source = isNaN(id)
      ? "DB"
      : "API";
   try {
      const dog = await getDogById(id, source);
      res.status(200).json(dog);
   } catch (error) {
      res.status(400).json({ error: error.message });
   }
};

module.exports = {
   getDogsHandler,
   getDogByIdHandler,
   createDogHandler,
};
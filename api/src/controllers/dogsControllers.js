const axios = require('axios');
const { Dog, Temperament, DogTemperament } = require('../db');
const { cleanArray, cleanObj } = require('../utils/utils');


const createDog = async (name, temperament, maxHeight, minHeight, maxWeight, minWeight, life_span, img, description) => {

   const exist = await Dog.findOne({
      where: { name }
   });
   if (exist) throw new Error("Dog already exists");

   const newDog = await Dog.create({
      name,
      maxHeight,
      minHeight,
      maxWeight,
      minWeight,
      life_span,
      img,
      description,
   });
   const selectedTemperaments = await Temperament.findAll({
      where: {
         name: temperament,
      },
   });
   await newDog.addTemperaments(selectedTemperaments);

   return {
      id: newDog.id,
      name: newDog.name,
      temperament: selectedTemperaments.map((temperament) => temperament.name),
      maxHeight: newDog.maxHeight,
      minHeight: newDog.minHeight,
      maxWeight: newDog.maxWeight,
      minWeight: newDog.minWeight,
      life_span: newDog.life_span,
      img: newDog.img,
      description: newDog.description,
   };
};

const getDogById = async (id, source) => {
   if (source === "API") {
      const resp = await axios.get("https://api.thedogapi.com/v1/breeds/");
      const dogApiRaw = resp.data.find(e => e.id === Number(id));
      if (!dogApiRaw) throw new Error("ID not found");
      const dogApi = cleanObj(dogApiRaw);
      return dogApi;
   } else {
      return await Dog.findByPk(id);
   }
};

const searchDogByName = async (name) => {
   await Dog.findAll({
      where: {
         name
      }
   });
};

const getAllDogs = async () => {
   const dogsDb = await Dog.findAll();
   const dogsApiRaw = (await axios.get("https://api.thedogapi.com/v1/breeds/")).data;
   // console.log(dogsApiRaw);
   const dogsApi = cleanArray(dogsApiRaw);
   return [...dogsDb, ...dogsApi];

};

module.exports = {
   createDog,
   getDogById,
   searchDogByName,
   getAllDogs,
};
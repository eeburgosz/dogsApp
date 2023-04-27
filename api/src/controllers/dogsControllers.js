const axios = require('axios');
const { Dog, Temperament } = require('../db');
const { cleanArray, cleanObj, cleanDbDog, cleanDbDogs } = require('../utils/utils');


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

   return newDog;
};

const getDogById = async (id, source) => {
   if (source === "API") {
      const resp = await axios.get("https://api.thedogapi.com/v1/breeds/");
      const dogApiRaw = resp.data.find(e => e.id === Number(id));
      if (!dogApiRaw) throw new Error("ID not found");
      const dogApi = cleanObj(dogApiRaw);
      return dogApi;
   } else {
      const dbDogRaw = await Dog.findByPk(id, {
         include: [{
            model: Temperament
         }]
      });
      // console.log(dbDogRaw.toJSON());
      const dbDog = cleanDbDog(dbDogRaw);
      // console.log(dbDog);
      return dbDog;
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
   const dogsDbRaw = await Dog.findAll({
      include: [{
         model: Temperament
      }]
   });
   // console.log(dogsDbRaw);
   const dogsDb = cleanDbDogs(dogsDbRaw);
   console.log("Dogs DB: ", dogsDb);
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
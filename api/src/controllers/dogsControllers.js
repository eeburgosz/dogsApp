const axios = require('axios');
const { Op } = require("sequelize");
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
            model: Temperament,
         }]
      });
      const dbDog = cleanDbDog(dbDogRaw);
      return dbDog;
   }
};

const searchDogByName = async (name) => {
   const dogsApiRaw = (await axios.get("https://api.thedogapi.com/v1/breeds/")).data;
   const dogsApi = cleanArray(dogsApiRaw);
   let dogsApiByName = [];
   dogsApi.forEach(dog => {
      if (dog.name.toLowerCase().includes(name.toLowerCase())) dogsApiByName.push(dog);
   });
   const dogsDbRaw = await Dog.findAll({
      where: {
         name: {
            [Op.iLike]: `%${name}%`,
         },
      },
      include: [{
         model: Temperament
      }]
   });
   const dogsDbByName = cleanDbDogs(dogsDbRaw);
   return [...dogsDbByName, ...dogsApiByName];
};

const getAllDogs = async () => {
   const dogsDbRaw = await Dog.findAll({
      include: [{
         model: Temperament
      }]
   });
   const dogsDb = cleanDbDogs(dogsDbRaw);
   const dogsApiRaw = (await axios.get("https://api.thedogapi.com/v1/breeds/")).data;
   const dogsApi = cleanArray(dogsApiRaw);
   return [...dogsDb, ...dogsApi];
};

module.exports = {
   createDog,
   getDogById,
   searchDogByName,
   getAllDogs,
};
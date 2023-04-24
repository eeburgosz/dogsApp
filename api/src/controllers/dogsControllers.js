const axios = require('axios');
const { Dog, Temperament } = require('../db');
const { cleanArray, cleanObj } = require('../utils/utils');


const createDog = async (name, temperament, alturaMax, alturaMin, pesoMax, pesoMin, edadProm) => {
   return await Dog.create({
      name,
      temperament,
      alturaMax,
      alturaMin,
      pesoMax,
      pesoMin,
      edadProm
   });
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
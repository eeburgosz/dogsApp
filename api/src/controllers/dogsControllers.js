const { Dog } = require('../db');

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

module.exports = {
   createDog
};
const axios = require("axios");
const { Temperament } = require("../db");

const getApiTemperaments = async () => {
   const resp = await axios.get("https://api.thedogapi.com/v1/breeds");
   let temperamentApi = [];
   for (let i = 0; i < resp.data.length; i++) {
      let obj = resp.data[i];
      if (obj.hasOwnProperty("temperament")) {
         let temperamentos = obj.temperament.split(",");
         for (let j = 0; j < temperamentos.length; j++) {
            let temperamento = temperamentos[j].trim();
            if (temperamentApi.indexOf(temperamento) === -1) {
               temperamentApi.push(temperamento);
            }
         }
      }
   }
   return temperamentApi;
};

const getDbTemperaments = async () => {
   let temps = await getApiTemperaments();
   temps.forEach(async temp => {
      await Temperament.findOrCreate({
         where: {
            name: temp
         }
      });
   });
   return temps;
};

module.exports = {
   getDbTemperaments
};


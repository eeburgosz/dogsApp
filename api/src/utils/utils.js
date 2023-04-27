const cleanData = (data) => {
   const temperamentArray = data.temperament ? data.temperament.split(", ") : null;
   const maxWeight = Math.max(...data.weight.metric.split(" - "));
   const minWeight = Math.min(...data.weight.metric.split(" - "));
   const maxHeight = Math.max(...data.height.metric.split(" - "));
   const minHeight = Math.min(...data.height.metric.split(" - "));
   const lifeSpanArray = data.life_span.split(" - ");
   const lifeSpan = lifeSpanArray[1];
   const img = data.image.url ? data.image.url : null;
   const description = data.description ? data.description : null;

   return {
      id: data.id,
      name: data.name,
      temperament: temperamentArray,
      maxWeight,
      minWeight,
      maxHeight,
      minHeight,
      life_span: lifeSpan,
      img,
      description,
      created: false
   };
};

const cleanArray = (array) => {
   return array.map((arr) => cleanData(arr));
};

const cleanObj = (obj) => {
   return cleanData(obj);
};

const cleanDbDog = (dbDogRaw) => {
   //console.log(dbDogRaw.toJSON().Temperaments);
   const temperament = dbDogRaw.Temperaments.reduce((acc, curr) => {
      return acc.concat(curr.name);
   }, []);

   const formattedDog = {
      id: dbDogRaw.id,
      name: dbDogRaw.name,
      maxHeight: dbDogRaw.maxHeight,
      minHeight: dbDogRaw.minHeight,
      maxWeight: dbDogRaw.maxWeight,
      minWeight: dbDogRaw.minWeight,
      life_span: dbDogRaw.life_span,
      img: dbDogRaw.img,
      description: dbDogRaw.description,
      created: dbDogRaw.created,
      temperament: temperament
   };

   return formattedDog;
};

const cleanDbDogs = (dogsDbRaw) => {
   return dogsDbRaw.map((item) => {
      return {
         id: item.id,
         name: item.name,
         maxHeight: item.maxHeight,
         minHeight: item.minHeight,
         maxWeight: item.maxWeight,
         minWeight: item.minWeight,
         life_span: item.life_span,
         img: item.img,
         description: item.description,
         created: item.created,
         temperament: item.Temperaments.map((temp) => temp.name),
      };
   });
};

module.exports = { cleanArray, cleanObj, cleanDbDog, cleanDbDogs };
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
   };
};

const cleanArray = (array) => {
   return array.map((arr) => cleanData(arr));
};

const cleanObj = (obj) => {
   return cleanData(obj);
};

module.exports = { cleanArray, cleanObj };
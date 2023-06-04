export const validateName = (name) => {
   if (name.trim() === "" || name.length < 2 || name.length > 30) {
      return "The name must contain between 3 and 30 characters";
   }
};

export const validateDescription = (description) => {
   if (
      description.trim() === "" ||
      description.length < 2 ||
      description.length > 250
   ) {
      return "The description must contain between 3 and 250 characters";
   }
};

export const validateHeight = (minHeight, maxHeight) => {
   if (minHeight === "" || minHeight < 0 || minHeight > maxHeight) {
      return "Min. height must be greater than 1 and less than max. height";
   }

   if (maxHeight === "" || maxHeight > 120 || maxHeight < minHeight) {
      return "Max. height must be less than 120 and greater than min. height";
   }
};

export const validateWeight = (minWeight, maxWeight) => {
   if (minWeight === "" || minWeight < 0 || minWeight > maxWeight) {
      return "Min. weight must be greater than 1 and less than max. weight";
   }

   if (maxWeight === "" || maxWeight > 80 || maxWeight < minWeight) {
      return "Max. weight must be less than 80 and greater than min. weight";
   }
};
